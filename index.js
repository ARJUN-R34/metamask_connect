let web3;
const HNContractAddress = '0xd4680db560a9d002f0e4884bf9423753be709cdf'

var connectButton = document.getElementById('connectButton')

connectButton.addEventListener('click', function () {
    connect()
})

function connect () {
    if (typeof ethereum !== 'undefined' && typeof window !== 'undefined') {
        ethereum.enable()
        web3 = new Web3(window.web3.currentProvider);
        console.log('Web3 ', web3);
        return web3;
    }
}

signTx.addEventListener('click', async function () {

    const address = web3.givenProvider.selectedAddress;
    console.log('Address : ', address)

    const message = "Metamask Address"

    const signature = await web3.eth.personal.sign(message, address);    
    console.log("Signature : ", signature)

    const recover = await web3.eth.personal.ecRecover(message, signature)
    console.log("Recovered address : ", recover)

    const data = {
        userAdd: address,
        userHandlename,
        HNContractAddress,
        signature
    }

})