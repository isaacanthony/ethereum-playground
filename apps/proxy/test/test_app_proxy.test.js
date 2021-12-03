const App = artifacts.require('App');
const AppProxy = artifacts.require('AppProxy');

contract('AppProxy', (accounts) => {
  let app;
  let proxy;

  beforeEach(async () => {
    app = await App.deployed();
    proxy = await AppProxy.deployed();
  });

  describe('#getAddress', async () => {
    it('allows address to be read', async () => {
      assert.equal(await proxy.getAddress(), 0);
    });
  });

  describe('#setAddress', async () => {
    it('allows address to be overwritten', async () => {
      await proxy.setAddress(app.address);
      assert.equal(await proxy.getAddress(), app.address);
    });
  });

  describe('#delegate', async () => {
    it('proxies function call to delegate contract', async () => {
      await proxy.setAddress(app.address);
      let proxyInterface = new web3.eth.Contract(app.abi, proxy.address);
      assert.equal(await proxyInterface.methods.add(1, 2).call(), 3);
    });
  });
});
