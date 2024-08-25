import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
import { app, server } from "./SocketIO/server.js";



app.use(express.json());
dotenv.config();
app.use(cookieParser());
app.use(cors());
const PORT = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI;

try{
    mongoose.connect(URI);
    console.log("connected to database");
}catch(error){
    console.log(error);
}

app.use("/api/user",userRoute);
app.use("/api/message",messageRoute);

// code for deployment
if(process.env.NODE_ENV === "production"){
    const dirPath = path.resolve();
    app.use(express.static("./Frontend/dist"));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(dirPath,"./Frontend/dist","index.html"));
    })
}

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})