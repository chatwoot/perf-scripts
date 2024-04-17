const ENDPOINT_NAME = "contacts_search";

export const endpoint = {
  name: "contacts_search",
  path: `accounts/${__ENV.ACCOUNT_ID}/contacts/search`,
  method: "get",
  payload: { q: "test" },
  threshold: ["count<=5"],
};

export const scenario = {
  [ENDPOINT_NAME]: {
    executor: "constant-vus",
    vus: 1,
    tags: { endpoint: ENDPOINT_NAME },
    duration: "10s",
  },
};
