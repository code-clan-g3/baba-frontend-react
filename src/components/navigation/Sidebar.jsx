import React, { useState } from "react";
import { useEffect } from "react";
import { FaRobot, FaSpinner } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

export default function Sidebar({ isOpen, onClose, chats, isLoading }) {
  const [newChatLoading, setNewChatLoading] = useState(false)
  const handleChatClick = (thread_id) => {
    localStorage.setItem("thread_id", thread_id);
    window.location.reload();
  };

  const handleNewChat = async () => {
    setNewChatLoading(true);

    const token =  localStorage.getItem("token")

    try {
      const response = await fetch(
        "https://baba-python-backend.onrender.com/chat/thread",
        {
          method: "GET",
          headers: {
            "Content-Type": "application.json",
            "Authorization": `Bearer ${token}`
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("thread_id", data.thread_id);
        window.location.reload();
      } else{
        const errorData = await response.json();
        console.log(errorData)
      }
    }catch (error){
      alert("An Error occured");
    } finally{
      setNewChatLoading(false);
    }
    
  }

  return (
    <>
      {/* Mobile backdrop */}
      <div
        className={`fixed inset-0 bg-gray-600 bg-opacity-50 transition-opacity lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 
        transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FaRobot className="w-6 h-6 text-indigo-600" />
            <h1 className="font-semibold">baba's AI</h1>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          <div className="flex items-center space-x-3 p-2 bg-gray-100 rounded">
            <span className="text-gray-700">Today</span>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-4">
              <FaSpinner className="animate-spin text-indigo-600 w-6 h-6" />
              <span className="ml-2">Loading chats...</span>
            </div>
          ) : (
            Array.isArray(chats) &&
            chats.map((chat, index) => (
              <div
                key={index}
                onClick={() => handleChatClick(chat.thread_id)}
                className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded cursor-pointer"
              >
                <span className="text-gray-600">{chat.chat_name}</span>
              </div>
            ))
          )}

          <div
          onClick={!newChatLoading? handleNewChat : null}
            className={`mb-0 flex items-center space-x-3 p-2 hover:bg-gray-100 bg-indigo-600 rounded cursor-pointer ${newChatLoading ? "bg-slate-600": "bg-indigo-600"}`}
          >
            <span className="text-white">{!newChatLoading ? "New Chat": "Loading"}</span>
          </div>
        </nav>
      </div>
    </>
  );
}
