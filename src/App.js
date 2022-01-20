import { Route, Routes } from "react-router-dom";
import Product from "./routes/Product";
import Dashboard from "./routes/Dashboard";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp"

function App() {
  return (
    <Routes>
      <Route path="/product" element={<Product />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
