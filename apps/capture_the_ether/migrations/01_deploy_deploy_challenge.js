const DeployChallenge = artifacts.require('DeployChallenge');

module.exports = function (deployer) {
  deployer.deploy(DeployChallenge);
};
