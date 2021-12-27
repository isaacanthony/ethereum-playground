const DeployChallenge = artifacts.require('DeployChallenge');

contract('DeployChallenge', (accounts) => {
  let target;

  beforeEach(async () => {
    target = await DeployChallenge.new();
  });

  describe('#isComplete', async () => {
    it('returns true', async () => {
      assert.isTrue(await target.isComplete());
    });
  });
});
