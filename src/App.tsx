import React from "react";
import logo from "./logo.svg";
import "./App.css";
/* import { Home } from "./Pages/home/home"; */
import Cart from "./Pages/cart/cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Home=React.lazy(()=>import('./Pages/home/home'));
function App() {
  const route = (
    <Routes>
      <Route path="/home" element={<React.Suspense fallback='loading...'><Home /></React.Suspense>}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Routes>
  );
  return (
    <div className="App">
      <BrowserRouter>{route}</BrowserRouter>
    </div>
  );
}

export default App;