import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage";

export default function Typesend() {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-center space-x-1 h-[8vh]">
        <div className="w-[70%] mx-4">
          <input
            type="text"
            placeholder="Type here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-700 outline-none rounded-xl px-4 py-2 bg-gray-800 mt-1 w-full"
          />
        </div>
        <button>
          <IoSend className="text-3xl" />
        </button>
      </div>
    </form>
  );
}
