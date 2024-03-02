import React from 'react';
import Navbar from "./Navbar"
import Reviews from "./pages/Reviews"
import Home from "./pages/Home"
import Login from "./pages/Login"
import {Route, Routes} from "react-router-dom"

function App() {
    let component 
    return (
      <>
         <Navbar />
         <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path ="/Login" element={<Login />} />
          </Routes>
        </div>
      </>
    )

  }
  
  export default App;