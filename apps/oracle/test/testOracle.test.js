Oracle = artifacts.require('Oracle');

contract('Oracle', async () => {
  let oracle;

  beforeEach(async () => {
    oracle = await Oracle.deployed();
  });

  context('#isAlive', async () => {
    it('returns true', async () => {
      expect(await oracle.isAlive()).to.be.true;
    });
  });
});
