import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Contact from './Components/Contact';
import Posts from './Components/Posts';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <>
  <Router>

     {/* ========= NAVBAR WILL REMAIN IN ALL THE COMPONENT RENDERED ========= */}
  <Navbar />

    <Routes>
      
  {/* ========= HOME ========= */}
  <Route path='/' element={
    <>
    
    <Header title='Home' headerImg='mypic2.png '/>
    <Home/>
  
    </>
  }>
    </Route>
    


 {/* ========= CONTACT ========= */}
    <Route path='/contact' element={
      <>
       <Header title='Contact' headerImg='contact-bg.jpg' />
       <Contact />
      </>
    }>
    </Route>
 {/* ========= POSTS ========= */}
    <Route path='/posts' element={
      <>
       <Header title='Posts' headerImg='post-sample-image.jpg' />
       <Posts />
      </>
    }>
    </Route>
 {/* ========= ABOUT ========= */}

    <Route path='/about' element={
      <>
       <Header title='About' headerImg='about-bg.jpg' />
       <About />
      </>
    }>
    </Route>
 



 
  </Routes>

  <Footer />
  </Router>
  </>
  );
}


export default App;
