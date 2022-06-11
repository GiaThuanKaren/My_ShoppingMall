const express = require('express');
const mongoose = require('mongoose')
const app = express();
const { Server } = require("socket.io");
const http = require('http')
const cors = require('cors');

app.use(cors());
const server = http.createServer(app);

const io = new Server(server,{
    cors:{
        origin:"*"
    }
})
app.use("/",(req, res) => {
    res.send("...")
})

io.on("connection",function(socket){
    socket.on("send-order",function(data){
        console.log((data))
    })
})

server.listen(5000,()=>{
    console.log("Running ")
})