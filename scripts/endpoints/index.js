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

import {
  endpoint as signupEndpoint,
  scenario as signupScenario,
} from "./signup.js";

import {
  endpoint as resetPasswordEndpoint,
  scenario as resetPasswordScenario,
} from "./resetPassword.js";

export const endpoints = [
  resendConfirmationEndpoint,
  contactSearchEndpoint,
  transcriptEndpoint,
  signupEndpoint,
  resetPasswordEndpoint,
];

export const scenarios = Object.assign(
  {},
  resendConfirmationScenario,
  contactSearchScenario,
  transcriptScenario,
  signupScenario,
  resendConfirmationScenario,
  resetPasswordScenario
);
