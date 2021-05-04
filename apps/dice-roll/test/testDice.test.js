const Dice = artifacts.require("Dice");

contract("Dice", (accounts) => {
  let dice;

  before(async () => {
    dice = await Dice.deployed();
  });

  describe("rolling dice", async () => {
    it("randomly chooses a number", async () => {
      const result = await dice.roll(1);
      assert.equal(result, 1, "The dice should randomly choose a number 1-6.");
    });
  });
});
