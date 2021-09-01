require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install indoor olympic seed curve rare remind million good arena onion time'; 
let testAccounts = [
"0x8cf68f7c7824ac4b35c9a7383a440efa23f8979097ce02fd69f379e76662afc2",
"0x53bca27f421dfaa8af6161e4bc9c75a6a851dbb781725400563e57256f5a0a26",
"0xce1811855000d2592ee07a07349f0c3ed8eef0382a9f262522bfd72967ab5cc2",
"0x0be608a0683e729238269eb6cd77fbb2857c5f6b86b28a03b6c82a0159cdd263",
"0xd088803ea6deda5f0bd1d513c06e7c702de4f745e0e00df9e5a016d1b14a209b",
"0x02f65498350728d34ea093b3780345e14ac95b9b5e6cd72aee5388737d28975c",
"0x66e5be3f0adb13e64a583bcaed434201eed88e96f7e29b61291de0b281ec648a",
"0x600a64cea962474c310f4655c6fbf3eb1dbc346deb14dc7dedab9a02a8e25425",
"0xce3b0bed399d4bcb0ad0e346f4a156944bdd3e81480372085ba9112551660c19",
"0xef2b4b27d5d3114b8669490591d6a0c261e950f899d79df4da3b320f7e50738a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

