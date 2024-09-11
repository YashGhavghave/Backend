const express = require('express')
const app = express()
const port =3000
app.get('/',(req,res)=>{
  // res.send(res.params)
    res.send('Hello Yash')
    
})
app.listen(port, ()=>{
      console.log(`Server is running on ${port}`)
})



// const express = require('express')
// const path = require('path')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname,'/index.html'))
// })
// app.get('/about', (req, res) => {
//   res.send('Hello About!')
// })
// app.get('/contact', (req, res) => {
//   res.send('Hello Contact_No - 7385380561')
// })
// app.get('/chi', (req, res) => {
//   res.send('Hello Getmechi!')
// })
// app.get('/info', (req, res) => {
//   res.send('Hello Info!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

