module.exports = {
  compilers: {
    solc: {
      version: '0.8.10',
    },
  },
  networks: {
    development: {
      host: 'ganache',
      port: 8545,
      network_id: '*',
    },
  },
  plugins: ['solidity-coverage'],
};
