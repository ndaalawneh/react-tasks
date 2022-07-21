import { BrowserRouter , Route , Routes, NavLink } from "react-router-dom";
import './movielist.css' ;
import './App.css' ;
import Home from "./home";
import About from "./about";
import Movies from "./Movielist";
import Movie from "./Movie";


import React from "react";

export default function App(){


return(

  <BrowserRouter>


  <nav>
 <h3>AN</h3>

    <ul>
    <li>
      <NavLink to='/'>home</NavLink>
    </li>

    <li>
      <NavLink to='/about'>about</NavLink>
    </li>
    <li>
      <NavLink to='/movies'>Movies</NavLink>
    </li>
    </ul>
  </nav>
  
  <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/movies" element={<Movies/>}/>
    <Route path="/movies/:id" element={<Movie/>}/>

  </Routes>
  
  
  </BrowserRouter>

);

}