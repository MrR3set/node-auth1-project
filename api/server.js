const express = require("express");

const server = express();

server.use(express.json());


server.get("/",(req,res)=>{
    res.json({msg:"api ok"});
})

module.exports = server;