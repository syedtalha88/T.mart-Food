import React from 'react'
import mobileApp from '/images/mobileApp.png'
import apple from '/images/apple.png'
import playstore from '/images/playstore.png'
import './MobileApp.css'


const MobileApp = () => {
  return (
    <div>
        <div className="mobile-container">
            <div className="mobile-image">
                <img className='vert-move' src={mobileApp} alt="" />
            </div>
            <div className="mobile-content">
                <div className="mobile-heading">
                    <h3>Download the T.mart App Now!</h3>
                    <p>Get the app for free and place takeout orders online whenever you want.</p>
                </div>
                <div className="mobile-link">
                        <img src={apple} alt="" />
                    <img className='playst' src={playstore} alt="" />
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default MobileApp