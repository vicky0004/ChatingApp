import React from "react";
import Search from "./Search";
import Users from "./Users";
import Logout from "./logout";

export default function left() {
  return (
    // <div className="w-full bg-black">
    //   <Search />
    //   <div className="flex-1 overflow-y-auto" style={{minHeight:"calc(80vh)"}}>
    //     <Users />
    //   </div>
    //   <Logout />
    // </div>
    <div className="w-full    bg-black text-gray-300">
      <Search />
      <div
        className=" flex-1  overflow-y-auto"
        style={{ minHeight: "calc(84vh - 10vh)" }}
      >
        <Users />
      </div>
      <Logout />
    </div>
  );
}
