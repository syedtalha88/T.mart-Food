import React from "react";
import { useState,useEffect } from "react";
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId=360967&catalog_qa=undefined&submitAction=ENTER

export const useRestaurantMenu = (resId)=>{
    
    const [resMenu , setResMenu]=useState();
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu = async ()=>{
        const data2 = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json2 = await data2.json();

        console.log(json2);
        setResMenu(json2.data);
    }
    return resMenu;
}
export const useRestaurantMenuCards = (resId)=>{

    const [resMenuCards , setResMenuCards]=useState([]);
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu = async ()=>{
        const data2 = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json2 = await data2.json();

        console.log(json2);
        setResMenuCards(json2?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((f)=> f.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));
    }
    return resMenuCards;
}