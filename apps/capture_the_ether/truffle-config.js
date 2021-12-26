module.exports = {
  compilers: {
    solc: {
      version: '0.4.21',
    },
  },
  networks: {
    development: {
      host: 'ganache',
      port: 8545,
      network_id: '*',
    },
  },
};
