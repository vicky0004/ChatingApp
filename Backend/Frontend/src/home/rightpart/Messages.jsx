import React,{useEffect, useRef, useState} from "react";
import Message from "./Message";
import useGetMessage from "../../context/useGetMessage.jsx";
import Loading from "../../components/Loading.jsx"
import useGetSocketMessage from "../../context/useGetSocketMessage.jsx";

export default function Messages() {
  const {loading,messages}=useGetMessage();
  useGetSocketMessage();//listing incoming message
  const lastMsgRef=useRef();
  useEffect(()=>{
    setTimeout(()=>{
      if(lastMsgRef.current){
        lastMsgRef.current.scrollIntoView({behavior:"smooth"});
      }
    },100);
  },[messages]);
  return (
    <div className=" flex-1 overflow-y-auto" style={{minHeight:"calc(92vh - 8vh)"}}>
        {/* <Message/> */}
        {loading?(<Loading/>):(messages.length>0 && messages.map((message)=>(
          <Message key={message._id} message={message} />
        )))}
        {!loading && messages.length===0 && (
          <div>
            <p className="text-center mt-[20%]">Say! Hi to start the conversation</p>
          </div>
        )}
        <div ref={lastMsgRef} />
    </div>
  );
}
