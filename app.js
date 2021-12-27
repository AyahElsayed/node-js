// first server

const http = require('http');

const server = http.createServer((req , res)=>{
  res.end('hello in first app ....')
})

server.listen(3000 , '127.0.0.1' , ()=>{
  console.log('server running...')
})

// to see the msg "hello in fisrt app" 
// go to the browser then 127.0.0.1:3000
