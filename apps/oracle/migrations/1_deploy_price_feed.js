const PriceFeed = artifacts.require('PriceFeed');

module.exports = function(deployer) {
  deployer.deploy(PriceFeed, '0x9326BFA02ADD2366b30bacB125260Af641031331');
};
