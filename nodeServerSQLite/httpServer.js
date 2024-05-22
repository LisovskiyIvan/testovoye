
import { createServer } from 'node:http';
import { router } from './router.js'
// const http = require('http')
// const r = require('./router')

const server = createServer((req, res) => router(req, res));


server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
