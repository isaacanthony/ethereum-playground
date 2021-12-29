Oracle = artifacts.require('Oracle');

contract('Oracle', async () => {
  let oracle;

  beforeEach(async () => {
    oracle = await Oracle.deployed();
  });

  context('#isAlive', async () => {
    it('returns true', async () => {
      expect(await oracle.isAlive()).to.be.true;
    });
  });

  context('#getLatestPrice', async() => {
    it('returns price', async () => {
      const price = web3.utils.toBN(await oracle.getLatestPrice()).toNumber();
      expect(price).to.be.above(3000);
      expect(price).to.be.below(5000);
    });
  });
});
