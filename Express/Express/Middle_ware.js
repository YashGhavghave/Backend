// const express = require('express')
// const router = express.Router()
// const port = 3000
// const app = express()

// app.get('/',(err,req,res,next)=>{
//     console.error(err.stack)
//     res.statusCode=200
//     res.send('Yash op')
// })
// app.listen(port,()=>{
//     console.log(`Server is running on port ${port}`)
// })




const express = require('express')
const app = express()

const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(function(req,res,next){
  // req.send('I am middleware 777')   
  console.log('hello Worldbhvgvg')
  next()
})

app.use(myLogger)

app.get('/', (req, res) => {
  res.send('Hello Wovgggd!')
})

app.listen(3000)