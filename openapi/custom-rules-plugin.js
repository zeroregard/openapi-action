const ServerDescriptionMustBeValid = require('./rules/server-description-must-be-valid');
const id = 'custom-rules';

/** @type {import('@redocly/openapi-cli').CustomRulesConfig} */
const rules = {
  oas3: {
    'server-description-must-be-valid': ServerDescriptionMustBeValid,
  },
};

module.exports = {
  id,
  rules,
};