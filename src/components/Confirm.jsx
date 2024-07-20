import React from 'react'
import captcha from '/images/captcha.png'
import './Confirm.css'
const Confirm = () => {
  return (
    <div className='confirm-container'>
        <div className="captcha">
            <img src={captcha} alt="" />
        </div>
        <p>Please enter the verification code above to proceed with your payment</p>
        <input type="text" placeholder="Enter Verification Code" /><br />
        <button>Confirm</button>
    </div>
  )
}

export default Confirm