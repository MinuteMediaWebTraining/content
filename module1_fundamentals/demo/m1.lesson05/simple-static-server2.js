const http = require('http');
const fs = require('fs');


console.log(__filename, module, global)

http.createServer(function (req, res) {
    fs.readFile('demofile1.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080, function () {
    console.log('Client is available at http://localhost:8080');
});


