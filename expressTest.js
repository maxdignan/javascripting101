var http = require('http');

var server = http.createServer(function(req, res){
    if (this.allroutes[req.url]) {
        this.allroutes[req.url](req, res);
    } else {
        this.default(req, res);
    }
});




server.bob = 'hello';

console.log(server.bob);


server.allroutes = {};

server.route = function (value, callback) {
    this.allroutes[value] = callback;
};



server.listen(8000, function() {
    console.log('listening');
});

server.default = function(req, res){
    console.log('error');
    res.statusCode = 404;
    res.end();
};


server.route('/', function(req, res) {
    console.log('i was called!');
    res.end();
});


server.route('/harold', function(req, res) {
    console.log('harold was called!');
    res.write('harold');
    res.end();
});
