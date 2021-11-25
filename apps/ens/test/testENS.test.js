const ENS = artifacts.require("ENS");

contract("ENS", (accounts) => {
  let ens;
  let name;

  before(async () => {
    ens = await ENS.deployed();
    name = "google.eth";
  });

  describe("setting new ENS name", async () => {
    it("initially has no name set", async () => {
      assert.equal(await ens.getAddress(name), 0);
    });

    it("fails if no ETH sent", async () => {
      try {
        await ens.setAddress(name, {from: accounts[0]});
      } catch (error) {
        assert.equal(
          error.message,
          "Returned error: VM Exception while processing transaction: revert",
        );
      }
    });

    it("fails if not enough ETH sent", async () => {
      try {
        await ens.setAddress(name, {from: accounts[0], value: 1});
      } catch (error) {
        assert.equal(
          error.message,
          "Returned error: VM Exception while processing transaction: revert",
        );
      }
    });

    it("sets new ENS name", async () => {
      await ens.setAddress(name, {from: accounts[0], value: 5});
      assert.equal(await ens.getAddress(name), accounts[0]);
    });

    it("doesn't allow overwriting existing ENS name", async () => {
      try {
        await ens.setAddress(name, {from: accounts[1], value: 5});
      } catch (error) {
        assert.equal(
          error.message,
          "Returned error: VM Exception while processing transaction: revert",
        );
      }
    });
  });
});
