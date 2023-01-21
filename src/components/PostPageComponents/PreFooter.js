import UseWindowSize from "../../hooks/UseWindowSize";
import { Link } from "react-router-dom";

const PreFooter = () => {
  const { width } = UseWindowSize();

  return (
    <div className="pc-postpage-footer">{width < 769 ? "" :
      <Link to='/products/cart'>
      <button>
        Explore all
      </button>
      </Link>      
      }
    </div>
  )
}

export default PreFooter