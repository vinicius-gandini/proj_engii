const express = require('express');

const server = express();

const routes = require('./routes');

server.use(express.json());
server.use(routes);

server.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('Hello World');
});
