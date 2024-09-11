import {createServer} from 'node:http'   
// // it's an Common_Javascript in the Javascript 

// const {createServer}=require('node:http')
// it is used with an common js

const hostname ='127.0.0.1'
const port = 3000

const Server = createServer((req,res)=>{  //   req = Request , res = Response this are called as callback
    res.statusCode= 200
//    Some of the statusCode
//   '100': 'Continue',
//   '101': 'Switching Protocols',
//   '102': 'Processing',
//   '103': 'Early Hints',
//   '200': 'OK',
//   '201': 'Created',
//   '202': 'Accepted',
//   '203': 'Non-Authoritative Information',
//   '204': 'No Content',
//   ...
//   '505': 'HTTP Version Not Supported',
//   '506': 'Variant Also Negotiates',
//   '507': 'Insufficient Storage',
//   '508': 'Loop Detected',
//   '509': 'Bandwidth Limit Exceeded',
//   '510': 'Not Extended',
//   '511': 'Network Authentication Required'
    res.setHeader('Content-Type','application/json')
    res.end("Hi Yash I am your First Server How are You Yash YOu are thee King where are Lama coder ")
    
    
})
let date = new Date()

Server.listen(port, hostname, ()=>{
    console.log(`Server is running on ${date} at http://${hostname}:${port}/`)
})


// let date = new Date()
// console.log(date)