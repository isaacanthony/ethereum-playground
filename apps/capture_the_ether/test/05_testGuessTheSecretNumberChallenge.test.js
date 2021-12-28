const GuessTheSecretNumberChallenge = artifacts.require(
  'GuessTheSecretNumberChallenge'
);

contract('GuessTheSecretNumberChallenge', (accounts) => {
  let target;

  beforeEach(async () => {
    target = await GuessTheSecretNumberChallenge.new({
      value: web3.utils.toWei('1', 'ether'),
    });
  });

  describe('#guess', async () => {
    it('rewards the correct guess', async () => {
      const oldBalance = web3.utils.fromWei(
        await web3.eth.getBalance(accounts[0]),
        'ether',
      );

      const targetHash = await target.answerHash();
      let guessInt;
      let guessHash;

      for (guessInt = 0; guessInt < 1e3; guessInt++) {
        guessHash = web3.utils.soliditySha3({
          type: 'uint8',
          value: guessInt.toString(),
        });

        if (guessHash === targetHash) {
          break;
        }
      }

      expect(await target.isComplete()).to.be.false;

      await target.guess(guessInt, {
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
