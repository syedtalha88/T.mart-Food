import "./Feature.css";

const Features = () => {
  return (
    <div>
      <div className="Features-section">
        <div className="Features-Container">
          <div className="Features-card">
            <div className="Features-icon">
              <i class="fa-solid fa-route"></i>
            </div>
            <div className="Features-content">
              <h3>Wide Map</h3>
              <p>Wide Range of Map, Orfer from anywhere anytime</p>
            </div>
          </div>
          <div className="Features-card">
            <div className="Features-icon">
              <i class="fa-solid fa-box-open"></i>
            </div>
            <div className="Features-content">
              <h3>Easiest Order</h3>
              <p>Easy and hussle free order online process</p>
            </div>
          </div>
          <div className="Features-card">
            <div className="Features-icon">
              <i class="fa-solid fa-truck-fast"></i>
            </div>
            <div className="Features-content">
              <h3>Fast Delivery</h3>
              <p>we ensure your food is delivered swiftly</p>
            </div>
          </div>
          <div className="Features-card">
            <div className="Features-icon">
              <i class="fa-solid fa-credit-card"></i>
            </div>
            <div className="Features-content">
              <h3>Various Payment</h3>
              <p>Various payment options to make order seamless</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
