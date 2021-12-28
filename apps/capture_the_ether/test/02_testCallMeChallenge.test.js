const CallMeChallenge = artifacts.require('CallMeChallenge');

contract('CallMeChallenge', (accounts) => {
  let target;

  beforeEach(async () => {
    target = await CallMeChallenge.new();
  });

  describe('#callme', async () => {
    it('updates state', async () => {
      expect(await target.isComplete()).to.be.false;
      await target.callme();
      expect(await target.isComplete()).to.be.true;
    });
  });
});
