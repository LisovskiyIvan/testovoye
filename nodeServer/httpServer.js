
// import { createServer } from 'node:http';
const http = require('http')
const r = require('./router')

const server = http.createServer((req, res) => r.router(req, res));


server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
  