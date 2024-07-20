import { useState,useEffect} from "react";
import CategoriesCard from "./CategoriesCard";
import { CDN_URL } from "../utils/constants";
import './Categories.css'
import resList from "../utils/mockData";

const Categories =()=>{
    const [listOfCategory, setListOfCategory] = useState([]);
    const [displayCount, setDisplayCount] = useState(4);

    const fetchData = async () => {
        const data = await fetch(CDN_URL);
        const json1 = await data.json();
        // console.log("info"+infoData);
    } 
    useEffect(() => {
        setListOfCategory(resList?.data?.cards[0]?.card?.card?.imageGridCards?.info);
        
    }, []);

    console.log(" this is outside "+listOfCategory );
    const loadMore = () => {
        setDisplayCount((prev)=>prev+4);
    };
    const showLess = () => {
        setDisplayCount(4);
    };
    return(
        <div>
            
            <div className="Categories-Container">
                <div className="Categories-heading">
                    <h1>Categories</h1>
                    <p>Browse the top categories here to discover different food cuisines</p>
                </div>
                <div className="Categories-cards">
                    {
                        // slice(0,displayCount).
                       listOfCategory ? listOfCategory.slice(0,displayCount).map((category,key)=>(
                            
                                <CategoriesCard catData={category} key={category.id} />
                            
                    )) : <h1>no cards to display</h1>
                    }
                    
                </div>
                <div className="loadmorebtn">
                    <div onClick={showLess}><i className="fa-solid fa-chevron-up"></i></div>
                    <div onClick={loadMore}><i className="fa-solid fa-chevron-down"></i></div>
                </div>
            </div>
        </div>
    )
}

export default Categories;