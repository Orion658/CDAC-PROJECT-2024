import React from 'react'
import Navbar from '../../Header/Navbar'
import PayBillsForm from '../Forms/PayBillForm'
import ShowBillsTable from '../Tables/ShowBillsTable'
import NavbarLand from '../../Header/NavbarLand'

const PayBills = () => {
  const isLoggedIn = localStorage.getItem("uniqueId") !== null;
  return (
    <div>
      {isLoggedIn ? <Navbar /> : <NavbarLand />} 
      <div className='flexed'>
      <div className='boxed'>
        <ShowBillsTable/>
      </div>
      <div>
         <PayBillsForm/>
      </div>
      </div>
    </div>
  )
}

export default PayBills
