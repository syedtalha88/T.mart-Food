import './Payment.css'
const Payment =()=>{
    
    
    return(
        <div className='payment-cover'>
            <h2 className="payment-heading">
                Choose Payment Method
            </h2>
            <p className="payment-description">There are many Types of Payment methods</p>
            <div className="payment-container">
                <h2>Credit/Debit Card</h2>
                <form>
                    <div className="payment-input">
                        <label>Card Number:</label>
                        <input type="text" placeholder="1234 5678 9012 3456"/>
                    </div>
                    <div className="payment-input">
                        <label>Expiration Date:</label>
                        <input type="text" placeholder="MM/YY"/>
                    </div>
                    <div className="payment-input">
                        <label>CVV:</label>
                        <input type="text" placeholder="123"/>
                    </div>
                <div className="payment-terms">
                    <input type="checkbox" id="terms" name="terms"/>
                    <label for="terms"> I agree to the terms and conditions</label>
                </div>
                    <button className="payment-btn">Pay Now</button>
                </form>
                
            </div>
            <div className="upi">
                <h2>UPI</h2>
                <div className="different-upi-radio">
                    <div className="upi-option">
                        <label for="paytm"><i class="fa-brands fa-amazon-pay"></i>AmazonPay</label>
                        <input type="radio" className="paytm" name="payment-method" value="paytm"/>
                    </div>
                    <div className="upi-option">
                        <label for="paytm"><i class="fa-brands fa-paypal"></i> PayPal</label>
                        <input type="radio" className="paytm" name="payment-method" value="paytm"/>
                    </div>
                    <div className="upi-option">
                        <label for="paytm"><i class="fa-brands fa-google-pay"></i>Gpay</label>
                        <input type="radio" className="paytm" name="payment-method" value="paytm"/>
                    </div>
                </div>

            </div>
            <div className="cod">
                <h2>Cash</h2>
            <div className="upi-option">
                        <label for="paytm"><i class="fa-solid fa-money-bill-1-wave"></i> Cash On Delivery</label>
                        <input type="radio" className="paytm" name="payment-method" value="paytm"/>
                    </div>
            </div>
            <button className="payment-btn">Pay Now</button>
        </div>
    )
}

export default Payment;