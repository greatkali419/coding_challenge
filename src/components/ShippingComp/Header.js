import UseWindowSize from "../../hooks/UseWindowSize";

const Header = () => {
  const { width } = UseWindowSize();
  return (
    <div>
      {width <799 ? <div className="shipping-header-container">
        <p>
        Home/ Marketplace/ Cart/
        </p>
        <p>
        Shipping
        </p>
      </div>
    :
    ""  
    }
      
    </div>
  )
}

export default Header