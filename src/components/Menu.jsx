import React from 'react';
import { useParams } from 'react-router-dom';
import MenuContainer from './MenuContainer';
import { useRestaurantMenu } from '../utils/useRestaurantMenu';
import { useRestaurantMenuCards } from '../utils/useRestaurantMenu';

const Menu = () => {
    const {resId}=useParams();
    const resMenu= useRestaurantMenu(resId);
    const resMenuCards= useRestaurantMenuCards(resId);

    const restaurantInfo = resMenu?.cards[2]?.card?.card?.info || {};
    const { name, cuisines, areaName, avgRating, totalRatingsString ,costForTwoMessage} = restaurantInfo;

    const {lastMileTravel, slaString} = resMenu?.cards[2]?.card?.card?.info?.sla || {};
    
    const restaurantOffer = resMenu?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers[0]?.info || {};
    const { couponCode, description, header} = restaurantOffer;
  return (
    <div className='menuContainer'>
        <div className="resDetails">
            <div className="resName">
                <h4 className='restaurantName'>{name}</h4>
                <p className="restaurantCuisines">{cuisines ? cuisines.join("-") : ''}</p>
                <p className="restaurantAddress">{areaName} - {lastMileTravel}km</p>
                <p className="restaurantCart"><i className="ri-e-bike-2-fill"></i> - {lastMileTravel}km Away</p>
            </div>
            <div className="resRating">
                <h5 className="restaurantRating "><i className="ri-star-fill"></i> {avgRating}</h5>
                <p className="restaurantNoOfRating ">{totalRatingsString} </p>
            </div>
        </div>
        <div>
            <div className="priceContainer">
            <div className="restaurantPrice">
                <h3 className="resTime"><i className="ri-time-line"></i>{slaString}</h3>
                <h3 className="resTime"><i className="ri-money-rupee-circle-line"></i>{costForTwoMessage}</h3>
            </div>
            <div className="offerContainer">
                <h5 className="offerName">{header} </h5>
                <p className="offerCode">{couponCode} | {description} </p>
            </div>
            <div className="vegOnly">
                <h5>Veg Only <i className="ri-cash-line"></i></h5>
            </div>
            </div>
        </div>
        <div className="menuCards">
            { resMenuCards.map((card)=>{
                return <MenuContainer  menuData={card} />
            })};
        </div>
        
    </div>
  )
};

export default Menu;