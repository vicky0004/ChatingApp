import React,{useState} from "react";
import { FaSearch } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

export default function Logout() {
  const [loading,setLoading]=useState(false);
  const handleLogout= async ()=>{
    setLoading(true);
      try{
        await axios.post("/api/user/logout")
        localStorage.removeItem("chatapp");
        Cookies.remove("jwt");
        setLoading(false);
        toast.success("Logout successfully");
        window.location.reload();
      }catch(error){
        console.log("Error in Logout",error);
        toast.error(error,{
          duration:1000,
        });
      }
  }
  return (
    <div className="h-[9vh] bg-slate-800">
      <BiLogOut className="text-5xl text-white hover:bg-slate-700 duraiton-300 cursor-pointer rounded-full px-2 py-2 ml-2 mt-1" 
      onClick={handleLogout}/>
    </div>
  );
}
