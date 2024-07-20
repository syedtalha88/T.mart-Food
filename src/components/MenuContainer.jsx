
import { useState } from "react";
import MenuList from "./MenuList";

const MenuContainer = (props)=>{
    const {menuData}=props;
    // const menuCardsFilter= menuData?.card?.card?.['@type'];
    const  menuCards = menuData?.card?.card?.itemCards || [] 
    // const menuCardsFiltered = menuCardsFilter.filter((f) => f == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // const menuCardsFilter=menuData.filter((f)=> f.card?.card?.['@type']== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" );
    const [slider,setSlider]=useState(true);

    console.log("menucard"+menuData);
    const title = menuData?.card?.card?.title ;

    const toggleSlider =()=>{
        setSlider(!slider);
    }

    return(
        <div>
        <div className="titleContainer">
            <div className="menuTitle" onClick={toggleSlider}><h4>{title}({menuCards.length})</h4><h3 ><i class="ri-arrow-down-s-line"></i></h3></div>
            {
                menuCards.map((fil)=>{
                    return(
                      slider &&  <MenuList  key={fil.card?.info?.id} menuListData = {fil} />
                    );
                })
            }
        </div>
        </div>
    )
};

export default MenuContainer;