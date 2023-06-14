import http from "k6/http";
import { sleep } from "k6";

const hostname = __ENV.HOSTNAME || "staging.chatwoot.com";
const account_id = __ENV.ACCOUNT_ID || 1;

export const options = {
  vus: 3, // https://k6.io/docs/using-k6/k6-options/reference/#vus
  iterations: 90, // https://k6.io/docs/using-k6/k6-options/reference/#iterations
  throw: true,
};

export default function () {
  const url = `https://${hostname}/api/v1/accounts/${account_id}/conversations`;
  http.get(url, {
    headers: {
      api_access_token: __ENV.API_ACCESS_TOKEN,
      "Content-Type": "application/json",
    },
  });
  sleep(2);
}
