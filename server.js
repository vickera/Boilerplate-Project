var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);
var _ = require('lodash');

app.use('/resources/css',express.static(__dirname + '/resources/css'));
app.use('/resources/js',express.static(__dirname + '/resources/js'));
app.use('/resources/assets',express.static(__dirname + '/resources/assets'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

server.listen(process.env.PORT || 8081,function(){
    console.log('Listening on '+server.address().port);
});