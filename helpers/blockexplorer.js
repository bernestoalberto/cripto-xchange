let sockete = require('blockchain.info/Socket');


let mySocket = null;

let socket = {
    initi:()=>{
         mySocket = new sockete();
    },
    testNet : (val)=>{
         mySocket = new sockete({ network: val });
    },
    close:()=>{
        mySocket.close()
    },
    onOpen: (callback)=>{
        mySocket.onOpen(callback);
    },
    onClose:(callback)=>{
        mySocket.onClose(callback);
    },
    onTransaction : (callback,options)=>{
        mySocket.onTransaction(callback, options);
    },
    onBlock : (callback)=>{
        mySocket.onBlock(callback);
    }


};


module.exports = socket;
