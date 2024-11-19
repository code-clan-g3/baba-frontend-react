import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Desktop from "./pages/Desktop"
import Register from "./pages/Register"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/chatroom" element={<Desktop />} />
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
