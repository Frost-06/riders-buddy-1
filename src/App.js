import { Route, Routes } from "react-router-dom";
import ProductPage from "./routes/ProductPage";
import Dashboard from "./routes/Dashboard";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import ServicePage from "./routes/ServicePage";
import ChatContext from "./context/ChatContext";
import { useState } from "react";

function App() {
  const [chatData, setChat] = useState();

  return (
    <ChatContext.Provider value={{ chatData, setChat }}>
      <Routes>
        <Route path="/product" element={<ProductPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </ChatContext.Provider>
  );
}

export default App;
