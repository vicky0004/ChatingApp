import React from "react";
import useConversation from "../../zustand/userConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import userImage from '../../assets/anime.jpg';

export default function User({ user }) {
  const {
    notifications,
    removeNotification,
    selectedConversation,
    setSelectedConversation,
  } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  // console.log(isSelected,selectedConversation,user._id);
  const { socket, onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);
  const count = notifications.filter(
    (notifications) => notifications.senderId === user._id
  ).length;

  return (
    <div
      className={`${isSelected ? "bg-slate-700" : ""}`}
      onClick={() => {
        setSelectedConversation(user);
        removeNotification(user._id);
      }}
    >
      <div className="flex space-x-4 px-8 py-3 hover:bg-slate-700 duration-300 cursor-pointer">
        <div className={`avatar ${isOnline ? "online" : ""}`}>
            <div className="w-12 rounded-full">
              <img src={userImage}/>
            </div>
        </div>
        <div className="indicator">
          {count > 0 && (
            <span className="indicator-item badge bg-success">{count}</span>
          )}
          <div>
            <h1 className="font-bold text-white">{user.fullname}</h1>
            <span className="text-white">{user.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
