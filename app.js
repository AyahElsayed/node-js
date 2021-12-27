// first server

const http = require('http');
const fs = require('fs') // to read files

const server = http.createServer((req , res)=>{
  fs.readFile('./index.html', null, (error, data)=>{
    if(error){
      res.end('file not exist')
    }else{
      res.end(data)
    }
  })
})

server.listen(3000 , '127.0.0.1' , ()=>{
  console.log('server running...')
})

// to see the msg "hello in fisrt app" 
// go to the browser then 127.0.0.1:3000
