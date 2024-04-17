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

import {
  endpoint as superAdminSignInEndpoint,
  scenario as superAdminSignInScenario,
} from "./superSignIn.js";

import {
  endpoint as signInEndpoint,
  scenario as signInScenario,
} from "./signIn.js";

export const endpoints = [
  resendConfirmationEndpoint,
  contactSearchEndpoint,
  transcriptEndpoint,
  signupEndpoint,
  resetPasswordEndpoint,
  superAdminSignInEndpoint,
  signInEndpoint,
];

export const scenarios = Object.assign(
  {},
  resendConfirmationScenario,
  contactSearchScenario,
  transcriptScenario,
  signupScenario,
  resendConfirmationScenario,
  resetPasswordScenario,
  superAdminSignInScenario,
  signInScenario
);
