const TokenSaleChallenge = artifacts.require('TokenSaleChallenge');

contract('TokenSaleChallenge', (accounts) => {
  let target;

  beforeEach(async () => {
    target = await TokenSaleChallenge.new({
      value: web3.utils.toWei('1', 'ether'),
    });
  });

  describe('#isComplete', async () => {
    it('returns true', async () => {
      assert.isFalse(await target.isComplete());

      await target.buy(10, {value: web3.utils.toWei('10', 'ether')});

      await Promise.all([target.sell(1), target.sell(1)]);

      // console.log(
      //   web3.utils.toBN(await target.balanceOf(accounts[0])).toNumber()
      // );
    });
  });
});
