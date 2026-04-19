import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminMessages from "./components/AdminMessages";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Offers from "./pages/offers";
import CartSidebar from "./components/CartSidebar";
import WhatsAppButton from "./components/WhatsAppButton";
import OrderTracking from "./components/OrderTracking";
import TableBooking from "./components/TableBooking";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import FloatingCart from "./components/FloatingCart";
import OrderComplete from "./pages/OrderComplete";
import Orders from "./pages/Orders";

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <BrowserRouter>
      <Navbar setCartOpen={setCartOpen} />

      {/* 🛒 CART SIDEBAR (GLOBAL) */}
      <WhatsAppButton />
      <Routes>
  <Route path="/" element={<Home setCartOpen={setCartOpen} />} />
  <Route path="/menu" element={<Menu setCartOpen={setCartOpen} />} />        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
  <Route path="/book-table" element={<TableBooking />} />
  <Route path="/admin/messages" element={<AdminMessages />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/success" element={<OrderSuccess />} />
    <Route path="/order-complete" element={<OrderComplete />} />
<Route path="/tracking" element={<OrderTracking />} />
      <Route path="/book-table" element={<TableBooking />} />
        <Route path="/admin/messages" element={<AdminMessages />} />
        <Route path="/orders" element={<Orders />} />
        
      </Routes>
            <CartSidebar open={cartOpen} setOpen={setCartOpen} />
<FloatingCart setCartOpen={setCartOpen} />
      <WhatsAppButton />

    </BrowserRouter>

  );
};

export default App;