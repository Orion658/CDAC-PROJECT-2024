import React from 'react'
import Navbar from '../../Header/Navbar'
import TransactionTable from '../Tables/TransactionTable'
import NavbarLand from '../../Header/NavbarLand'

const TransactionHistory = () => {
  const isLoggedIn = localStorage.getItem("uniqueId") !== null;
  return (
    <div>
      {isLoggedIn ? <Navbar /> : <NavbarLand />}  
    <br/>
    <br/>
    <div className='boxed'>
      <TransactionTable/>
    </div>
    <br/>
    </div>
  )
}

export default TransactionHistory
