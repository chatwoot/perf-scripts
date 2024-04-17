const ENDPOINT_NAME = "sign_in";
const hostname = __ENV.HOSTNAME || "staging.chatwoot.com";
export const endpoint = {
  name: ENDPOINT_NAME,
  path: `https://${hostname}/auth/sign_in`,
  method: "post",
  payload: { email: "hello@example.com" },
  threshold: ["count<=5"],
};

export const scenario = {
  [ENDPOINT_NAME]: {
    executor: "constant-vus",
    vus: 2,
    tags: { endpoint: ENDPOINT_NAME },
    duration: "15s",
  },
};
