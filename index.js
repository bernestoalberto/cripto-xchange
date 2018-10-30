let exchange = require('./helpers/exchange');
// let stats = require('./helpers/stats');
// let blockerX = require('./helpers/blockexplorer');
// let wallet = require('./helpers/myWallet');
// let push = require('./helpers/pushtx');
// let receive = require ('./helpers/receive');
// let socket = require('./helpers/socket');
let fs = require('fs');

let option = {
    currency : 'EUR',
    amount : 1000,
    time: 10000,
    charType: 'total-bitcoins',
    timespan : '2years',
    stat: 'n_btc_mined'

};
let port = 3500;
var https = require('http').createServer(handler);
var io = require('socket.io')(https);
https.listen(port);
console.log(`Listening on port ${port}`);
function handler (req, res){ //create server

    fs.readFile(__dirname + '/public/index.html', function(err, data) { //read file index.html in public folder
        if(err){
      res.writeHead(404, {'Content-Type':'text/html'});
         return res.end("404 Not Found");
  }

           console.log( new Date() + ' '+
            req.connection.remoteAddress+ ' '+
      req.method+ '     '+req.url);
 res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);


}); //require http server, and create server with function handler()

//fs.readFile(__dirname, 'stream');
}

io.sockets.on('connection',  (socalo)=> {
 if(socalo) {
     Promise.all([exchange.ticker(option.currency), exchange.toBTC(option), exchange.fromBTC(option)]).then((datos) => {
         let data = {
             currency: datos[0],
             tobtc: datos[1],
             btc: datos[2]
         };

         socalo.emit('market', data);

     });
 }
});

