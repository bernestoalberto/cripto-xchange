let Socket = require('blockchain.info/Socket');
let mySocket =null;
let exchanges = {
    init:()=> {
         mySocket = new Socket()
    },
    onOpen: (callback)=> {
        mySocket.onOpen(callback)
    },
    close:()=> {
        mySocket.close();
    },
    onClose: (callback)=>{
        mySocket.onClose(callback);
    },
    onTransaction :(callback, options)=>{
        mySocket.onTransaction(callback, options);
    },
    onBlock: (callback)=>{
        mySocket.onBlock(callback);
    }

};

module.exports = exchanges;
