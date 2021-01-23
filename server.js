'use strict';

const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, respoonse)
    { console.log('Hello!');
    if (request.url == '/styles.css') {
        const style = fs.readFileSync('styles.css', 'utf8');
        respoonse.end(style);
    }
    else
    {const html = fs.readFileSync('index.html', 'utf8');
    respoonse.end(html);}
});

console.log('port = ', process.env.PORT);
server.listen(process.env.PORT || 3000);
console.log('server start');

