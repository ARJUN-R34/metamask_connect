const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/b3a845111c5f4e3eaf646c79bcb4d4c0'));

const vendorPublicAddress = '0x8102Eee36079E523840c57b45315e0571BFFEAC9';
const HN_CONTRACT_ADDRESS = '0xd4680db560a9d002f0e4884bf9423753be709cdf';

const { abiHNRegistry } = require('./abi');

async function a() {

const MyHNContract = new web3.eth.Contract(abiHNRegistry, HN_CONTRACT_ADDRESS);

const handlenameOfAddress = await MyHNContract.methods.resolveHandleNameOfAddress(vendorPublicAddress, '0x8102Eee36079E523840c57b45315e0571BFFEAC9').call();

if(handlenameOfAddress === null) {
    console.log('This address is not associated with any handlename');
}

console.log(handlenameOfAddress)
}

module.exports = { addressOfHandlename };