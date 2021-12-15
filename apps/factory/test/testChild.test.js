const Child = artifacts.require('Child');

contract('Child', (accounts) => {
  let child;

  beforeEach(async () => {
    child = await Child.deployed();
  });

  describe('#add', async () => {
    it('adds two numbers', async () => {
      assert.equal(await child.add(1, 2), 3);
    });
  });
});
