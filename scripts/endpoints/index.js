import {
  endpoint as resendConfirmationEndpoint,
  scenario as resendConfirmationScenario,
} from "./resendConfirmation.js";
import {
  endpoint as contactSearchEndpoint,
  scenario as contactSearchScenario,
} from "./contactSearch.js";

import {
  endpoint as transcriptEndpoint,
  scenario as transcriptScenario,
} from "./transcript.js";

export const endpoints = [
  resendConfirmationEndpoint,
  contactSearchEndpoint,
  transcriptEndpoint,
];

export const scenarios = Object.assign(
  {},
  resendConfirmationScenario,
  contactSearchScenario,
  transcriptScenario
);
