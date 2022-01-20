import { Route, Routes } from "react-router-dom";
import Product from "./routes/Product";
import Dashboard from "./routes/Dashboard";
import SignIn from "./routes/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/product" element={<Product />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
