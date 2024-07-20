import React from 'react'
import './Address.css'
import { Link } from 'react-router-dom'

const Address = () => {
  return (
    <div>
      <div className="address-container">
        <h2 className="address-heading">Select Saved Address</h2>
         <p className="address-description">You've add some address before, You can select one of below.</p>
        <div className="address-card-wrapper">
        <div className="address-card">
          <div className="address-card-head">
            <p className="address-card-content">Home</p>
            <p className="card-lhs"> 123 Main St, Anytown, USA</p>
            <p className="card-phone">+00 749 34788 92</p>
            <Link to="/cart/payment"><button className="card-btn"> Deliver Here </button></Link>
          </div>
        </div>
        <div className="address-card">
          <div className="address-card-head">
            <p className="card-content">Office</p>
            <p className="card-lhs">912 st , lakedown street ,  build road, UK</p>
            <p className="card-phone">+35 469 88 92</p>
            <Link to="/cart/payment"><button className="card-btn"> Deliver Here </button></Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Address