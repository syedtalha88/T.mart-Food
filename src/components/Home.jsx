import burger from '/images/burger.png'
import pizza from '/images/pizza.png'
import HomeImage from '/images/HomeImage.png'
import './Home.css'


const Home = ()=>{
    return(
        <div className="Home-Container">
            <div className="Home-content">
                <div className="Home-offer">
                    <span>50% Off on your first Order</span>
                </div>
                <div className="Home-heading">
                    <h3>Made with Love ,<br />Savored with Interest</h3>
                    <p>Browse out top categories here to discover different food <br />cuision.</p>
                </div>
                <div className="Home-search">
                    <div className="Home-search-icon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <input type="text" placeholder='Search'/>
                    <br /><button>Search</button>
                </div>
            </div>
            <div className="Home-image">
            <img src={HomeImage} alt="" />
            </div>
            <img src={burger} alt="" className="vert-move burg" />
            <img src={pizza} alt="" className="vert-move pizz" />
        </div>
    )
}

export default Home;