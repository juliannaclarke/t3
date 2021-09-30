/* 
const result = sum(2,3);
console.log(result);
*/

// const fs = require('fs');

// const generateFile = () => {
//     try{
//         fs.writeFileSync('data.txt', "Hi, this file was made with Node");
//     } catch (err){
//         console.log(err);
//     }
// }

// generateFile();

// const http = require('http');
// http.createServer(function(req,res){
//     res.write('server started');
//     res.end();
// }).listen(8080);

// const myModule = require('./myModule');
// const date = myModule();

// console.log(date);

const express = require('express');

const app = express();

const port = 9000;
//api
app.get('/', (req, res) => {
    res.send("hi");
});

app.get("/api/cats", (req,res) => {
    //call to db for data
    const cats = ["British Shorthair", "Russian Blue", "Ragdoll"]
    res.send(JSON.stringify(cats));
});

app.listen(port, () => {
    console.log("listening on port", port);
})