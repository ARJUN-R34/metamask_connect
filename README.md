# Metamask Flow

## Libraries Used

```
eth-sig-util
```
```
web3
```

## Methods Used

```
signTypedData()
```
This function is contained in the ```eth-sig-util``` library and is used to sign the message.
The output is a signature.

## Flow

1. First the user will have to connect the application to the metamask. This connection will be established by clicking the connect button which will open up a metamask pop up asking for consent.
If the user clicks on 'Agree', then the metamask will be connected by our application and the user's current public address can be accessed.
2. Next step is to sign the user's handlename. For this, the method signTypedData() will be called and the public address and user's handlename will be passed as the parameters.
