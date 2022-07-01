import React from "react";
import './App.css';
import Navbar from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import SignIn from './pages/signin';



import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./components/NavbarElements";

function App() {
  return (

   <>
    <Nav>
    <NavLogo to="/">
        Logo
    </NavLogo>
    <Bars />

    <NavMenu>
        <NavLink 
          to="/" 
          activeStyle={{ color:'black' }}
        >
            Home
        </NavLink>
        <NavLink 
          to="/about" 
          activeStyle={{ color: 'black' }}
        >
            About
        </NavLink>
        <NavLink 
          to="/contact" 
          activeStyle={{ color: 'black' }}
        >
            Contact
        </NavLink>
        <NavLink 
          to="/signin" 
          activeStyle={{ color: 'black' }}
        >
            Sign In
        </NavLink>
        <NavBtn>
            <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>                
        </NavBtn>
    </NavMenu> 
   </Nav> 
  


    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/about" element={About} />
        <Route path="/contact" element={Contact} />
        <Route path="/signin" element={SignIn} />
        <Route path="/sign-up" element={SignUp} />
      </Routes>
    </Router> 
    </>
  );
}

export default App;
