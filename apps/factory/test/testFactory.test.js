const Child = artifacts.require('Child');
const Factory = artifacts.require('Factory');

contract('Factory', (accounts) => {
  let factory;

  beforeEach(async () => {
    factory = await Factory.deployed();
  });

  describe('#addChild', async () => {
    it('deploys child contract', async () => {
      assert.equal(await factory.numChildren(), 0);
      await factory.addChild();
      assert.equal(await factory.numChildren(), 1);
    });
  });

  describe('#getChild', async () => {
    it('retrieves child contract', async () => {
      assert.equal(await factory.numChildren(), 1);
      let child = new Child(await factory.getChild(0));
      assert.equal(await child.add(1, 2), 3);
    });
  });
});
