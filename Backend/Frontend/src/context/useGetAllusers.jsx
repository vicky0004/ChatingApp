import React, { useEffect, useState } from 'react'
import Cookies from "js-cookie";
import axios from "axios";

function useGetAllusers() {
  const [allUsers,setAllusers]=useState([]);
  const [loading,setLoading] =useState(false);
  useEffect(()=>{
      const getUsers = async ()=>{
        setLoading(true); 
        try{
            const token = Cookies.get("jwt");
            // console.log(token);
            const response = await axios.get("/api/user/allusers",{
                credential:"include",
                header:{
                    Authorization :`Bearer ${token}`,
                }
            }) 
            setAllusers(response.data);
            setLoading(false);
        }catch(error){
            console.log("error in get all users frontend",error);
        }
      }
    getUsers();
  },[]);
  return [allUsers,loading];
}

export default  useGetAllusers;