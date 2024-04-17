const ENDPOINT_NAME = "resend_confirmation";

export const endpoint = {
  name: ENDPOINT_NAME,
  path: `profile/resend_confirmation`,
  method: "post",
  threshold: ["count<=5"],
};

export const scenario = {
  [ENDPOINT_NAME]: {
    executor: "constant-vus",
    vus: 1,
    tags: { endpoint: ENDPOINT_NAME },
    duration: "30s",
  },
};
