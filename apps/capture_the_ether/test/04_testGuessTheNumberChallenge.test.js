const GuessTheNumberChallenge = artifacts.require('GuessTheNumberChallenge');

contract('GuessTheNumberChallenge', (accounts) => {
  let target;

  beforeEach(async () => {
    target = await GuessTheNumberChallenge.new({
      value: web3.utils.toWei('1', 'ether'),
    });
  });

  describe('#guess', async () => {
    it('rewards the correct guess', async () => {
      const oldBalance = web3.utils.fromWei(
        await web3.eth.getBalance(accounts[0]),
        'ether',
      );

      assert.isFalse(await target.isComplete());

      await target.guess(await target.answer(), {
        from: accounts[0],
        value: web3.utils.toWei('1', 'ether'),
      });

      assert.isTrue(await target.isComplete());

      const newBalance = web3.utils.fromWei(
        await web3.eth.getBalance(accounts[0]),
        'ether',
      );

      assert.equal(
        Math.floor(oldBalance) + 1,
        Math.floor(newBalance),
      );
    });
  });
});
