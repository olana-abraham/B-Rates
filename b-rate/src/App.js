import React from 'react';
import Reviews from "./pages/Reviews"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/register"
import Footer from "./pages/Footer";
import Forgot from './pages/forgot';
import Name from "./pages/Account_Info_1"
import Favorite from "./pages/Account_Info_2"
import Profile from "./pages/Profile"
import PasswordReset from './pages/password_reset';

import { Route, Routes } from "react-router-dom"
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
      <Footer />
    </>
  )

}

export default App;