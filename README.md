# Chatwoot Performance Testing

This is a repository of scripts used to test Chatwoot API. It uses [k6](https://k6.io) to hit an endpoint with multiple requests and logs the performance

## Running the script

1. Instructions to install k6 are documented [here](https://k6.io/docs/get-started/installation/). For MacOS, you can install it via brew using `brew install k6`
1. Run `pnpm i` to install dependencies, it installs the `dotenv-cli` and types for k6.
1. Copy the `.env.example` file to `.env` and add the details
1. Run `pnpm test scripts/conversation.js`

### Changing parameters

These are the default options exported, which will run 90 iterations, shared over 3 virtual users. You can tweak this to run different scenarios

```js
export const options = {
  vus: 3, // https://k6.io/docs/using-k6/k6-options/reference/#vus
  iterations: 90, // https://k6.io/docs/using-k6/k6-options/reference/#iterations
  throw: true,
};
```

## Running Rate limiter test

> Do not test this on a production instance, as it can disrupt the normal working of the service

1. Ensure Rack Attack is enabled on the instance
1. Reset the limits before each test by running `Rack::Attack.reset!` on the rails console.
1. Run `pnpm test scripts/rateLimit.sj`
1. The output will run for each configured endpoint

### Adding a new endpoint

To add a new endpoint create a new file in `scripts/endpoints` directory, add this endpoint to `scripts/endpoints/index.js` and that is it. You can find the docs for configuring this [here](https://k6.io/docs/using-k6/k6-options/)
