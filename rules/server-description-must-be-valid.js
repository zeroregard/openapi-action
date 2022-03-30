module.exports = ServerDescriptionMustBeValid;

/** @type {import('@redocly/openapi-cli').OasRule} */
function ServerDescriptionMustBeValid(options) {
  return {
    DefinitionRoot(root, { report, location }) {
      if (!root.hasOwnProperty('servers')) {
        report({
          message: 'Servers must be present.',
          location: location.child(['openapi']).key(),
        });
        return;
      }

      if (!Array.isArray(root.servers) || root.servers.length === 0) {
        report({
          message: 'Servers must be a non-empty array.',
          location: location.child(['servers']).key(),
        });
      }

      root.servers.forEach(server => {
        if (!server.description) {
          report({
            message: 'A server definition must have a description.',
            location: location.child(['servers']).key(),
          });
        }
        if (!isValidDescription(server.description)) {
          report({
            message: 'Server description must be an environment keyword - valid values are: TEST, STAGE, and PROD',
            location: location.child(['servers']).key(),
          });
        }
      });
    },
  };
}

function isValidDescription(description) {
  return ['TEST', 'STAGE', 'PROD'].includes(description);
}