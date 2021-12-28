const GuessTheNewNumberChallenge = artifacts.require(
  'GuessTheNewNumberChallenge'
);

contract('GuessTheNewNumberChallenge', (accounts) => {
  let target;

  beforeEach(async () => {
    target = await GuessTheNewNumberChallenge.new({
      value: web3.utils.toWei('1', 'ether'),
    });
  });

  describe('#guess', async () => {
    it('rewards the correct guess', async () => {
      const oldBalance = web3.utils.fromWei(
        await web3.eth.getBalance(accounts[0]),
        'ether',
      );

      // const block = await web3.eth.getBlock('latest');
      //
      // const guessHash = web3.utils.soliditySha3(
      //   {type: 'bytes', value: block.hash},
      //   {type: 'uint', value: block.timestamp},
      // );
      //
      // const guessInt = web3.utils.toBN(guessHash).toNumber();
      //
      // console.log(guessInt);
      //
      // assert.isFalse(await target.isComplete());
      //
      // await target.guess(guessInt, {
      //   from: accounts[0],
      //   value: web3.utils.toWei('1', 'ether'),
      // });
      //
      // assert.isTrue(await target.isComplete());
      //
      // const newBalance = web3.utils.fromWei(
      //   await web3.eth.getBalance(accounts[0]),
      //   'ether',
      // );
      //
      // assert.equal(
      //   Math.floor(oldBalance) + 1,
      //   Math.floor(newBalance),
      // );
    });
  });
});
