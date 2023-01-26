import image1 from "../../images/productpagehero.png";
import mobileimage1 from "../../images/mobileBooleanPhilo.png";
import diamond from "../../images/diamond.svg";
import plus from "../../images/+.svg";
import minus from "../../images/minus.svg";
import whiteHeart from "../../images/whiteHrt.svg";
import arrow from "../../images/+cart.svg";
import dropdown from "../../images/dropdown.svg";
import UseWindowSize from "../../hooks/UseWindowSize";
import { useState } from "react";
import { Link } from "react-router-dom";

const PostPageMain = () => {
  const { width } = UseWindowSize();
  const [cartValue, setCartValue] = useState(1);

  const handleIncrease = ()=> {
    let increase = cartValue + 1
    setCartValue(increase)
  }

  const handleDecrease = ()=> {
    let decrease = cartValue - 1
    setCartValue(decrease)
    if (cartValue === 1) {
      setCartValue(1)
    }
  }
  return (
  <div>  
    {width<799 ?
     <div className="postpage-container">
          <div className="postpage-container2">
                <div className="mobilepostpage-image-container">
                  <img src={mobileimage1} alt="1" />
                  <div className="postpage-desc-container">
                  <p>
                    BOOLEAN EGYPTIAN
                  </p>
                  <p>
                  $21.00
                  </p>
                  </div>
                </div>
           
           <div>
             
          </div>
          <div className="postpage-product-content-container">
            <div className="postpage-creator-container">
              <p>Creator : </p>
              <p className="postppage-creator-name">
              Ali Dawa
              </p>
            </div>
           
            <p>
              Made in Italy
            </p>
            <p>
            Total views: 1.7kviews
            </p>
           
           <div className="cart-counter">
            <button onClick={()=>{handleDecrease()}}>
            <img src={minus} alt="minus" />
            </button>
           <h2>
               {cartValue}
            </h2>
            <button onClick={()=>{handleIncrease()}}>
            <img src={plus} alt="plus" />
            </button>
           </div>
            <div className="postpage-button-container">
            <Link to='/products/cart'>
            <button>
              add to cart 
            </button>
            </Link>
            <button>
                <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.575 0C17.226 0 14.9715 1.10354 13.5 2.84741C12.0285 1.10354 9.774 0 7.425 0C3.267 0 0 3.297 0 7.49319C0 12.6431 4.59 16.8392 11.5425 23.2153L13.5 25L15.4575 23.2016C22.41 16.8392 27 12.6431 27 7.49319C27 3.297 23.733 0 19.575 0ZM13.635 21.1853L13.5 21.3215L13.365 21.1853C6.939 15.3134 2.7 11.4305 2.7 7.49319C2.7 4.76839 4.725 2.7248 7.425 2.7248C9.504 2.7248 11.529 4.07357 12.2445 5.94005H14.769C15.471 4.07357 17.496 2.7248 19.575 2.7248C22.275 2.7248 24.3 4.76839 24.3 7.49319C24.3 11.4305 20.061 15.3134 13.635 21.1853Z" fill="#292929"/>
                  </svg>
            </button>
            </div>
          </div>
          <div className="presassy-container">
              <div className="borderline">
                  <svg width="398" height="1" viewBox="0 0 398 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line y1="0.75" x2="398" y2="0.75" stroke="#333333" stroke-width="0.5"/>
                  </svg>

                </div>
              <div className=" presassy-dropdrop-container">
                <h3>
                Description
                </h3>
                 <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.352185 0.344159C0.577756 0.123794 0.883656 0 1.20262 0C1.52157 0 1.82747 0.123794 2.05305 0.344159L8.00726 6.16269L13.9615 0.344159C14.1883 0.130039 14.4922 0.0115592 14.8076 0.0142373C15.123 0.0169155 15.4247 0.140538 15.6477 0.358478C15.8707 0.576418 15.9972 0.871238 16 1.17944C16.0027 1.48764 15.8815 1.78457 15.6623 2.00626L8.85769 8.65584C8.63212 8.87621 8.32622 9 8.00726 9C7.6883 9 7.3824 8.87621 7.15683 8.65584L0.352185 2.00626C0.126681 1.78583 0 1.4869 0 1.17521C0 0.863519 0.126681 0.564591 0.352185 0.344159Z" fill="#2F2F2F"/>
                </svg>
                

              </div>
                  <div className="borderline">
                  <svg width="398" height="1" viewBox="0 0 398 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line y1="0.75" x2="398" y2="0.75" stroke="#333333" stroke-width="0.5"/>
                  </svg>

                  </div>
              <div className=" presassy-dropdrop-container">
                <h3>
                Listings
                </h3>
                <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.352185 0.344159C0.577756 0.123794 0.883656 0 1.20262 0C1.52157 0 1.82747 0.123794 2.05305 0.344159L8.00726 6.16269L13.9615 0.344159C14.1883 0.130039 14.4922 0.0115592 14.8076 0.0142373C15.123 0.0169155 15.4247 0.140538 15.6477 0.358478C15.8707 0.576418 15.9972 0.871238 16 1.17944C16.0027 1.48764 15.8815 1.78457 15.6623 2.00626L8.85769 8.65584C8.63212 8.87621 8.32622 9 8.00726 9C7.6883 9 7.3824 8.87621 7.15683 8.65584L0.352185 2.00626C0.126681 1.78583 0 1.4869 0 1.17521C0 0.863519 0.126681 0.564591 0.352185 0.344159Z" fill="#2F2F2F"/>
                </svg>
                
              </div>
                  <div className="borderline">
                  <svg width="398" height="1" viewBox="0 0 398 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line y1="0.75" x2="398" y2="0.75" stroke="#333333" stroke-width="0.5"/>
                  </svg>

                  </div>
              <div className=" presassy-dropdrop-container">
                <h3>
                Status
                </h3>
                <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.352185 0.344159C0.577756 0.123794 0.883656 0 1.20262 0C1.52157 0 1.82747 0.123794 2.05305 0.344159L8.00726 6.16269L13.9615 0.344159C14.1883 0.130039 14.4922 0.0115592 14.8076 0.0142373C15.123 0.0169155 15.4247 0.140538 15.6477 0.358478C15.8707 0.576418 15.9972 0.871238 16 1.17944C16.0027 1.48764 15.8815 1.78457 15.6623 2.00626L8.85769 8.65584C8.63212 8.87621 8.32622 9 8.00726 9C7.6883 9 7.3824 8.87621 7.15683 8.65584L0.352185 2.00626C0.126681 1.78583 0 1.4869 0 1.17521C0 0.863519 0.126681 0.564591 0.352185 0.344159Z" fill="#2F2F2F"/>
                </svg>
                
              </div>
              <div className="borderline">
              <svg width="398" height="1" viewBox="0 0 398 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.75" x2="398" y2="0.75" stroke="#333333" stroke-width="0.5"/>
              </svg>

              </div>
          </div>
          
      </div>
    </div>
:
    <div className="pc-postpage-main-container">
            <div className="pc-postpage-image-container">
                <img src={image1} alt="1"/>    
            </div>
            <div>
            <svg width="1" height="1020" viewBox="0 0 1 1020" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.5" y1="1020" x2="0.500045" y2="-2.18557e-08" stroke="#333333"/>
            </svg>

            </div>
      <div className="pc-postpage-content">
             <div className="pc-postpage-content-header">
                <h2>
                Boolean Egyptian
                </h2>
                <div className="pc-postpage-content-header1">
                    <img src={diamond} alt="diamond" />
                    <h2>
                      0.09
                    </h2>
                </div>
              </div>
              <svg width="628" height="1" viewBox="0 0 628 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="4.37114e-08" y1="0.5" x2="628" y2="0.500055" stroke="#333333"/>
              </svg>
              <div className="pc-postpage-content-main1">
                <p>
                Creator :
                </p>
                <p>
                Ali Dawa
                </p>
              </div>
              <div className="pc-postpage-content-main2">
                  <p>
                  Made in Italy
                  </p>
                  <h2>
                  Total views: 1.7K views
                  </h2>
              </div>
              <div className="pc-postpage-content-main3">
                <button  onClick={()=>{handleDecrease()}}>
                  <img src={minus} alt="minus" />
                </button>
                <h2>
                {cartValue}
                </h2>
                <button  onClick={()=>{handleIncrease()}}>
                <img src={plus} alt="plus" />
                </button>
              </div>
              <div className="pc-postpage-content-main4">
              <Link to='/products/cart'>
                <button>
                Add to cart
                <img src={arrow} alt="arrow" />
                </button>
              </Link>
                <button>
                <img src={whiteHeart} alt="hrt1" />
                </button>
              </div>
              <svg width="628" height="1" viewBox="0 0 628 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="4.37114e-08" y1="0.5" x2="628" y2="0.500055" stroke="#333333"/>
              </svg>
              <div className="pc-postpage-content-main5">
                    <div className="pc-postpage-content-main-1">
                      <h2>
                      Description
                      </h2>
                      <button>
                        <img src={dropdown} alt="dropdown" />
                      </button>
                    </div>
                    <svg width="628" height="1" viewBox="0 0 628 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="4.37114e-08" y1="0.5" x2="628" y2="0.500055" stroke="#333333"/>
              </svg>
                    <div className="pc-postpage-content-main-1">
                      <h2>
                      Listings
                      </h2>
                      <button>
                      <img src={dropdown} alt="dropdown" />
                      </button>
                    </div>
                    <svg width="628" height="1" viewBox="0 0 628 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="4.37114e-08" y1="0.5" x2="628" y2="0.500055" stroke="#333333"/>
              </svg>
                    <div className="pc-postpage-content-main-1">
                      <h2>
                      Status
                      </h2>
                      <button>
                      <img src={dropdown} alt="dropdown" />
                      </button>
                    </div>
              </div>
      </div>
            
                
    </div>}
  </div>  
  )
}


export default PostPageMain