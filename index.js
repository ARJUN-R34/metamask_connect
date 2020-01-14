// web3 = new Web3(web3.currentProvider)
var web3;
// console.log('Web3 : ', web3)
// console.log('Web3 current account : ', web3.eth.accounts.givenProvider.selectedAddress);

var connectButton = document.getElementById('connectButton')

connectButton.addEventListener('click', function () {
    connect()
})

function connect () {
    if (typeof ethereum !== 'undefined') {
        ethereum.enable()
        debugger;
        web3 = new Web3(Web3.currentProvider);
        console.log('Web3 ', web3);
        return web3;
    }
}

signTx.addEventListener('click', async function () {
    debugger;
    const address = web3.givenProvider.selectedAddress;
    console.log('Address : ', address)

    const signature = await web3.eth.personal.sign("Hello world", address);    
    console.log("Signature : ", signature)

    const recover = await web3.eth.personal.ecRecover("Hello world", signature)
    console.log("Recovered address : ", recover)

})