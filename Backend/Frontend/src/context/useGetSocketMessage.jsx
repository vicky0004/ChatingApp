import React, { useEffect } from 'react'
import {useSocketContext} from "./SocketContext.jsx"
import useConversation from "../zustand/userConversation.js"
import sound from "../assets/notification.mp3"
import sound2 from "../assets/chin_tapak_dum_dum.mp3"

const useGetSocketMessage=()=> {
    const {socket}=useSocketContext();
    const {messages,setMessage}=useConversation();
    useEffect(()=>{
        socket.on("newMessage",(newMessage)=>{
            const notification = new Audio(sound2);
            notification.play();
            setMessage([...messages,newMessage]);
        });
        return ()=>{
            socket.off("newMessage");
        };
    },[socket,messages,setMessage]);
};
export default useGetSocketMessage;
