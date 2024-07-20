
import './Footer.css'

import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="Footer-container">
            <div className="email-container">
                <div className="email-content">
                    <p>Don't pass up our fantastic discounts. email offers from all of our best eateries.
                    </p>
                </div>
                <div className="email-input">
                    <input type="text" placeholder="Enter your email" />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="Footer-content">
                <div className="footer-brand-container">
                    <div className="footer-brand-content">
                        <h1>T.mart</h1>
                        <p>Welcome to our online order website! Here, you can browse our wide selection of products and place orders from the comfort of you own home.</p>

                    </div>
                    <div className="footer-social">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </div>
                </div>
                <div className="footer-link-container">
                    <div className="footer-link-content">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Offers</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>
        
                </div>
                    <div className="footer-link-content">
                        <h3>Account</h3>
                        <ul>
                            <li><a className="footerr" href="#">My orders</a></li>
                            <li><a href="#">Wishlist</a></li>
                            <li><a href="#">Shopping Cart</a></li>
                            <li><a href="#">Addresses</a></li>
                        </ul>
        
                </div>
                    <div className="footer-link-content">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#">Blogs</a></li>
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Register</a></li>
                            <li><a href="#">Profile</a></li>
                        </ul>
        
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <div className="footer-copyright-content">
                <p>Copyright © 2021 T.mart. All rights reserved.</p>
            </div>
    
        </div>
    </div>
    </div>
  )
}

export default Footer   