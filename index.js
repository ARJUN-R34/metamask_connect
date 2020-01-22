const sigUtil = require('eth-sig-util');
let web3;

const HNContractAddress = '0xd4680db560a9d002f0e4884bf9423753be709cdf'

var connectButton = document.getElementById('connectButton')

connectButton.addEventListener('click', function () {
    connect()
})

function connect () {
    if (typeof ethereum !== 'undefined' || typeof window !== 'undefined') {
        ethereum.enable()
        web3 = new Web3(window['ethereum'] || window.web3.currentProvider);
        console.log('Web3 ', web3);
        return web3.eth.defaultAccount = web3.givenProvider.selectedAddress
    }
    console.log('Metamask not detected.')
}

signTx.addEventListener('click', async function () {

    const address = web3.eth.defaultAccount;
    console.log('Address : ', address);
    const userHandleName = 'arjun';

    //  This is the data to be signed.
    const msgParams = [
        {
            type: 'string',      // Any valid solidity type
            name: 'Handlename',     // Any string label you want
            value: userHandleName  // The value to sign
        }
    ]

    //  Function to generate the signature of the above data
    const signature = await sigUtil.signTypedData(msgParams, address);
    console.log('Signature : ', signature)

    //  This is the data object to be sent to the Relayer
    const data = {
        userAdd: address,
        userHandleName,
        HNContractAddress,
        signedData: {
            message: msgParams,
            signature
        }
    }

})

ethereumTx.addEventListener('click', async function () {

    const sender = web3.eth.defaultAccount;         //  Sender account. i.e. current account
    console.log('Sender : ', sender);              
    const to;                                       //  Receiver's account
    const amount;                                   //  Amount to be sent in Ether
    const value = web3.toWei(amount, 'ether')       //  Amount in wei

    await web3.eth.sendTransaction({
        to,
        from: sender,
        value
    }, function (err, res) {
        if (err) {
            console.log(err)
        }

        console.log(res)
    })
})