import { CDN_URL } from "../utils/constants";



let Card = (props) => {
    const { resData } = props;
   
   const name=resData?.info?.name;
   const cuisines=resData?.info?.cuisines;
   const cloudinaryImageId=resData?.info?.cloudinaryImageId;
   const sla=resData?.info?.sla.deliveryTime;
   const avgRating=resData?.info?.avgRating;
   const isOpen = resData?.info?.isOpen;
   const distant = resData?.info?.sla?.lastMileTravelString;
   const discountH = resData?.info?.aggregatedDiscountInfoV3?.header;
   const discountS = resData?.info?.aggregatedDiscountInfoV3?.subHeader;
   const city = resData?.info?.areaName;
    // console.log(resData);
    return (
<div >

      <div className="card" >
        <div className="openStatus">{isOpen? "🟢" : "🔴"}</div>
        <div className="card-offer">
          <p className="discount">
             {discountH}  
          </p>
             <p className="discount-sub"> {discountS} </p>
        </div>
        <div className="card-img">
          <img
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
           
          />
        </div>
        <div className="card-content">
          <div className="card-content-wrapper">
          <div className="card-heading">
            <h3 className="card-title">{name}</h3>
            <p className="cuisine">{cuisines.join("-")}</p>
          </div>
          <div className="card-rating">
            <p className="rating">
              <i className="ri-star-s-fill"></i>
              {avgRating}
            </p>
          </div> 
          </div>
          <div className="card-footer">
            <div className="card-city">
                  {city}
            </div>
            <div className="card-distance">
              <p className="dist"> <i class="fa-solid fa-location-dot"></i> {distant}</p>
              <p className="time"> <i class="fa-solid fa-clock"></i> {sla} min</p>
            </div>
          </div>
          
        </div>  
      </div>
</div>


    );
  };

 export const CardIsOpen =(Card)=>{
    return (props)=>{
      return(
        <div>
          <Card {...props}/>
        </div>
      )
    }
  }

  export default Card;