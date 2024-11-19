import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ChatRoom from "./pages/ChatRoom"
import Register from "./pages/Register"
import LandingPage from "./Pages/LandingPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/chatroom" element={<ChatRoom />} />
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
