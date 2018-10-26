
const routes = require("./routes");
const restify = require('restify');
const PORT = 8080;
const server = restify.createServer({
  name: 'node-middleware',
  version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

routes(server);

server.listen(PORT, () => console.log('Listening at %s', PORT));