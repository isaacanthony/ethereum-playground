PriceFeed = artifacts.require('PriceFeed');

contract('PriceFeed', async () => {
  let feed;

  beforeEach(async () => {
    feed = await PriceFeed.deployed();
  });

  context('#isAlive', async () => {
    it('returns true', async () => {
      expect(await feed.isAlive()).to.be.true;
    });
  });

  context('#getLatestPrice', async() => {
    it('returns price', async () => {
      const price = web3.utils.toBN(await feed.getLatestPrice()).toNumber();
      expect(price).to.be.above(3000);
      expect(price).to.be.below(5000);
    });
  });
});
