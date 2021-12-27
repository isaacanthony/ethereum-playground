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

      assert.isFalse(await target.isComplete());

      await target.guess(guessInt, {
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
