require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena fog sugar noodle ribbon remember history hockey private olympic theme'; 
let testAccounts = [
"0x59c544921334b2ca5ead3123c6dc8d07465d1a9a5deb6ac99b8bade3964ad71e",
"0x2328dcda33c0e9b6fa9fccd9cd1cba9fd62e5217229592da0d5d1ebba8672c95",
"0x762ecf3087095c155700e78f1ce73f7336197328f8ee2962d32316911481ea2e",
"0x3be7155bd90092b63cc5d5aa42a8f0d024503ffaff87d3ffbf9a6cf567e71a2a",
"0xd36d3cf376ebeb760af4e17ac0fb82d6dd78511f7c030ebe5b9ffa2775334f7a",
"0x9a70e9fbeb47b585c14beb4c4ed8390b009c84411472c649b0d971c478f79eb1",
"0x15505c8e464ee7110e9d8e49e136da508073b986cfeb71301546c972ee28108a",
"0xac2322b3bcdf55047b05820b5022ca46f8c95fc0eb93867c71b4f684aed04f5b",
"0x66e7fe1bae9847da23631a7ebe467bed90adaa5281a1f992a8c66a9d7fe53891",
"0x10951b2258338077bd37ac9414abe7d478fa43ef0242228b932b0659a7f47a6a"
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

