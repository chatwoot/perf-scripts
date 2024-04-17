const ENDPOINT_NAME = "signup";

export const endpoint = {
  name: ENDPOINT_NAME,
  path: "/accounts",
  method: "post",
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
