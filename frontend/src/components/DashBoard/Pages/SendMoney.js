import React from 'react'
import Navbar from '../../Header/Navbar'
import SendMoneyForm from '../Forms/SendMoneyForm'
import NavbarLand from '../../Header/NavbarLand'

const SendMoney = () => {
  const isLoggedIn = localStorage.getItem("uniqueId") !== null;
  return (
    <div>
      {isLoggedIn ? <Navbar /> : <NavbarLand />} 
      <SendMoneyForm/>
    </div>
  )
}

export default SendMoney
