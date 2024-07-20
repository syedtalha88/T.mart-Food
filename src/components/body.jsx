import { useEffect, useState } from "react";

// import resList from "../utils/mockData";
import Card, { CardIsOpen } from "./restaurantCard";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import resList from "../utils/mockData";

export let CardWrapper = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);
  const [displayCount, setDisplayCount] = useState(8);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const OpenRestaurantCard = CardIsOpen(Card);
  useEffect(() => {
    setListOfRestaurant(
      resList?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredListOfRestaurant(
      resList?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }, []);

  const fetchData = async () => {
    const data = await fetch(CDN_URL);
    const json1 = await data.json();

    console.log(json1);
    // console.log(listOfRestaurant);
  };
 
  

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline , Please check your internet connection
      </h1>
    );
  }
  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }
  const loadMore = () => {
    setDisplayCount(displayCount + 4);
  };
  const showLess = () => {
    setDisplayCount(8);
  };
  const filterOne = () => {
    const FilteredList=listOfRestaurant.filter((e)=>{
      return (e.info?.sla?.deliveryTime <= 30)
    })
    setFilteredListOfRestaurant(FilteredList);
  }
  const filterTwo = () => {
    const FilteredList=listOfRestaurant.filter((e)=>{
      return (e.info?.availability?.opened === true)
    })
    setFilteredListOfRestaurant(FilteredList);
  }
  const filterThree = () => {
    const FilteredList = listOfRestaurant.filter(
      (fil) => fil.info?.avgRating > 4.3
    );
    // console.log(FilteredList)
    setFilteredListOfRestaurant(FilteredList);
  }
  const clearFilter=()=>{
    const clear=listOfRestaurant;
    setFilteredListOfRestaurant(clear);
  }

  return (
    <div className="section1">
      <button
        className="top-restaurant"
        onClick={() => {
          const FilteredList = listOfRestaurant.filter(
            (fil) => fil.info?.avgRating > 4.3
          );
          // console.log(FilteredList)
          setFilteredListOfRestaurant(FilteredList);
        }}
      >
        Top Restaurants
      </button>
      <div className="Card-heading">
        <h1>
          Tasty Food To Your Destination <br />
          <span>In 20 Mins.</span>
        </h1>
      </div>
      <div className="card-popular">
        <div className="card-popular-wrapper">
          <h3>Popular Restaurants</h3>
          <p>Browse Popular restaurants around you </p>
        </div>
        <div className="card-popular-search">
          <ul>
            <div className="filterr">Filter</div>
            <li className="card-popular-items"><a onClick={filterOne} >30 Mins</a></li>
            <li className="card-popular-items"><a onClick={filterTwo}>Low Price</a></li>
            <li className="card-popular-items"><a onClick={filterThree}>High Ratings</a></li>
            <li className="card-popular-items"><a ><i onClick={clearFilter} class="fa-solid closebtnn fa-xmark"></i></a></li>
           
            <div className="popular-search-bar search-bar">
              <input
                type="search"
                placeholder="Search..."
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);

                  console.log("site reloaded");
                  setFilteredListOfRestaurant(listOfRestaurant);
                }}
              />
              <button
                className="searchbtn"
                id="searchbtn"
                onClick={() => {
                  const SearchFilteredList = listOfRestaurant.filter((e) =>
                    e.info?.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  );
                  setSearchText("");
                  setFilteredListOfRestaurant(SearchFilteredList);
                }}
              >
                <i className="ri-search-2-line"></i>
              </button>
            </div>
          </ul>
        </div>
      </div>
      <div className="card-wrapper">
        {filteredListOfRestaurant.slice(0, displayCount).map((e) => {
          // console.log(e.length);
          return (
            <Link key={e.info?.id} to={"/restaurants/" + e.info?.id}>
              {" "}
              {e.info?.isOpen ? (
                <OpenRestaurantCard resData={e} />
              ) : (
                <Card resData={e} />
              )}
            </Link>
          );
        })}
        
      </div>
      <div className="loadmorebtn2">
        <div onClick={showLess}>
          <i class="fa-solid fa-chevron-up"></i>
        </div>
        <div onClick={loadMore}>
          <i class="fa-solid fa-chevron-down"></i>
        </div>
      </div>
    </div>
  );
};
