
import { useDispatch } from "react-redux";
import { removeItem } from "./cartSlice";
import { useState } from "react";
import './CartItems.css'
const CartItems =(props)=>{
    const {itemMenu}=props;
    const [quantity,setQuantity]=useState(1);
    const dispatch= useDispatch();
const {name , veg ,price,id, category} = itemMenu?.card?.info || {};

    const removeHandler = ()=>{
        dispatch(removeItem(id));
    }
    
    const quantityIncrement=()=>{
        setQuantity(quantity+1);
    }
    const quantityDecrement=()=>{
        if(quantity>1){
            setQuantity(quantity-1);
        }
    }

    return(
        <div className="cart-wrapper-wrapper">
            <div className="cartItems-container">
                <div className="cartContent">
                    <div className="cartVeg">{veg? "🟢" : "🔴"}</div>
                    <h1 className="cartHeading">{name}</h1>
                    <p className="cartDescription">{category}</p>
                    <p className="cartServes">Serve 1</p>
                </div>
                <div className="cartPrice">
                    <p className="priceCart">₹{(price*quantity)/100}</p>
                    <div className="cartQuantity">
                        <button className="decrement" onClick={quantityDecrement}>-</button>
                        <p>{quantity}</p>
                        <button className="increment" onClick={quantityIncrement}>+</button>
                    </div>
                </div>
                
            </div>
                {/* <button className="removeItem" onClick={()=>removeHandler(itemMenu)}>Remove</button> */}
        </div>
    )

}
export default CartItems;