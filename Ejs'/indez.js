const express = require('express')
const app = express()
const port = 3000

app.use('/music',(req,res,next)=>{
    res.sendFile('/lama/Kaisi Hai Lagdi Kamaal Teri Akhiyaan Gulaab - Akhiyaan Gulaab [ Slowed + Reverb ]  Mitraz.mp4',{root:__dirname})
})

app.get('/',(req,res)=>{
    res.send('Hello I am EJS')
})

app.listen(port,()=>{
    console.log(` Server is running on ${port}`)
})