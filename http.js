let http = require('http');
const { url } = require('inspector');

function start(route, handle) {
  function onRequest(req, res) {
    let pathname = url.parse(req.url).pathname;
    console.log('request for' + pathname + 'received');
    route(handle, pathname, res);

    console.log('리퀘스트 리시브');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World!');
    res.end();
  }

  http.createServer(onRequest).listen(8888);
}

exports.start = start;

// http.createServer((req,res)=>{

//     res.write('Hello Node js!')
// }).listen(8888,()=>{
//     console.log('실행됨 ㅇㅇ')
// })
