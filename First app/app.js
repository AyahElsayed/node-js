// first server

const http = require('http');
const fs = require('fs'); // to read files
const url = require('url');

const server = http.createServer((req, res) => {

  const path = url.parse(req.url).pathname
  console.log(path)

  switch (path) {
    case '/':
      handleRequest('index.html', res)
      break;

    case '/any':
      handleRequest('any.html', res)
      break;

    case '/user':
      handleRequest('user.html', res)
      break;

    default:
      res.end('this page not')
      break;
  }
});


server.listen(3000, '127.0.0.1', () => {
  console.log('server running...')
})

function handleRequest(filepath, res) {
  fs.readFile(filepath, null, (error, data) => {
    if (error) {
      res.end('file not exist')
    } else {
      res.end(data)
    }
  })
}
// to see the msg "hello in fisrt app"
// go to the browser then 127.0.0.1:3000
