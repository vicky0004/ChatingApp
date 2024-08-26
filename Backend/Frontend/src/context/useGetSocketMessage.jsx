import React, { useEffect, useState } from 'react'
import {useSocketContext} from "./SocketContext.jsx"
import useConversation from "../zustand/userConversation.js"
import sound from "../assets/notification.mp3"
import sound2 from "../assets/chin_tapak_dum_dum.mp3"

const useGetSocketMessage=()=> {
    const {socket}=useSocketContext();
    const {selectedConversation,messages,setMessage}=useConversation();
    useEffect(()=>{
        socket.on("newMessage",(newMessage)=>{
            if(selectedConversation._id === newMessage.senderId.toString()){
                setMessage([...messages,newMessage]);
            }else{
                const notification = new Audio(sound);
                notification.play();
                setNotification(newMessage);
              }
        });
        return ()=>{
            socket.off("newMessage");
        };
    },[socket,messages,setMessage]);
};
export default useGetSocketMessage;
