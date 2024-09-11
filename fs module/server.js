
// const fs = require("fs")
// // fs.mkdir("Yash.js", "console.log('Hello World')")


// fs.mkdir('yash'), (err) => { console.log(err);}




// const { error } = require("console")
// console.log(fs)
// fs.writeFileSync("Yash.js", "console.log('Yash is an best boy')")
// fs.writeFile("Yash.txt","Yash believe Yourself",()=>{
//     console.log('Done')
// })
// fs.readFile("Yash.txt",(error,data)=>{
    //     console.log(data.toString())
    //     console.log(error)
    // })
    // fs.appendFile("Yash.txt",", You are Best in your self",(err,data)=>{})
        
        
        // fs.readFile( filename, encoding, callback_function )
        // Parameters:
        
// The method accepts three parameters as mentioned above and described below:  

// filename: It holds the file’s name to read or the entire path if stored at another location.
// encoding: It holds the encoding of the file. Its default value is ‘utf8’.
// callback_function: A callback function is called after reading the file. It takes two parameters:
// err: If any error occurred.
// data: Contents of the file.



// const fs =require("fs")

import fs from "fs/promises"
let b= await fs.writeFile("Main.txt","Hey Boys",()=>{
    console.log("Done")
})
console.log(b)