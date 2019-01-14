module.exports = {
  // default applies to all environments
  default: {
    // order of connections the dapp should connect to
    dappConnection: [
      '$WEB3' // uses pre existing web3 object if available (e.g in Mist)
    ],
    gas: 'auto',
    contracts: {
      'MATToken': {
        args: {
          'valueToken': '$BBLRToken'
        }
      },
      'Roles': { deploy: false },
      'SafeMath': { deploy: false },

      'ERC20': { deploy: false },
      'ERC20Burnable': { deploy: false },
      'ERC20Mintable': { deploy: false },
      'SafeERC20': { deploy: false },

      'ERC721Full': { deploy: false },
      'ERC721Mintable': { deploy: false },
      'ERC721': { deploy: false },
      'ERC721Enumerable': { deploy: false },
      'ERC721Metadata': { deploy: false },
      'Address': { deploy: false }

      // example:
      // 'ERC20': {
      //   deploy: false,
      //   args: [ 'MATToken', 'MAT' ],
      //   args: {
      //     'initial_value': 100
      //   },
      //   file: 'openzeppelin-solidity/contracts/token/ERC20/ERC20.sol',
      //   gas: 800000,
      //   gasPrice: 5,
      // },
    }
  },

  // default environment, merges with the settings in default
  // assumed to be the intended environment by `embark run`
  development: {
    // Blockchain node to deploy the contracts
    deployment: {
      host: 'localhost', // Host of the blockchain node
      port: 8545, // Port of the blockchain node
      type: 'rpc' // Type of connection (ws or rpc),
      // Accounts to use instead of the default account to populate your wallet
      /* ,accounts: [
        {
          privateKey: 'your_private_key',
          balance: '5 ether'  // You can set the balance of the account in the dev environment
                              // Balances are in Wei, but you can specify the unit with its name
        },
        {
          privateKeyFile: 'path/to/file', // Either a keystore or a list of keys, separated by , or ;
          password: 'passwordForTheKeystore' // Needed to decrypt the keystore file
        },
        {
          mnemonic: '12 word mnemonic',
          addressIndex: '0', // Optionnal. The index to start getting the address
          numAddresses: '1', // Optionnal. The number of addresses to get
          hdpath: 'm/44\'/60\'/0\'/0/' // Optionnal. HD derivation path
        }
      ] */
    },
    dappConnection: [
      'ws://localhost:8546',
      'http://localhost:8545',
      '$WEB3' // uses pre existing web3 object if available (e.g in Mist)
    ]
  },

  // merges with the settings in default
  // used with 'embark run privatenet'
  privatenet: {
  },

  // merges with the settings in default
  // used with 'embark run testnet'
  testnet: {
    deployment: {
      accounts: [
        {
          privateKey: 'b5aa22aca3722a3ede6945b61882049c57ccf31fbe374a9974fdb6344c6a49f8'
          // addressIndex: '0', // Optional. The index to start getting the address
          // numAddresses: '2', // Optional. The number of addresses to get
          // hdpath: 'm/44\'/60\'/0\'/0/' // Optional. HD derivation path
        }
      ],
      host: 'rinkeby.infura.io/f671218d5de443d797cc94560bde246b',
      port: false,
      protocol: 'https',
      type: 'rpc'
    }
  },

  // merges with the settings in default
  // used with 'embark run livenet'
  livenet: {
  }

  // you can name an environment with specific settings and then specify with
  // 'embark run custom_name' or 'embark blockchain custom_name'
  // custom_name: {
  // }
};
