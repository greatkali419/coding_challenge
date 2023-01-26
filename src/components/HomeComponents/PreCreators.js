import image1 from "../../images/precreatorarrow.svg";
import image2 from "../../images/Arrow.svg";
import UseWindowSize from "../../hooks/UseWindowSize";
import { Link } from "react-router-dom";


const PreCreators = () => {
  const { width } = UseWindowSize();

  return (
    <div >
        {width<799 ? <div className="precreator-container">
            <div>
                <h2>
                Explore marketplace
                </h2>
                <Link to='/coding_challenge/products'>
                <button>
                    <img src={image1} alt="1" />
                </button>
                </Link>

            </div>
            <div>
                  <h2>
                  See auctions
                  </h2>
                  <Link to='/coding_challenge/auctions'>
                  <button>
                      <img src={image1} alt="1" />
                  </button>
                  </Link>
            </div>
          </div>
          :
        <div className="pc-precreator-container ">
            <div className="center">
                <h2>
                Explore marketplace
                </h2>
                <Link to='/coding_challenge/products'>
                <button>
                    <img src={image2} alt="1" />
                </button>
                </Link>
            </div>
            <div className="center">
                  <h2>
                  See auctions
                  </h2>
                  <Link to='/coding_challenge/auctions'>
                  <button>
                      <img src={image2} alt="1" />
                  </button>
                </Link>          
            </div>
        </div>
        }
    </div>
      
  )
}

export default PreCreators