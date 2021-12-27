const CallMeChallenge = artifacts.require('CallMeChallenge');

contract('CallMeChallenge', (accounts) => {
  let target;

  beforeEach(async () => {
    target = await CallMeChallenge.new();
  });

  describe('#callme', async () => {
    it('updates state', async () => {
      assert.isFalse(await target.isComplete());
      await target.callme();
      assert.isTrue(await target.isComplete());
    });
  });
});
