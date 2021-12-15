var ENS = artifacts.require('ENS');

module.exports = function(deployer) {
  deployer.deploy(ENS);
};
