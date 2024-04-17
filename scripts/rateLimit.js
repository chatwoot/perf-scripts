import http from "k6/http";
import { Rate, Counter } from "k6/metrics";
import exec from "k6/execution";
import { check, group, sleep } from "k6";

import { endpoints, scenarios } from "./endpoints/index.js";

const hostname = __ENV.HOSTNAME || "staging.chatwoot.com";
const accountId = __ENV.ACCOUNT_ID || 1;
const apiAccessToken = __ENV.API_ACCESS_TOKEN;

const StatusNon429 = new Counter("StatusNon429");

const endpointLimits = {};
endpoints.forEach((endpoint) => {
  endpointLimits[`StatusNon429{endpoint:${endpoint.name}}`] =
    endpoint.threshold;
});

export const options = {
  scenarios,
  thresholds: endpointLimits,
};

function testEndpoint(endpoint, method, name, payload) {
  const url = endpoint.startsWith("https")
    ? endpoint
    : `https://${hostname}/api/v1/${endpoint}`;
  const params = {
    headers: {
      api_access_token: apiAccessToken,
      "Content-Type": "application/json",
    },
    tags: { endpoint: name },
  };
  if (payload) {
    params.body = JSON.stringify(payload);
  }

  const response = http[method](url, params);
  StatusNon429.add(response.status !== 429, { endpoint: name });
}

export default function () {
  const scenarioName = exec.scenario.name;

  const endpoint = endpoints.find((endpoint) => endpoint.name === scenarioName);

  if (endpoint) {
    group(endpoint.path, function () {
      testEndpoint(
        endpoint.path,
        endpoint.method,
        endpoint.name,
        endpoint.payload
      );
    });
  } else {
    console.warn(`No endpoint found for scenario: ${scenarioName}`);
  }

  sleep(Math.random() * 2);
}
