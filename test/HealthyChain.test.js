const HealthyChain = artifacts.require("./HealthyChain.sol");

contract("HealthyChain", accounts => {
  it("...should store the value 89.", async () => {
    const healthyChainInstance = await HealthyChain.deployed();

    // Set value of 89
    await healthyChainInstance.set(89, { from: accounts[0] });

    // Get stored value
    const storedData = await healthyChainInstance.get.call();

    assert.equal(storedData, 89, "The value 89 was not stored.");
  });
});