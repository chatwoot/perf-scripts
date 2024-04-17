const ENDPOINT_NAME = "transcript";

export const endpoint = {
  name: "transcript",
  path: `accounts/${__ENV.ACCOUNT_ID}/conversations/47/transcript`,
  method: "post",
  threshold: ["count<=30"],
};

export const scenario = {
  [ENDPOINT_NAME]: {
    executor: "shared-iterations",
    vus: 5,
    tags: { endpoint: ENDPOINT_NAME },
    iterations: 50,
  },
};
