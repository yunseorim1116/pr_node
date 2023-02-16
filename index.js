let server = require('./http');
let router = require('./router');
let requestHander = require('./requestHander')

server.start = (router.route, requestHander.handle)