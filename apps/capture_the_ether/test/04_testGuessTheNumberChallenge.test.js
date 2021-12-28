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

      expect(await target.isComplete()).to.be.false;

      await target.guess(await target.answer(), {
        from: accounts[0],
        value: web3.utils.toWei('1', 'ether'),
      });

      expect(await target.isComplete()).to.be.true;

      const newBalance = web3.utils.fromWei(
        await web3.eth.getBalance(accounts[0]),
        'ether',
      );

      expect(Math.floor(oldBalance) + 1).to.equal(Math.floor(newBalance));
    });
  });
});
