import {Server} from "socket.io"
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server,{
    cors:{
        origin:"https://chatingapp-wsyc.onrender.com/",
        methods:["GET","POST"],
    }
})
//realtime message goes here

export const getReceiverSocketId=(receiverId)=>{
    return users[receiverId];
}

const users={};
//use to listen events on server side
io.on("connection",(socket)=>{
    console.log("a user connected",socket.id);
    const userId =socket.handshake.query.userId;
    if(userId){
        users[userId]=socket.id;
        // console.log("hello ",users);
    }
    //use to send the event to all connected users
    io.emit("getOnlineUsers",Object.keys(users));

    //used to listen clien side events emitted by server side (server & client)
    socket.on("disconnect",()=>{
        console.log("a user disconnected",socket.id);
        delete users[userId];
        io.emit("getOnlineUsers",Object.keys(users));
    })
})

export {app, io, server}