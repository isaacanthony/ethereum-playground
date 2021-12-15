const Splitter = artifacts.require('Splitter');

contract('Splitter', (accounts) => {
  it('allows splitting of funds', async () => {
    // Set payees and shares.
    let splitter = await Splitter.new([accounts[1], accounts[2]], [50, 50]);
    assert.equal(await splitter.payee(0), accounts[1])
    assert.equal(await splitter.payee(1), accounts[2]);
    assert.equal(await splitter.totalShares(), 100);
    assert.equal(await splitter.shares(accounts[1]), 50);
    assert.equal(await splitter.shares(accounts[2]), 50);

    // Deposit funds.
    assert.equal(await web3.eth.getBalance(splitter.address), 0);
    await splitter.send(100, {from: accounts[0]});
    assert.equal(await web3.eth.getBalance(splitter.address), 100);

    // Release funds.
    let oldBalance1 = new web3.utils.BN(await web3.eth.getBalance(accounts[1]));
    let oldBalance2 = new web3.utils.BN(await web3.eth.getBalance(accounts[2]));

    assert.equal(await splitter.totalReleased(), 0);
    assert.equal(await splitter.released(accounts[1]), 0);
    assert.equal(await splitter.released(accounts[2]), 0);

    await splitter.release(accounts[1]);
    await splitter.release(accounts[2]);

    assert.equal(await splitter.totalReleased(), 100);
    assert.equal(await splitter.released(accounts[1]), 50);
    assert.equal(await splitter.released(accounts[2]), 50);

    // Confirm payments are received.
    let newBalance1 = new web3.utils.BN(await web3.eth.getBalance(accounts[1]));
    let newBalance2 = new web3.utils.BN(await web3.eth.getBalance(accounts[2]));

    assert.equal(newBalance1.sub(oldBalance1).toString(), '50');
    assert.equal(newBalance2.sub(oldBalance2).toString(), '50');
  });
});
