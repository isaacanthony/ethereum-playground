const App = artifacts.require('App');

contract('App', (accounts) => {
  let app;

  beforeEach(async () => {
    app = await App.deployed();
  });

  describe('#add', async () => {
    it('adds two numbers', async () => {
      assert.equal(await app.add(1, 2), 3);
    });
  });
});
