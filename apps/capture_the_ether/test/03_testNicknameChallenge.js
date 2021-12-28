const NicknameChallenge = artifacts.require('NicknameChallenge');

contract('NicknameChallenge', (accounts) => {
  let target;

  beforeEach(async () => {
    target = await NicknameChallenge.new(accounts[0]);
  });

  describe('#setNickname', async () => {
    it('updates state', async () => {
      expect(
        web3.utils.toBN(await target.nicknameOf(accounts[0])).toNumber()
      ).to.equal(0);

      await target.setNickname(
        web3.utils.utf8ToHex('testNickname'),
        {from: accounts[0]},
      );

      expect(
        web3.utils.hexToUtf8(await target.nicknameOf(accounts[0]))
      ).to.equal('testNickname');
    });
  });
});
