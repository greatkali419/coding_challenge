import image1 from "../../images/Auction1.png";
import image2 from "../../images/Auctions2.png";
import image3 from "../../images/Auctions3.png";
import { Link } from 'react-router-dom';
import UseWindowSize from "../../hooks/UseWindowSize";

const SectionOne = () => {
  const { width } = UseWindowSize();

  return (
    <div>
      {width < 769 
      ? 
      <div className="sectionOne-container">
        <div className="auction-button-container">
            <button>
                <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.04693 4.81002L5.26855 1.5884L4.34828 0.668121L0.206373 4.81002L4.34828 8.95193L5.26855 8.03165L2.04693 4.81002Z" fill="white"/>
                </svg>
            </button>
            <button>
                <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.57281 4.80908L0.351562 1.58783L1.27173 0.667664L5.41315 4.80908L1.27173 8.9505L0.351562 8.03033L3.57281 4.80908Z" fill="white"/>
                </svg>
            </button>
    </div>
        <div className="carousel-container">
         
          <div className="auction-content-container1">
             <Link to="/live">
            <button>
              6hr : 40mins: 15s
            </button>
            </Link>
          </div>
          <div className="auction-content-container2">
            <button>
              6hr : 40mins:
            </button>
        </div>
        </div>

        
      </div> 
      : <div className="pc-auction-carousel-container-grid">
            <div className="pc-auction-carousel-grid">
                <button>
                <Link to="/live">

                6hr : 40mins: 15s
                </Link>
                </button>

            </div>
            <div className="pc-auction-carousel-grid1">
                <button>
                6hr : 40mins: 15s
                </button>
            </div>
            <div className="pc-auction-carousel-grid2">
                <button>
                6hr : 40mins:
                </button>
            </div>
      </div>}
    </div>
  )
}

export default SectionOne