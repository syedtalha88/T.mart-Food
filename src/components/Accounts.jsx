
import { Link } from 'react-router-dom'
import account from '/images/account.png'
import React from 'react'

const Accounts = () => {
  return (
    <div className="cart-display">
                            <div className="cart-display-container">
                                <div className="account-image">
                                <img src={account} alt="" />
                                </div>
                                <h2>Account</h2>
                                <p>To place yoiur order now, log into your existing account or sign up</p>
                                <div className="account-buttons">
                                   <Link to="/cart/signin"> <button className="signin">SIGN IN</button></Link>
                                   <Link to="/cart/signup"><button className="signin">SIGN UP</button></Link>
                                </div>
                            </div>
                    </div>
  )
}

export default Accounts