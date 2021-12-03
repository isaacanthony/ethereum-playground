const ENS = artifacts.require("ENS");

contract("ENS", (accounts) => {
  let ens;
  let name = "google.eth";

  beforeEach(async () => {
    ens = await ENS.deployed();
  });

  describe("setting new ENS name", async () => {
    it("initially has no name set", async () => {
      assert.equal(await ens.getAddress(name), 0);
    });

    it("fails if no ETH sent", async () => {
      try {
        await ens.setAddress(name, {from: accounts[0]});
        assert.isTrue(false);
      } catch (error) {
        assert.isTrue(true);
      }
    });

    it("fails if not enough ETH sent", async () => {
      try {
        await ens.setAddress(name, {from: accounts[0], value: 1});
        assert.isTrue(false);
      } catch (error) {
        assert.isTrue(true);
      }
    });

    it("sets new ENS name", async () => {
      await ens.setAddress(name, {from: accounts[0], value: 5});
      assert.equal(await ens.getAddress(name), accounts[0]);
    });

    it("doesn't allow overwriting existing ENS name", async () => {
      try {
        await ens.setAddress(name, {from: accounts[1], value: 5});
        assert.isTrue(false);
      } catch (error) {
        assert.isTrue(true);
      }
    });

    it("allows writing multiple different ENS names", async () => {
      await ens.setAddress("2_" + name, {from: accounts[0], value: 5});
      assert.equal(await ens.getAddress("2_" + name), accounts[0]);
      await ens.setAddress("3_" + name, {from: accounts[0], value: 5});
      assert.equal(await ens.getAddress("3_" + name), accounts[0]);
    });
  });

  describe("setting new ENS cost", async () => {
    it("sets new ENS cost", async () => {
      assert.equal(await ens.getCost(), 5);
      await ens.setCost(10, {from: accounts[0]});
      assert.equal(await ens.getCost(), 10);
    });

    it("doesn't allow zero cost", async () => {
      try {
        await ens.setCost(0, {from: accounts[0]});
        assert.isTrue(false);
      } catch (error) {
        assert.isTrue(true);
      }
    });

    it("doesn't allow negative cost", async () => {
      try {
        await ens.setCost(-1, {from: accounts[0]});
        assert.isTrue(false);
      } catch (error) {
        assert.isTrue(true);
      }
    });

    it("doesn't allow non-owner to set cost", async () => {
      try {
        await ens.setCost(10, {from: accounts[1]});
        assert.isTrue(false);
      } catch (error) {
        assert.isTrue(true);
      }
    });
  });
});
