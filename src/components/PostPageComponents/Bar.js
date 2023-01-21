import UseWindowSize from "../../hooks/UseWindowSize";
import LD from "../../images/bar=.svg";
import GD from "../../images/bar++.svg";

const Bar = () => {
  const { width } = UseWindowSize();

  return (
    <div>
      {width < 769 ? "" : 
      <div className="pc-postpage-bar-container">
      <div className="pc-postpage-bar-header">
        <h3>
          Explore more from this collection
        </h3>
      </div>
      <div className="pc-postpage-bar-button-container">
       <button>
        <img src={LD} alt="ld" />
       </button>
       <button>
        <img src={GD} alt="ld" />
       </button>
      </div>
      </div>
      }
    </div>
  )
}

export default Bar