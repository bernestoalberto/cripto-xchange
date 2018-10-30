let  pushtx = require('blockchain.info/pushtx');





let pushT = {
    push : (transaction, options)=>{
        pushtx.pushtx(transaction, options);
    }
};

module.exports = pushT;
