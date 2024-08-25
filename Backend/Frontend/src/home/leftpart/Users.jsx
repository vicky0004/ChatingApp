import React from "react";
import User from "./User";
import useGetAllusers from "../../context/useGetAllusers";

export default function Users() {
  const [allUsers,loading] = useGetAllusers();
  // console.log(allUsers);
  return (
    <div>
      <h1 className="px-8 py-2 text-white font-semibold bg-slate-800 rounded-md">
        Messages
      </h1>
      <div className="py-2 overflow-hidden overflow-y-scroll flex-1" style={{maxHeight:"calc(80vh - 10vh)"}}>
        {allUsers.map((user,index)=>(
          <User key={index} user={user}/>
        ))}
      </div>
    </div>
  );
}
