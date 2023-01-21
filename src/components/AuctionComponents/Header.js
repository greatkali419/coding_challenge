import UseWindowSize from "../../hooks/UseWindowSize";

const Header = () => {
  const { width } = UseWindowSize();

  return (
    <div>
      {width < 799 ?
       <div className="auction-subheader-container">
            <p>
            Here’s an overview of products actively on auction, explore!
            </p>
      </div> 
      : 
      <div className="pc-auction-header-container">
          <div className="pc-auction-header1">
              <p>
                Home/
              </p>
              <p>
                Auctions
              </p>
          </div>
          <div className="pc-auction-subheader-container">
              <p>
              Here’s an overview of products actively on auction, explore!
              </p>
          </div> 
      </div>}
      
    </div>
  )
}

export default Header