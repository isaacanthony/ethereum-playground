const { mnemonic, projectId } = require('./secrets.json');
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  compilers: {
    solc: {
      version: '0.8.0',
    },
  },
  networks: {
    development: {
      host: 'ganache',
      port: 8545,
      network_id: '*',
    },
    kovan: {
      provider: () => {
        return new HDWalletProvider(
          mnemonic, `https://kovan.infura.io/v3/${projectId}`
        );
      },
      network_id: 42,
    },
  },
  plugins: ['solidity-coverage'],
};
