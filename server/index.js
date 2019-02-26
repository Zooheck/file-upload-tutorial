const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const server = express()

server.use(helmet())
server.use(cors())

server.listen(8000, () => {
    console.log('Server listening on port 8000.');
  });