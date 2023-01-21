import UseWindowSize from "../../hooks/UseWindowSize";

const Header = () => {
  const { width } = UseWindowSize();
  return (
    <div>
      {width < 799 ? <div className="cartpage-header-container">
      <div className="cartpage-header">
                <p>
                Home/ Marketplace/
                </p>
                <p>
                Cart
                </p>
          </div>
          <div className="cart-nav">
            <div className="cartpage-header-nav">
                <button>
                Shop 
                </button>
                <button>
                Scheduled
                </button>
            </div>
          </div>
      </div> : ""}
      
    </div>
  )
}

export default Header