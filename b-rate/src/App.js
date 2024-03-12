import React from 'react';
import Reviews from "./pages/Reviews"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/register"
import Forgot from './pages/forgot';
import Name from "./pages/Account_Info_1"
import Favorite from "./pages/Account_Info_2"
import Profile from "./pages/Profile"
import { Route, Routes } from "react-router-dom"
import Footer from "./Footer";
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/account_info_1" element={<Name />} />
          <Route path="/account_info_2" element={<Favorite />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
   <Footer/>
    </div>
  );
}

export default App;