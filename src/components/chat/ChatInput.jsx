import React from 'react';
import { IoAttach, IoMic, IoSendSharp } from 'react-icons/io5';

export default function ChatInput({ message, setMessage, onSend }) {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        onSend();
      }
    };
  
    return (
      <div className="border-t border-gray-200 p-4">
        <div className="bg-white border border-gray-200 rounded-lg flex items-center p-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Message baba..."
            className="flex-1 mx-2 outline-none"
          />
          <button
            className="p-2 bg-indigo-600 hover:bg-indigo-700 rounded text-white"
            onClick={onSend}
          >
            <IoSendSharp className="w-5 h-5" />
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          baba can make mistakes. Check our Terms & Conditions.
        </p>
      </div>
    );
  }
  