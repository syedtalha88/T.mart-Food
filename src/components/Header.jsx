import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import logo from "/images/logo.png";
import './Header.css'

let Header = () => {

  const cartItems = useSelector((store)=>store.cart.items)
  console.log("Cart Items:", cartItems);

  const onlineStatus=useOnlineStatus();
    return (
      <div className="navbar">
        <div className="logo">
          <h1><i class="fa-solid fa-cart-flatbed"></i> T.mart</h1>
          <p className="location"><i class="fa-solid fa-location-dot"></i> Location</p>
        </div>
        <div className="menu">
          <ul className="menuList">
            <li className="listItem">
              <Link to="/"><i class="fa-solid fa-suitcase"></i> T.mart Corporate</Link>
              
            </li>
            <li className="listItem">
              <Link to="About"><i class="fa-solid fa-magnifying-glass"></i> Search</Link>
            </li>
            <li className="listItem">
              <Link to=""><i class="fa-solid fa-percent"></i>   Offers</Link>
            </li>
            <li className="listItem">
              <Link to=""><i class="fa-solid fa-circle-info"></i> Help</Link>
            </li>
            <li className="listItem">
              <Link to=""><i class="fa-solid fa-user"></i> Sign In</Link>
            </li>
            <li className="listItem">
              <Link to="/cart"><i class="fa-solid fa-cart-shopping"></i> Cart ({cartItems.length})</Link>
            </li>
            {/* <li className="listItem" id="onlineStatus">{onlineStatus ? "Online🧶" : "Offline🏮" }</li> */}
          </ul>
        </div>
        
       
      </div>
    );
  };

export default Header;