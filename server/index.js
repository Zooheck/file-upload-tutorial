const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const upload = require('./upload');

const server = express()

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
  };

server.use(helmet())
server.use(cors(corsOptions))

server.post('/upload', upload)

server.listen(8000, () => {
    console.log('Server listening on port 8000.');
  });