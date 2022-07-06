const express = require('express');
const server = express();
const port = 3000;
const path = require('path')


server.use('/', express.static(path.join(__dirname, '../client/dist/')))

server.listen(port, console.log(`listening to port ${port}`))