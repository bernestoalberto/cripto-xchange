let exchange = require('blockchain.info/exchange');

let time = '5000';
let exchanges = {
    ticker:(currency)=> {
       // let currenc = (typeof option ==  "string" ) ?'USD' :option;
        return new Promise((resolve,reject)=>{
        exchange.getTicker(currency).then((value) => {
             //  console.dir('The current values are:');
           // console.dir(value);
            if(value){
                resolve(value)
    }else{
        reject(ErrorEvent);
}

});
});
    },
    fromBTC: (option)=> {
        return new Promise((resolve,reject)=>{
        exchange.fromBTC(option.amount, option.currency, time).then((value) => {
           // console.dir(`The historical market price of  ${option.amount}  ${option.currency} equivalent in  BTC  at the requested   ${value}`);
            if(value){
                resolve(value)
            }else{
                reject(ErrorEvent);
            }

        });
        });
    },
    toBTC:(option)=> {
        return new Promise((resolve,reject)=>{
        exchange.toBTC(option.amount, option.currency, option.time).then((value) => {
            if(value){
                resolve(value)
            }
            else{
                reject(ErrorEvent);
            }

        });
    });
    }

};

module.exports = exchanges;
