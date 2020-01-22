# Metamask WEB3 Flow

## Libraries Used

```
eth-sig-util
```
```
web3
```

## Functions Used

```
signTypedData()
```
This function is contained in the ```eth-sig-util``` library and is used to sign the message.
The output is a signature.

## Flow
 
1. First the user will have to connect the application to the metamask. This connection will be established by clicking the connect button which will open up a metamask pop up asking for consent.
If the user clicks on 'Agree', then the metamask will be connected by our application and the user's current public address can be accessed.
2. Once the user gives consent, then web3 will be initialised and user's public address will be accessible.
3. Next step is to sign the user's handlename. For this, the method signTypedData() will be called and user's handlename will be passed as the parameters.
4. The output of that function will be a signature.
5. Create an object containing user's address, HN contract address and signed data. Call the relayer and pass these parameters in the body.

# Metamask Ethereum Transaction

## Library used

```
web3
```

## Functions Used

```
web3.toWei()
```
This function is used to convert Ethereum to Wei.

```
web3.eth.sendTransaction()
```
This function is used to send the transaction to Ethereum.

## Flow

1. The user will be prompted to enter the receiver's address and the amount of Ethereum to send.
2. Once the user enters these data and presses the "send" buton, a metamask pop up will appear with details like gas fee, amount and total amount.
3. If the user clicks on "Confirm" button, then the transaction will be signed and send to the Ethereum blockchain.