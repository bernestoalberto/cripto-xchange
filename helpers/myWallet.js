let MyWallet = require('blockchain.info/MyWallet');
let credentials  =require('../config/credentials.json');
let options = { apiCode: 'myAPICode', apiHost: 'http://localhost:3000' };
let wallet = new MyWallet(credentials.wallet_id, credentials.pass, options);


let billetera = {
    getBalance: ()=>{
        wallet.getBalance().then(function (response) { 
            //console.log('My balance is %d!', response.balance); 
    });
    }
    ,
    send:(recipients,options)=>{
        wallet.sendMany(recipients, options)
    },
    enableHD:()=>{
        wallet.enableHD()
    },
    hdAccounts:()=>{
        wallet.listXPubs();
    },
    newHDAccount:(options)=>{
        wallet.createAccount(options);
    },
    getHDAccount: (xpubOrIndex)=>{
        wallet.getAccount(xpubOrIndex);
    },
    getHDAccountReceiveAddress:(xpubOrIndex)=> {
        wallet.getAccountReceiveAddress(xpubOrIndex);
    },
    getHDaccountBalance : (xpubOrIndex)=>{
        wallet.getAccountBalance(xpubOrIndex);
    },
    archiveHDAccount:(xpubOrIndex)=>{
        wallet.archiveAccount(xpubOrIndex);
    },

    unarchiveHDAccount:(xpubOrIndex)=>{
        wallet.unarchiveAccount(xpubOrIndex);
    },
    Listwalletaddresses : ()=>{
        wallet.listAddresses();
    },
    GetAddress : (address)=>{
        wallet.getAddress(address, options);
    },
    createNewAddress : ()=>{
        wallet.newAddress(options);
    },
    archiveAddress: (address)=> {
        wallet.archiveAddress(address);
    },
        unArchiveAddress:(address)=>{
            wallet.unarchiveAddress(address)
        },

    };
module.exports = billetera;
