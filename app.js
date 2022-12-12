const express = require('express');
const app = express();
const dotEnv = require('dotenv')

app.get('/', function (req, res) {
  res.sendFile('views/index.html',{root:__dirname})
})

app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("server is listening at port 3000")
    }
})