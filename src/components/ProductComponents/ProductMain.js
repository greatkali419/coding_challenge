import image1 from "../../images/philo.png";
import image2 from "../../images/boolean.png";
import image3 from "../../images/blanc.png";
import image4 from "../../images/ellipsia.png";
import image5 from "../../images/thelawmakers.png";
import image6 from "../../images/veil.png";
import image7 from "../../images/alternating.png";
import image8 from "../../images/rosemary.png";
import image9 from "../../images/beverly.png";
import mobileimage1 from "../../images/mobileBooleanPhilo.png";
import mobileimage2 from "../../images/Roadtoegypt.png";
import mobileimage3 from "../../images/blancMobile.png";
import mobileimage4 from "../../images/ellipsiaMobile.png";
import mobileimage5 from "../../images/lawmakersMobile.png";
import filter from "../../images/filter.svg";
import dropdown from "../../images/productdropdown.svg";
import dropdown2 from "../../images/dropupPc.svg";
import { Link } from 'react-router-dom';
import UseWindowSize from "../../hooks/UseWindowSize";

const ProductMain = () => {
  const { width } = UseWindowSize();

  return (
    <div className="pc-product-container">
      {width < 769 ?
       <div className="product-main-nav">
          <button className="productButton">
              <h1>
              Filters
              </h1>
              <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.0283 0.156939L6.99938 5.73587L0.970513 0.156939C0.862797 0.057061 0.718197 0.00114502 0.567624 0.00114502C0.41705 0.00114502 0.27245 0.057061 0.164734 0.156939C0.112578 0.205451 0.0711434 0.263353 0.0428567 0.327257C0.01457 0.391161 0 0.45978 0 0.529097C0 0.598413 0.01457 0.667032 0.0428567 0.730936C0.0711434 0.794839 0.112578 0.852743 0.164734 0.901254L6.5784 6.83745C6.69103 6.94167 6.8421 7 6.99938 7C7.15667 7 7.30773 6.94167 7.42037 6.83745L13.834 0.902399C13.8866 0.853852 13.9283 0.795806 13.9568 0.731691C13.9853 0.667575 14 0.598689 14 0.529097C14 0.459504 13.9853 0.390617 13.9568 0.326502C13.9283 0.262386 13.8866 0.204342 13.834 0.155794C13.7263 0.0559155 13.5817 0 13.4311 0C13.2806 0 13.136 0.0559155 13.0283 0.155794V0.156939Z" fill="black"/>
              </svg>

          </button>
         
          <button className="productButton">
              <h1>
              Sort by
              </h1>
              <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.0283 0.156939L6.99938 5.73587L0.970513 0.156939C0.862797 0.057061 0.718197 0.00114502 0.567624 0.00114502C0.41705 0.00114502 0.27245 0.057061 0.164734 0.156939C0.112578 0.205451 0.0711434 0.263353 0.0428567 0.327257C0.01457 0.391161 0 0.45978 0 0.529097C0 0.598413 0.01457 0.667032 0.0428567 0.730936C0.0711434 0.794839 0.112578 0.852743 0.164734 0.901254L6.5784 6.83745C6.69103 6.94167 6.8421 7 6.99938 7C7.15667 7 7.30773 6.94167 7.42037 6.83745L13.834 0.902399C13.8866 0.853852 13.9283 0.795806 13.9568 0.731691C13.9853 0.667575 14 0.598689 14 0.529097C14 0.459504 13.9853 0.390617 13.9568 0.326502C13.9283 0.262386 13.8866 0.204342 13.834 0.155794C13.7263 0.0559155 13.5817 0 13.4311 0C13.2806 0 13.136 0.0559155 13.0283 0.155794V0.156939Z" fill="black"/>
              </svg>

          </button>
         
        </div>
        :
      <div className="pc-product-main-container">
        <div className="pc-filter-container">
          <img src={filter} alt="filter" />
          <h2>
            Filter
          </h2>
        </div>
        <div className="pc-category-container">
        <h3>
          By category
        </h3>
        {/* <img src={dropdown} alt="dropdown" /> */}
        <img src={dropdown2} alt="dropdown" />
        </div>
        <ul className="pc-category-content-container">
          <li><input type="checkbox" checked  /> Editorials</li>
          <li><input type="checkbox" checked  /> Fashion</li>
          <li><input type="checkbox" /> Optics</li>
          <li><input type="checkbox" /> Art & Museum</li>
          <li><input type="checkbox"/> Nature</li>
        </ul>
        <div className="pc-category-container">
        <h3>
          By price
        </h3>
          {/* <img src={dropdown} alt="dropdown" /> */}
          <img src={dropdown2} alt="dropdown" />
        </div>
        <div className="pc-category-container1">
          <p>
            $100.00 - $150.00
          </p>
        </div>
        <div className="pc-category-container">
        <h3>
          By artist
        </h3>
          {/* <img src={dropdown} alt="dropdown" /> */}
          <img src={dropdown2} alt="dropdown" />
        </div>
        <div className="pc-category-container1">
          <h4>
            All
          </h4>
          <p>
             Below $100.00
          </p>
          <p>
            $100.00 - $150.00
          </p>
          <p>
            $150.00 - $200.00
          </p>
          <p>
            Above - $200.00
          </p>
        </div>
        <div className="pc-category-container">
        <h3>
          Collection year
        </h3>
          <img src={dropdown} alt="dropdown" />
        </div>
      </div>}
    {width < 769 ? 
     <div className="products-main-container1">
        <Link to="/products/page">

        <div className="product">
          
        <img src={mobileimage1} alt="1" />

          <div className="product-desc-container">
              <p>
                BOOLEAN EGYPTIAN
              </p>
              <p>
              $21.00
              </p>
          </div>
        </div>
        </Link>

        <div className="product">
          <img src={mobileimage2} alt="2" />
          <div  className="product-desc-container">
              <p>
                ROAD TO EGYPT
              </p>
              <p>
              $11.00
              </p>
          </div>
        </div>
        <div className="product">
          <img src={mobileimage3} alt="3" />
          <div  className="product-desc-container">
              <p>
              BLANC
              </p>
              <p>
              $11.00
              </p>
          </div>
        </div>
        <div className="product">
          <img src={mobileimage4} alt="4" />
          <div className="product-desc-container">
              <p>
              ELLIPSIA
              </p>
              <p>
              $11.00
              </p>
          </div>
        </div>
        <div className="product">
          <img src={mobileimage5} alt="5" />
          <div className="product-desc-container">
              <p>
              THE LAWMAKERS
              </p>
              <p>
              $11.00
              </p>
          </div>
        </div>
      </div>
      :
      <div className="pc-product-main2-container">
        <div className="pc-product-grid1">
          <img src={image1} alt="philo" />
          <p>
            PHILOMENA '22
          </p>
          <p>
            $3.90
          </p>
        </div>
        <div className="pc-product-grid1">
          <Link to="/products/page">
          <img src={image2} alt="boolean" />
          <p>
            BOOLEAN EGYPTIAN
          </p>
          <p>
            $3.90
          </p>
          </Link>
        </div>
        <div className="pc-product-grid1">
        <img src={image3} alt="blanc" />
          <p>
            BLANC
          </p>
          <p>
            $3.90
          </p>
        </div>
        <div className="pc-product-grid1">
        <img src={image4} alt="ellipsia" />
          <p>
            ELLIPSIA
          </p>
          <p>
            $3.90
          </p>
        </div>
        <div className="pc-product-grid1">
        <img src={image5} alt="law makers" />
          <p>
            THE LAWMAKERS
          </p>
          <p>
            $3.90
          </p>
        </div>
        <div className="pc-product-grid1">
        <img src={image6} alt="veil" />
          <p>
            VEIL
          </p>
          <p>
            $3.90
          </p>
        </div>
        <div className="pc-product-grid1">
        <img src={image7} alt="alternating" />
          <p>
            ALTERNATING 
          </p>
          <p>
            $3.90
          </p>
        </div>
        <div className="pc-product-grid1">
        <img src={image8} alt="rosemary" />
          <p>
            ROSEMARY
          </p>
          <p>
            $3.90
          </p>
        </div>
        <div className="pc-product-grid1">
        <img src={image9} alt="beverly" />
          <p>
            BEVERLY
          </p>
          <p>
            $3.90
          </p>
        </div>
      </div>}
    </div>
  )
}

export default ProductMain