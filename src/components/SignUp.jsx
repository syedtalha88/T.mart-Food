import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import './Sign.css'

const SignUp = () => {
  return (
    <div>
        <div className="CartHeading">
                <div className="CartHeading-wrapper">
                    <p className="CheckoutName">Checkout</p>
                    <Link to="/"><p><i class="fa-solid fa-house"></i>  Home  / Sign Up</p></Link>
                </div>
        </div>
        <div className="signin-container">
            <h2>Sign Up</h2>
            <form>
                <div className="inputNumber">
                <i class="fa-solid fa-user"></i>
                    <input type="text" placeholder="Enter you name"/>
                </div><br />
                <div className="inputNumber">
                <i class="fa-solid fa-phone"></i>
                    <input type="text" placeholder="Enter you number"/>
                </div><br />
                <div className="inputNumber">
                <i class="fa-solid fa-lock"></i>
                    <input type="password" placeholder="Enter you password"/>
                </div><br />
                <button type="submit">Continue</button>
            </form>
            <p>Already have an account? <Link to="/cart/signin" ><span> Sign In</span></Link></p>
            <p className="terms">By creating an account, I accept the <span>Terms & conditions & Privacy Policy</span></p>
    
        </div>
    </div>
  )
}

export default SignUp