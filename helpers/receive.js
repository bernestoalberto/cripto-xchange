let Receive = require('blockchain.info/Receive');


let receive = {
    generate:(query)=>{
        Receive.generate(query)
    },
    checkgap: ()=>{
        Receive.checkgap();
    }
};

module.exports = receive;
