const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

// app.use(express.static("zandu"))

app.use((req,res,next)=>{
    res.send('Hello Yash Welcome back')
    console.log("Hello M1")
    fs.appendFileSync("logs.txt",` \n this is on date ${Date.now()} is an method of ${req.method}`)
    next()
})
app.use((req,res,next)=>{
    // res.send('Hello')
    console.log("Hello M2")
    next()
})

app.get('/',(req,res,next)=>{
    // res.send('my Profile')
    console.log("Hello M3")
    next()
})

app.listen(port,()=>{
    console.log(` Server is hosting on localhost:${port}`)
})
// console.log(__dirname)