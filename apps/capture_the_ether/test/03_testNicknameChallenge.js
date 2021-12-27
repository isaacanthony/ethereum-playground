const NicknameChallenge = artifacts.require('NicknameChallenge');

contract('NicknameChallenge', (accounts) => {
  let target;

  beforeEach(async () => {
    target = await NicknameChallenge.new(accounts[0]);
  });

  describe('#setNickname', async () => {
    it('updates state', async () => {
      assert.equal(await target.nicknameOf(accounts[0]), 0);

      await target.setNickname(
        web3.utils.utf8ToHex("testNickname"),
        {from: accounts[0]},
      );

      assert.equal(
        web3.utils.hexToUtf8(await target.nicknameOf(accounts[0])),
        "testNickname",
      );
    });
  });
});
