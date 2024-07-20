
import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import { clearCart} from "./cartSlice";
import './Cart.css'
import account from "/images/account.png"
import { useState } from "react";
import Accounts from "./Accounts";
import Address from "./Address";
import Payment from "./Payment";
import Confirm from "./Confirm";

const Cart =()=>{
    const [accountss,setAccounts]=useState(1);
    const [pageAddress,setPageAddress]=useState("Cart");
    const dispatch= useDispatch();
    const cartItems = useSelector((store)=>store.cart.items);

    const clearCartHanlder =()=>{
        dispatch(clearCart());
    }
    const accountUpdate =()=>{
        setAccounts(1);
        setPageAddress("Cart");
    }
    const addressUpdate =()=>{
        setAccounts(2);
        setPageAddress("Address");

    }
    const paymentUpdate =()=>{
        setAccounts(3);
        setPageAddress("Payment");

    }
    const ConfirmUpdate =()=>{
        setAccounts(4);
        setPageAddress("Payment");

    }
    
    return(
        <div>
            <div className="CartHeading">
                <div className="CartHeading-wrapper">
                <p className="CheckoutName">Checkout</p>
                <p><i class="fa-solid fa-house"></i> Home / {pageAddress}</p>
                </div>
            </div>
            <div className="cart-wrapper">
                <div className="cart-account" >
                    <div className="cart-header-wrapper">
                        <div className={accountss===1? "cart-header active" : "cart-header"} onClick={accountUpdate}>
                            <p className="cart-account-icon "><i class="fa-solid fa-user"></i></p>
                            <p className="cart-account-name">Account</p>
                        </div>
                        <div className={accountss===2? "cart-header active" : "cart-header "} onClick={addressUpdate}>
                            <p className="cart-account-icon"><i class="fa-solid fa-location-dot"></i></p>
                            <p className="cart-account-name">Address</p>
                        </div>
                        <div className={accountss===3? "cart-header active" : "cart-header "} onClick={paymentUpdate}>
                            <p className="cart-account-icon"><i class="fa-solid fa-credit-card"></i></p>
                            <p className="cart-account-name">Payment</p>
                        </div>
                        <div className={accountss===4? "cart-header active" : "cart-header "} onClick={ConfirmUpdate}>
                            <p className="cart-account-icon"><i class="fa-solid fa-square-check"></i></p>
                            <p className="cart-account-name">Confirm</p>
                        </div>
                    </div>
                    {accountss===1?<Accounts/>:""}
                    {accountss===2?<Address/>:""}
                    {accountss===3?<Payment/>:""}
                    {accountss===4?<Confirm/>:""}
                </div>
                <div className="Cart-container">
                    <button className="cartEmpty" onClick={clearCartHanlder}>Clear Cart</button>
                    {cartItems.map((cart)=>(
                    <CartItems itemMenu={cart}/>
                    )
                    )}
                    <div className="cartBill">
                        <div className="subTotal">
                            <p className="subTotal-desc">Sub Total</p>
                            <p className="subTotal-price">₹100</p>
                        </div>
                        <div className="subTotal">
                            <p className="subTotal-desc">Delivery Charges</p>
                            <p className="subTotal-price green">FREE</p>
                        </div>
                        <div className="subTotal">
                            <p className="subTotal-desc">Sub Total</p>
                            <p className="subTotal-price">₹100</p>
                        </div>
                        <div className="ToPay">
                            <p className="ToPay-desc">Total Amount</p>
                            <p className="ToPay-price">₹200</p>
                        </div>
                        <div className="checkout-button"><button className="Checkout">Checkout</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;