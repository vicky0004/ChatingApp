import { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client"
import { useAuth } from "./Authprovider";
const socketContext = createContext();

export const useSocketContext =()=>{
    return useContext(socketContext);
}
export const SocketProvider = ({children})=>{
    const [socket,setSocket] = useState(null);
    const [onlineUsers,setOnlineUsers] =useState([]);
    const [authUser]=useAuth();
    useEffect(()=>{
        if(authUser){
            // const socket = io("http://localhost:3000",{ // for local host
            const socket = io("https://chatingapp-wsyc.onrender.com/",{ //for online
                query:{
                    userId:authUser.user._id,
                },
            });
            setSocket(socket);
            socket.on("getOnlineUsers",(users)=>{
                setOnlineUsers(users);
            })
            return ()=>socket.close();
        }else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    },[authUser]);
    return (
        <socketContext.Provider value ={{socket, onlineUsers}}>
            {children}
        </socketContext.Provider>
    );
};