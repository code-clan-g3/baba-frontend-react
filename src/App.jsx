import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ChatRoom from "./pages/ChatRoom"
import Register from "./pages/Register"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/chatroom" element={<ChatRoom />} />
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
