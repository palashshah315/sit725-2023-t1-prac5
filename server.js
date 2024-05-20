var express = require('express');
var app = express();
require('./dbConnection');
let router = require('./route/route');
let http = require('http').createServer(app);
app.use(express.static(__dirname + '/views'));
app.set('view engine','ejs');
let io = require('socket.io')(http);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', router);

io.on('connection', (socket) => {
    console.log('a client is connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    
        socket.emit('total_amount', 5633);
        socket.emit('total_order', 12);
        socket.emit('total_stock', 98);
        socket.emit('stock_value', 36982);

});




var port = process.env.port || 3000;

http.listen(port, () => {
    console.log('app listening to: ' + port);
});
