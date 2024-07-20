
import { useDispatch } from "react-redux";
import { addItem } from "./cartSlice";

const MenuList = (item)=>{
    const {menuListData}=item;
    const dispatch = useDispatch();

    const {name ,  imageId } = menuListData?.card?.info || {};
    console.log("this is menuList"+menuListData)
    const handleCart =(menuListData) =>{
        dispatch(addItem(menuListData));

    }

    return(
        <div className="menuListContainer">
            <div className="imageContainer">
            <p className="menuName">{name}</p>
            <p className="menuPrice">₹{menuListData?.card?.info?.price/100 || menuListData?.card?.info?.defaultPrice/100}</p>
            </div>
            <div className="menuListImage">
                <button className="addButton" onClick={()=>handleCart(menuListData)}>ADD</button>
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+imageId} />
            {/* <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/gwur0ij2zfwgwgc8zwxl" alt="" /> */}
            </div>
        </div>
    )

};
export default MenuList ;