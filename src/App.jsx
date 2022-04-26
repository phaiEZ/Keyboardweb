import "./App.css";
import Navbar from "./components/Navbar";
import NavbarAfterLogin from "./components/NavbarAfterLogin"
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Custom from "./pages/Custom";
import Community from "./pages/Community";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        {/* <NavbarAfterLogin /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Custom" element={<Custom />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Community" element={<Community />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
