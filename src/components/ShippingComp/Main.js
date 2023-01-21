import { Link } from 'react-router-dom';
import UseWindowSize from "../../hooks/UseWindowSize";
import Cart1 from "../../images/shipp1.png";
import Cart2 from "../../images/shipp2.png";
import Cart3 from "../../images/shipp3.png";

const Main = ({ 
  cart1Value,
  cart2Value,
  cartValue,
  cartNoValue,
  totalValue,
  pricingValue,
  pricing1Value,
  pricing2Value,
  handleDecrease,
  handleDecrease1,
  handleDecrease2,
  handleIncrease,
  handleIncrease1,
  handleIncrease2}) => {
    
  const { width } = UseWindowSize();
  return (
    <div>
     {width < 799 ? <div>
          <form action="#" className="shipping-form-container">
            <div className="first-form-container">
              <label htmlFor="email">
                Your email
              </label>
              <input type="text" placeholder="aanuoluwateenah@gmail.com" />
              <ul className="shippinglist-container">
                <li>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="16" height="16" rx="5" fill="#D9D9D9"/>
                </svg>

                Get updates about new drops & exclusive offers
                </li>
              </ul>
            </div>
            <div className="first-form-container">
              <label htmlFor="wallet">
                Choose a wallet
                </label>
                <div className="dropdown-input-container">
                  <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L8 7L15 1" stroke="#747474" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
            </div>
            <div className="first-form-container">
              <label htmlFor="wallet">
                City
                </label>
                <div className="dropdown-input-container">
                  <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L8 7L15 1" stroke="#747474" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
            </div>
            <div className="first-form-container">
              <label htmlFor="wallet">
                Country
                </label>
                <div className="dropdown-input-container">
                  <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L8 7L15 1" stroke="#747474" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
            </div>
            <div className="first-form-container">
              <label htmlFor="email">
              Postal code 
              </label>
              <input type="text" />
            </div>
            <div className="first-form-container">
              <label htmlFor="email">
                Phone number
              </label>
              <input type="text" />
            </div>
          </form>
          <div className="shipping-button-container">
            <button>
            <Link to="/products/cart/payment">
            Proceed to payment
            </Link>
            </button>
            <p>
              <Link to="/products/cart">
                Go back to cart 
              </Link>
            </p>
          </div>
      </div>
      :
      <div className='pc-shipping-payment-container'>
        <div className='pc-shipping-form-container'>
          <form action="#">
            <div className='pc-shipping-input1'>
              <label htmlFor="email">
              Your email
              </label>
              <input type="text" placeholder='aanuoluwateenah@gmail.com' />
              <ul className='pc-shipping-checkbox-container'>
              <li><input type="checkbox" /> Get updates about new drops & exclusive offers</li>
              </ul>
            </div>
            <div className='pc-shipping-input2'>
              <label htmlFor="name" placeholder='Anuoluwapo Bamisaye'>
              Your full name
              </label>
              <input type="text" />
            </div>
            <div className='pc-shipping-input3'>
              <label htmlFor="wallet">
              Choose a wallet
              </label>
              <div className='input'>
              <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L12 11L23 1" stroke="#747474" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </div>
            </div>
            <div className='pc-shipping-input4'>
              <label htmlFor="city">
              City
              </label>
              <div className='input'>
              <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L12 11L23 1" stroke="#747474" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </div>
            </div>
            <div className='pc-form-flex'>
                <div className='pc-shipping-input5'>
                  <label htmlFor="country">
                  Country
                  </label>
                  <div className='input'>
                  <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L12 11L23 1" stroke="#747474" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  </div>
                </div>
                <div className='pc-shipping-input6'>
                  <label htmlFor="postalCode">
                  Postal code
                  </label>
                  <input type="text" placeholder='001001' />
                </div>
            </div>
            
            <div className='pc-shipping-input7'>
              <label htmlFor="phoneNo">
              Phone number
              </label>
              <input type="text" placeholder='0812 3456 785'/>
            </div>
            <div className='pc-shipping-form-button'>
             <Link to="/products/cart/payment">
              <button>
              Proceed to payment
              </button>
              </Link>
            </div>
            
          </form>
        </div>

        
        <div className='pc-shipping-cartpage-container'>
          <div className="pc-cartpage-container">

            <svg width="525" height="1" viewBox="0 0 525 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1.31134e-08" y1="0.85" x2="525" y2="0.850046" stroke="#747474" stroke-width="0.3"/>
            </svg>

                    <div className="pc-cart-products-container1">
                      <div className="pc-cart-container1">
                            <div className="pc-cart-img-container">
                              <img src={Cart1} alt="cart1" />
                            </div>
                            <div className="pc-cart-content-container-p">
                                  <h2>
                                  Philomena ‘22
                                  </h2>
                                  <h3>
                                  Clearamane
                                  </h3>
                                  <div className="pc-precart-values-p">
                                        <p>
                                        Size:
                                        </p>
                                        <p>
                                        200 ft
                                        </p>
                                  </div>
                                  <div className="pc-cart-values-p">
                                    <h2 onClick={()=> {handleDecrease()}}>
                                      -
                                    </h2>
                                    <h2>
                                    {cartValue}
                                    </h2>
                                    <h2 onClick={()=> {handleIncrease()}}>
                                      +
                                    </h2>
                                  </div>
                                  </div>
                            </div>
                            <div className="pc-cart-container2">
                                  <button>
                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.8306 13L1.83057 1M13.8306 1L1.83057 13" stroke="#888888" stroke-width="2" stroke-linecap="round"/>
                                    </svg>
                                  </button>
                                  <h2>
                                  ${pricingValue}
                                  </h2>
                            </div>
              </div>
              <svg width="525" height="1" viewBox="0 0 525 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="1.31134e-08" y1="0.85" x2="525" y2="0.850046" stroke="#747474" stroke-width="0.3"/>
              </svg>

                    <div className="pc-cart-products-container1">
                      <div className="pc-cart-container1">
                            <div className="pc-cart-img-container">
                              <img src={Cart2} alt="cart2" />
                            </div>
                            <div className="pc-cart-content-container-p">
                                  <h2>
                                  Philomena ‘22
                                  </h2>
                                  <h3>
                                  Clearamane
                                  </h3>
                                  <div className="pc-precart-values-p">
                                        <p>
                                        Size:
                                        </p>
                                        <p>
                                        200 ft
                                        </p>
                                  </div>
                                  <div className="pc-cart-values-p">
                                    <h2 onClick={()=> {handleDecrease1()}}>
                                      -
                                    </h2>
                                    <h2>
                                    {cart1Value}
                                    </h2>
                                    <h2 onClick={()=> {handleIncrease1()}}>
                                      +
                                    </h2>
                                  </div>
                                  </div>
                            </div>
                            <div className="pc-cart-container2">
                                  <button>
                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.8306 13L1.83057 1M13.8306 1L1.83057 13" stroke="#888888" stroke-width="2" stroke-linecap="round"/>
                                    </svg>
                                  </button>
                                  <h2>
                                  ${pricing1Value}
                                  </h2>
                            </div>
              </div>
              <svg width="525" height="1" viewBox="0 0 525 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="1.31134e-08" y1="0.85" x2="525" y2="0.850046" stroke="#747474" stroke-width="0.3"/>
              </svg>

                    <div className="pc-cart-products-container1">
                      <div className="pc-cart-container1">
                            <div className="pc-cart-img-container">
                              <img src={Cart3} alt="cart3" />
                            </div>
                            <div className="pc-cart-content-container-p">
                                  <h2>
                                  Philomena ‘22
                                  </h2>
                                  <h3>
                                  Clearamane
                                  </h3>
                                  <div className="pc-precart-values-p">
                                        <p>
                                        Size:
                                        </p>
                                        <p>
                                        200 ft
                                        </p>
                                  </div>
                                  <div className="pc-cart-values-p">
                                    <h2 onClick={()=> {handleDecrease2()}}>
                                      -
                                    </h2>
                                    <h2>
                                    {cart2Value}
                                    </h2>
                                    <h2 onClick={()=> {handleIncrease2()}}>
                                      +
                                    </h2>
                                  </div>
                                  </div>
                            </div>
                            <div className="pc-cart-container2">
                                  <button>
                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.8306 13L1.83057 1M13.8306 1L1.83057 13" stroke="#888888" stroke-width="2" stroke-linecap="round"/>
                                    </svg>
                                  </button>
                                  <h2>
                                  ${pricing2Value}
                                  </h2>
                            </div>
              </div>
              <svg width="525" height="1" viewBox="0 0 525 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="1.31134e-08" y1="0.85" x2="525" y2="0.850046" stroke="#747474" stroke-width="0.3"/>
              </svg>

            </div>
            <div className='pc-pricing-content-container-p'>
            <div className='pc-pricing-content1'>
              <p>
              Products in cart : 
              </p>
              <p>
              Shipping : 
              </p>
              <p>
              Total :
              </p>
            </div>
            <div className='pc-pricing-content2'>
              <p>
             {cartNoValue} items
              </p>
              <p>
              $2.50
              </p>
              <p>
              ${totalValue}
              </p>
            </div>
        </div>
        </div>

      </div>  
      }
    
    </div>
  )
}

export default Main