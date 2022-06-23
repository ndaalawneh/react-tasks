 import {BrowserRouter,Route ,NavLink,Routes} from 'react-router-dom' ;
 import './main.css' ;
export default  function App(){
  return(<BrowserRouter>
<nav>
<ul>
  <li><NavLink to='/home'>Home</NavLink></li>
  <li><NavLink to='/about'>About Us</NavLink></li>
  <li><NavLink to='/contact'>Contact Us</NavLink></li>
</ul>
</nav>


<Routes>
  <Route path='/home' element={<h1>hello home</h1>} />
  <Route path='/about' element={<h1>hello about</h1>} />
  <Route path='/contact' element={<h1>hello contact</h1>} />
</Routes>
</BrowserRouter>);


}

 
