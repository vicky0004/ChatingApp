import React, { useState } from 'react'
import useConversation from '../zustand/userConversation';
import axios from "axios";
export default function useSendMessage() {
    const [loading, setLoading] = useState(false);
    const {messages,setMessage,selectedConversation} = useConversation();
    const sendMessage= async (message)=>{
        setLoading(true);
        try{
            const res = await axios.post(`/api/message/send/${selectedConversation._id}`,{message});
            setMessage([...messages,res.data.newMessage]);
            setLoading(false);
        }catch(error){
            console.log("Error in getting messages",error);
            setLoading(false);
        }
    };
    return {loading,sendMessage};
}
