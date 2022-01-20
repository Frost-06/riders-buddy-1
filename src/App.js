import { Route, Routes } from "react-router-dom";
import ProductPage from "./routes/ProductPage";
import Dashboard from "./routes/Dashboard";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp"
import ServicePage from "./routes/ServicePage"

function App() {
  return (
    <Routes>
      <Route path="/product" element={<ProductPage />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/service" element={<ServicePage />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
