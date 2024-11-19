import React from 'react';
import { useEffect, useRef } from 'react';
import { FaUser, FaRobot, FaSpinner } from 'react-icons/fa';
import { MdContentCopy, MdRefresh, MdThumbDown, MdShare } from 'react-icons/md';

export default function MessageList({ messages, loading, gettingMessages}) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading, gettingMessages]);
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-6">
      {gettingMessages ? (
            <div className="flex justify-center items-center py-4">
              <FaSpinner className="animate-spin text-indigo-600 w-6 h-6" />
              <span className="ml-2">Loading chats...</span>
            </div>
          ) : (
      messages.map((msg) => (
        <div key={msg.id} className="flex space-x-3 scroll-smooth">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${msg.isUser ? 'bg-indigo-100' : 'bg-gray-100'}`}>
            {msg.isUser ? (
              <FaUser className="w-5 h-5 text-indigo-600" />
            ) : (
              <FaRobot className="w-5 h-5 text-gray-600" />
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <span className="font-medium">{msg.sender}</span>
              <span className="text-sm text-gray-500">{msg.time}</span>
            </div>
            <div className="prose prose-sm max-w-none">
              <p className="text-gray-700 whitespace-pre-wrap">{msg.content}</p>
            </div>
            {!msg.isUser && (
              <div className="flex space-x-2 mt-2">
                <button className="p-1 hover:bg-gray-100 rounded">
                  {/* <MdContentCopy className="w-4 h-4 text-gray-500" /> */}
                </button>
              </div>
            )}
          </div>
        </div>
      )))}

{loading && (
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <FaRobot className="w-5 h-5 text-gray-600 animate-pulse" />
          </div>
          <div className="text-gray-500 italic">Shhh!!!! Baba is typing...</div>
        </div>
      )}
    </div>
  );
}