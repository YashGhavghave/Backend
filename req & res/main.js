const express = require("express");
const app = express();
const port = 3000;

// app.use(express.static("public"))

app.get("/", (req, res) => {
  console.log("Its Get");
  res.send("Hello Yash Welcome back light Weight");
});

// app.get('/index',(req,res)=>{
//     console.log("Its Get")
//     res.send('Hello Yash Welcome back light Weight')
// })

// Below Merging concept called chaining

app
  .post("/", (req, res) => {
    console.log("Its post");
    res.send("Its Post");
  })
  .get("/index", (req, res) => {
    console.log("Its get");
    res.sendFile("lama/index.html", { root: __dirname });
  });
  app.get("/json", (req, res) => {
    console.log("Its get");
    res.json({a:34,b:353})
  });

app.listen(port, () => {
  console.log(
    `yyh budy light weight baabyyy Server is hosting on localhost:${port}`
  );
});
