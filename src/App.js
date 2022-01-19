import { Route, Routes } from "react-router-dom";
import Product from "./routes/Product";
import Dashboard from "./routes/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/product" element={<Product />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
