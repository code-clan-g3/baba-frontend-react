import { useEffect } from "react";
import React, {useState} from "react";
import { FaCrown, FaUserCircle } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import Logo from "../Logo";

export default function Header({ onMenuClick }) {
    const [storedValue, setStoredValue] = useState(null);
    
    useEffect(() => {
        const value = localStorage.getItem('name');
        setStoredValue(value);
    }, []);

  return (
    <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        
        <h2 className="font-semibold">baba's AI</h2>
      </div>

      <div className="flex items-center">
        <button
          className="p-2 hover:bg-gray-100 rounded lg:hidden mr-2"
          onClick={onMenuClick}
        >
          <IoMenuOutline className="w-5 h-5 text-gray-500" />
        </button>

        <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
          <span className="text-sm font-medium text-gray-700 hidden sm:block">
            {storedValue}
          </span>
          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
            <FaUserCircle className="w-6 h-6 text-indigo-600" />
          </div>
        </div>
      </div>
    </header>
  );
}
