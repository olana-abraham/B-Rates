import React from 'react';
import Reviews from "./pages/Reviews"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/register"
import { Route, Routes } from "react-router-dom"
import Navbar from './Navbar';

function App() {
  let component
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>
    </>
  )

}

export default App;