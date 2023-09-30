const express = require('express');
const server = express();
server.use(express.json());
server.get('/',(req,res)=>{
    try{
        res.status(200).send("Hii")
    }catch(e){
        console.log(e)
        res.status(500).send(e.message)

    }
})

module.exports = server;