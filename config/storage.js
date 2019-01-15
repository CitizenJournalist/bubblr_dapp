module.exports = {
  // default applies to all environments
  default: {
    enabled: true,
    available_providers: ['ipfs'],
    ipfs_bin: 'ipfs',
    provider: 'ipfs',
    versions: {
      // TODO 'ipfs-api': '28.1.1'
      'ipfs-api': '18.2.0'
    }
  },

  // default environment, merges with the settings in default
  // assumed to be the intended environment by `embark run`
  development: {
    upload: {
      provider: 'ipfs',
      host: 'localhost',
      port: 5001,
      getUrl: 'http://localhost:8080/ipfs/'
    },
    dappConnection: [
      {
        provider: 'ipfs',
        host: 'localhost',
        port: 5001,
        getUrl: 'http://localhost:8080/ipfs/'
      }
    ]
    // Configuration to start Swarm in the same terminal as `embark run`
    // ,account: {
    //   address: 'YOUR_ACCOUNT_ADDRESS', // Address of account accessing Swarm
    //   password: 'PATH/TO/PASSWORD/FILE' // File containing the password of the account
    // },
    // swarmPath: 'PATH/TO/SWARM/EXECUTABLE' // Path to swarm executable (default: swarm)
  },

  // merges with the settings in default
  // used with 'embark run privatenet'
  privatenet: {
  },

  // merges with the settings in default
  // used with 'embark run testnet'
  testnet: {
    upload: {
      provider: 'ipfs',
      host: 'ipfs.infura.io',
      port: 5001,
      protocol: 'https',
      getUrl: 'https://ipfs.infura.io/ipfs/'
    },
    dappConnection: [
      {
        provider: 'ipfs',
        host: 'ipfs.infura.io',
        port: 5001,
        protocol: 'https',
        getUrl: 'https://ipfs.infura.io/ipfs/'
      }
    ]
  },

  // merges with the settings in default
  // used with 'embark run livenet'
  livenet: {
  }

  // you can name an environment with specific settings and then specify with
  // 'embark run custom_name'
  // ,custom_name: {
  // }
};
