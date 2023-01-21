import UseWindowSize from "../../hooks/UseWindowSize";

const Header = () => {
  const { width } = UseWindowSize();

  return (
    <div> 
          {width< 799 ? <div>
                
                <div className="mobile-drop-container">
                  <h2>
                  Upcoming drops
                  </h2>
                      <p>
                      Turn on notifications so that no drops will miss you.
                  </p>
                  <button>
                    Notify me
                  </button>
                </div>
          </div>
          : 
          <div className="pc-drop-container">
                <div className="pc-drop-header">
                    <p>
                      Home/Auctions/Live bid/
                    </p>
                    <p>
                      Drop
                    </p>
                </div>
                <div className="pc-drop-content-container">
                  <h2>
                  Upcoming drops
                  </h2>
                      <p>
                      Turn on notifications so that no drops will miss you.
                  </p>
                  <button>
                    Notify me
                  </button>
                </div>
          </div>
          }
    </div>
   
  )
}

export default Header