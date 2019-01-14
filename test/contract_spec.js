// /*global contract, config, it, assert, web3*/

const MATToken = require('Embark/contracts/MATToken');
const BBLRToken = require('Embark/contracts/BBLRToken');
// let accounts;

// For documentation please see https://embark.status.im/docs/contracts_testing.html
// config({
//   deployment: {
//     accounts: [
//       // you can configure custom accounts with a custom balance
//       // see https://embark.status.im/docs/contracts_testing.html#Configuring-accounts
//     ]
//   },
//   contracts: {
//     'MATToken': {
//       args: [100]
//     }
//   }
// }, (_err, web3Accounts) => {
//   accounts = web3Accounts;
// });

describe('MATToken', function () {
  this.timeout(0);

  // it('should set constructor value', async function () {
  //   let result = await MATToken.methods.storedData().call();
  //   assert.strictEqual(parseInt(result, 10), 100);
  // });

  // it('set storage value', async function () {
  //   await MATToken.methods.set(150).send();
  //   let result = await MATToken.methods.get().call();
  //   assert.strictEqual(parseInt(result, 10), 150);
  // });

  // it('should have account with balance', async function () {
  //   let instance = await MATToken.deploy().send();

  //   let balance = await web3.eth.getBalance(accounts[0]);
  //   console.log('Account 0 balance: ', balance);
  //   assert.ok(parseInt(balance, 10) > 0);
  // });

  // CREATION

  // it('creation: contract should deploy with less than 4.7 mil gas', async function () {
  //   let instance = await TESTToken.new(NEUREAL_ETH_WALLET_ADDRESS, WHITELIST_PROVIDER_ADDRESS, {from: CONTRACT_CREATOR_ADDRESS, gas: deployGas, gasPrice: deployGasPrice});

  //   let receipt = await web3.eth.getTransactionReceipt(instance.transactionHash);
  //   console.log('Contract creation (gasUsed): ', receipt.gasUsed);
  //   assert.isBelow(receipt.gasUsed, 4700000);
  // });

  // it('creation: sending ether with contract deployment should revert', async function () {
  //   try {
  //     var result = await MATToken.new({from: CONTRACT_CREATOR_ADDRESS, value: fromETHtoWeiBN(0.00001), gas: deployGas, gasPrice: deployGasPrice});
  //   } catch (err) { } // console.log(err.message); }
  //   assert.isUndefined(result);
  // });

  it('creation: test correct setting of state variables', async () {
    let instance_bblr = await BBLRToken.deploy().send();
    let instance = await MATToken.deploy({arguments: instance_bblr}).send();

    let OPENING_RATE = await instance.methods.OPENING_RATE().call();
    console.log('OPENING_RATE: ', OPENING_RATE);
    assert.equal(OPENING_RATE, 6400);
  });

  it('creation: test correct setting of vanity information', async () => {
    let instance = await MATToken.deploy().send();

    let name = await instance.methods.name().call();
    assert.strictEqual(name, 'MATToken');

    let symbol = await instance.methods.symbol().call();;
    assert.strictEqual(symbol, 'MAT');
  });
});
