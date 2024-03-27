import React from 'react'
import Navbar from '../../Header/Navbar'
import NavbarLand from '../../Header/NavbarLand';
// import { toast, ToastContainer } from 'react-toastify';
import About from '../../Helper/About';


const AboutUs = () => {

  const isLoggedIn = localStorage.getItem("uniqueId") !== null;
  
  return (
    <div>
      {isLoggedIn ? <Navbar /> : <NavbarLand />} 
      <h1 className='heading'>About Us</h1>
      <About/>
    </div>
  )
}

export default AboutUs
