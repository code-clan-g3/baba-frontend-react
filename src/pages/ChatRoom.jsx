import React, { useEffect, useState } from 'react';
import Sidebar from '../components/navigation/Sidebar';
import Header from '../components/navigation/Header';
import MessageList from '../components/chat/MessageList';
import ChatInput from '../components/chat/ChatInput';

function ChatRoom() {
    const [message, setMessage] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [chats, setChats] = useState([]);
    const [sideLoad, setSideLoad] = useState(false);
    const [gettingMessages, setGettingMessages] = useState(false);
  
    useEffect(() => {
      const thread_id = localStorage.getItem("thread_id");
      const token = localStorage.getItem("token")


      const fetchData = async () => {
        setGettingMessages(true);
        try {
          const response = await fetch(`http://127.0.0.1:5000/chat/${thread_id}`);
          const result = await response.json();

          const formatted_message = result.data.map((msg) => ({
            content: msg.content[0].text.value,
            role: msg.role,
            sender: msg.role === "user" ? "You" : "Baba",
            isUser: msg.role === "user"
          }))

          setMessages(formatted_message.reverse());
        } catch (error) {
          console.error("Error fetching messages:", error);
        }finally{
          setGettingMessages(false)
        }
      };

  
      const fetch_chats = async () => {
        try {
          setSideLoad(true);
          const response = await fetch(`http://127.0.0.1:5000/chat/get_threads`,{
            headers: {
              "Authorization": `Bearer ${token}`
            }
          });
          const result = await response.json();

          const formatted_message = result.message.map((msg) => ({
            chat_name: msg.chat_name,
            thread_id: msg.thread_id
          }));

          console.log(formatted_message);
          setChats(formatted_message);
        } catch (error) {
          console.error("Error fetching messages:", error);
        }finally{
          setSideLoad(false);
        }

        
      };


      fetchData();
      fetch_chats();
    }, []);
  
    const handleSendMessage = async () => {
        const thread_id = localStorage.getItem("thread_id");
      if (!message.trim()) return;
  
      const userMessage = { 
        content: message,
        role: "user",
        sender: "You",
        time: new Date().toLocaleTimeString(),
        isUser: true,
      };
  
      
      setMessages((prev) => [...prev, userMessage]);
      setMessage('');
      setLoading(true);
  
      try {
        const response = await fetch(`http://127.0.0.1:5000/chat/${thread_id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: message }),
        });
  
        const botResponse = await response.json();
  
        
        setMessages((prev) => [
          ...prev,
          {
            content: botResponse.response,
            role: "assistant",
            sender: "Baba",
            time: new Date().toLocaleTimeString(),
            isUser: false,
          },
        ]);
      } catch (error) {
        console.error("Error sending message:", error);
      }finally{
        setLoading(false);
      }
    };
  
    return (
      <div className="flex h-screen bg-gray-50">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} chats={chats} isLoading={sideLoad} />
        <div className="flex-1 flex flex-col">
          <Header onMenuClick={() => setIsSidebarOpen(true)} />
          <MessageList messages={messages} loading={loading} gettingMessages={gettingMessages}/>
          <ChatInput
            message={message}
            setMessage={setMessage}
            onSend={handleSendMessage}
          />
        </div>
      </div>
    );
  }
  

export default ChatRoom;