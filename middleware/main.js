const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.post('/',(req, res)=>{
    req.status(404).send('Not found')
    console.log('adj')
})

app.listen(port,()=>{
    console.log(` Server is hosting on localhost:${port}`)
})
console.log(__dirname)