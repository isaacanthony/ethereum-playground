const Proxy = artifacts.require('Proxy');

contract('Proxy', (accounts) => {
  let proxy;

  beforeEach(async () => {
    proxy = await Proxy.deployed();
  });

  describe('#getAddress', async () => {
    it('allows address to be read', async () => {
      assert.equal(await proxy.getAddress(), 0);
    });
  });

  describe('#setAddress', async () => {
    it('allows address to be overwritten', async () => {
      await proxy.setAddress(accounts[0]);
      assert.equal(await proxy.getAddress(), accounts[0]);
    });
  });
});
