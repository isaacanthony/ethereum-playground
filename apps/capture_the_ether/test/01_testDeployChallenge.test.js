const DeployChallenge = artifacts.require('DeployChallenge');

contract('DeployChallenge', (accounts) => {
  let deployChallenge;

  beforeEach(async () => {
    deployChallenge = await DeployChallenge.deployed();
  });

  describe('#isComplete', async () => {
    it('returns true', async () => {
      assert.isTrue(await deployChallenge.isComplete());
    });
  });
});
