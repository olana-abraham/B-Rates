import React from 'react';
import Reviews from "./pages/Reviews"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/register"
import Forgot from './pages/forgot';
import Name from "./pages/Account_Info_1"
import { Route, Routes } from "react-router-dom"
import Footer from "./Footer";
import './App.css'

function App() {
  let component
  return (
    <>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/Account_Info_1" element={<Name />} />

        </Routes>
      <Footer />
    </>
  )

}

export default App;