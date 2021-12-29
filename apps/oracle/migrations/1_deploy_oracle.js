const Oracle = artifacts.require('Oracle');

module.exports = function(deployer) {
  deployer.deploy(Oracle, '0x9326BFA02ADD2366b30bacB125260Af641031331');
};
