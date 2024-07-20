import './Categories.css'

const CategoriesCard =(props)=>{
    const {catData}=props;
    const image=catData?.imageId || {};
    // console.log(catData+"thiws is data inside categroy")
    return(
        <div className="Category-image">
            <div className="Category-image-wrapper">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+image} alt="" />
            </div>
        </div>
    )
}

export default CategoriesCard;