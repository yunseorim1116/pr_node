let server = require('../http/http');
let router = require('../http/router');
let requestHander = require('../http/requestHander')

server.start = (router.route, requestHander.handle)