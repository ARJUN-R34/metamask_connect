const abiHNRegistry = [
    {
        inputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: '_vendorAddress',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'address',
                name: '_userAddress',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: '_handleName',
                type: 'bytes',
            },
        ],
        name: 'AddressAndHandleNameIsInserted',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: '_vendorAddress',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'address',
                name: '_userAddress',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: '_previousHandleName',
                type: 'bytes',
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: '_newHandleName',
                type: 'bytes',
            },
        ],
        name: 'AddressAndHandleNameIsUpdated',
        type: 'event',
    },
    {
        constant: true,
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        name: 'OldHandles',
        outputs: [
            {
                internalType: 'bytes',
                name: '',
                type: 'bytes',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                internalType: 'bytes',
                name: '',
                type: 'bytes',
            },
        ],
        name: 'OldUserHandleNameToAddress',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                internalType: 'address',
                name: '_vendorAddress',
                type: 'address',
            },
            {
                internalType: 'bytes',
                name: '_handleName',
                type: 'bytes',
            },
        ],
        name: 'resolveAddressOfHandleName',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                internalType: 'address',
                name: '_vendorAddress',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_userAddress',
                type: 'address',
            },
        ],
        name: 'resolveHandleNameOfAddress',
        outputs: [
            {
                internalType: 'bytes',
                name: '',
                type: 'bytes',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                internalType: 'bytes',
                name: '_handleName',
                type: 'bytes',
            },
        ],
        name: 'resolveVendorFromHandleName',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'returnBalance',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'contract IVendor',
                name: 'vr',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_userAddress',
                type: 'address',
            },
            {
                internalType: 'string',
                name: '_handleName',
                type: 'string',
            },
        ],
        name: 'setAddressAndHandleName',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        payable: true,
        stateMutability: 'payable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'totalHandleNameRegistered',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'contract IVendor',
                name: 'vr',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_userAddress',
                type: 'address',
            },
            {
                internalType: 'string',
                name: '_previousHandleName',
                type: 'string',
            },
            {
                internalType: 'string',
                name: '_newHandleName',
                type: 'string',
            },
        ],
        name: 'updateAddressAndHandleName',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        payable: true,
        stateMutability: 'payable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        name: 'updateCount',
        outputs: [
            {
                internalType: 'uint8',
                name: '',
                type: 'uint8',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [],
        name: 'withdrawFunds',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
];

module.exports = { abiHNRegistry };
