import image1 from "../../images/cart1.png";
import image2 from "../../images/cart2.png";
import UseWindowSize from "../../hooks/UseWindowSize";
import image3 from "../../images/cart3.png";
import Cart1 from "../../images/pcCart1.png";
import Cart2 from "../../images/pcCart2.png";
import Cart3 from "../../images/pcCart3.png";
import { useState } from "react";


const Main = ({      pricingValue,
  setPricingValue,pricing1Value,
  pricing2Value,
  setPricing1Value,
  setPricing2Value,setTotalValue,
  setCartNoValue,setGrandTotalValue,grandTotalValue, totalValue, }) => {
  const { width } = UseWindowSize();
  const [cartValue, setCartValue] = useState(1);
  const [cart1Value, setCart1Value] = useState(1);
  const [cart2Value, setCart2Value] = useState(1);

  const handleIncrease = ()=> {
    let increase = cartValue + 1
    setCartValue(increase)
    let pricing = increase * 39.50
    setPricingValue(pricing)
    handleTotal()
    handleCartAdd()
    grandTotalAdd()
  }
  const handleIncrease1 = ()=> {
    let increase = cart1Value + 1
    setCart1Value(increase)
    let pricing = increase * 39.50
    setPricing1Value(pricing)
    handleTotal()
    handleCartAdd()
    grandTotalAdd()

  }
  const handleIncrease2 = ()=> {
    let increase = cart2Value + 1
    setCart2Value(increase)
    let pricing = increase * 39.50
    setPricing2Value(pricing)
    handleTotal()
    handleCartAdd()
    grandTotalAdd()

  }
  const  grandTotalAdd = ()=> {
    let sum = totalValue + 2.5 + 39.5
    setGrandTotalValue(sum)
  }
  const  grandTotalsub = ()=> {
    let sum = totalValue + 2.5 - 39.5
    setGrandTotalValue(sum)
  }
  const handleTotal = ()=> {
    let sum = 39.5 + pricingValue  + pricing1Value + pricing2Value
    setTotalValue(sum)
    
  }
  const handleTotalX = ()=> {
    let sum = pricingValue  + pricing1Value + pricing2Value
    let final = sum -  39.5 
    setTotalValue(final)
  
  }

  const handleDecrease = ()=> {
    let decrease = cartValue - 1
    let dpricing = pricingValue - 39.50
    setPricingValue(dpricing)
    setCartValue(decrease)
    if (cartValue === 1) {
      setCartValue(1)
      setPricingValue(39.50)
    }
    handleTotalX()
    handleCartSubtract()
    grandTotalsub()
  }
  const handleDecrease1 = ()=> {
    let decrease = cart1Value - 1
    let dpricing = pricing1Value - 39.50
    setPricing1Value(dpricing)
    setCart1Value(decrease)
    if (cart1Value === 1) {
      setCart1Value(1)
      setPricing1Value(39.50)

    }
    handleTotalX()
    handleCartSubtract()
    grandTotalsub()
  }
  const handleDecrease2 = ()=> {
    let decrease = cart2Value - 1
    let dpricing = pricing2Value - 39.50
    setPricing2Value(dpricing)
    setCart2Value(decrease)
    if (cart2Value === 1) {
      setCart2Value(1)
      setPricing2Value(39.50)

    }
    handleTotalX()
    handleCartSubtract()
    grandTotalsub()
  }
  const handleCartAdd =()=> {
    let sum = cart1Value + cart2Value + cartValue
    let final = sum + 1
    setCartNoValue(final)
  }
  const handleCartSubtract =()=> {
    let sum = cart1Value + cart2Value + cartValue
    let final = sum - 1
    setCartNoValue(final)
    
  }
  return (
    <div>
        {width<799 ?
    <div>
        <div className="cartpage-main-container">
                  <div className="cartpage-image-container">
                    <img src={image1} alt="1" />
                  </div>

                  <div className="cartpage-content-container">
                      <div  className="cartpage-inner-content-container">
                            <p>
                            Editorials
                            </p>
                            <h3>
                            Philomena 
                            </h3>
                          <div className="cartpage-cart-counter">
                                <button onClick={()=>{handleDecrease()}}>
                                    <svg width="9" height="2" viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.2 1.84H8.4V0.36H0.2V1.84Z" fill="black"/>
                                    </svg>
                                </button>
                                <h3>
                                  {cartValue}
                                </h3>
                                <button onClick={()=>{handleIncrease()}}>
                                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.6 4.46V6.06H4.8V10.28H6.4V6.06H10.6V4.46H6.4V0.26H4.8V4.46H0.6Z" fill="black"/>
                                    </svg>
                                </button>
                          </div>
                      </div>
                      <div className="cartpage-pricing-container">
                        <button>
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13 13L1 1M13 1L1 13" stroke="#888888" stroke-width="2" stroke-linecap="round"/>
                          </svg>
                        </button>
                        <h3>
                        ${pricingValue}
                        </h3>
                      </div>
                  </div>
            </div>
        <div className="cartpage-main-container">
                  <div className="cartpage-image-container">
                    <img src={image2} alt="2" />
                  </div>

                  <div className="cartpage-content-container">
                      <div  className="cartpage-inner-content-container">
                            <p>
                            Editorials
                            </p>
                            <h3>
                            Warped 
                            </h3>
                          <div className="cartpage-cart-counter">
                                <button onClick={()=>{handleDecrease1()}}>
                                    <svg width="9" height="2" viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.2 1.84H8.4V0.36H0.2V1.84Z" fill="black"/>
                                    </svg>
                                </button>
                                <h3>
                                  {cart1Value}
                                </h3>
                                <button onClick={()=>{handleIncrease1()}}>
                                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.6 4.46V6.06H4.8V10.28H6.4V6.06H10.6V4.46H6.4V0.26H4.8V4.46H0.6Z" fill="black"/>
                                    </svg>
                                </button>
                          </div>
                      </div>
                      <div className="cartpage-pricing-container">
                        <button>
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13 13L1 1M13 1L1 13" stroke="#888888" stroke-width="2" stroke-linecap="round"/>
                          </svg>
                        </button>
                        <h3>
                        ${pricing1Value}
                        </h3>
                      </div>
                  </div>
            </div>
        <div className="cartpage-main-container">
                  <div className="cartpage-image-container">
                    <img src={image3} alt="3" />
                  </div>

                  <div className="cartpage-content-container">
                      <div  className="cartpage-inner-content-container">
                            <p>
                            Editorials
                            </p>
                            <h3>
                            Ellipsia
                            </h3>
                          <div className="cartpage-cart-counter">
                                <button onClick={()=>{handleDecrease2()}}>
                                    <svg width="9" height="2" viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.2 1.84H8.4V0.36H0.2V1.84Z" fill="black"/>
                                    </svg>
                                </button>
                                <h3>
                                  {cart2Value}
                                </h3>
                                <button onClick={()=>{handleIncrease2()}}>
                                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.6 4.46V6.06H4.8V10.28H6.4V6.06H10.6V4.46H6.4V0.26H4.8V4.46H0.6Z" fill="black"/>
                                    </svg>
                                </button>
                          </div>
                      </div>
                      <div className="cartpage-pricing-container">
                        <button>
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13 13L1 1M13 1L1 13" stroke="#888888" stroke-width="2" stroke-linecap="round"/>
                          </svg>
                        </button>
                        <h3>
                        ${pricing2Value}
                        </h3>
                      </div>
                  </div>
            </div>
    </div>

            : 
            <div className="pc-cartpage-container">
              <svg width="1240" height="1" viewBox="0 0 1240 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="1.31134e-08" y1="0.85" x2="1240" y2="0.850108" stroke="#747474" stroke-width="0.3"/>
              </svg>

                    <div className="pc-cart-products-container1">
                      <div className="pc-cart-container1">
                            <div className="pc-cart-img-container">
                              <img src={Cart1} alt="cart1" />
                            </div>
                            <div className="pc-cart-content-container">
                                  <h2>
                                  Philomena ‘22
                                  </h2>
                                  <h3>
                                  Clearamane
                                  </h3>
                                  <div className="pc-precart-values">
                                        <p>
                                        Size:
                                        </p>
                                        <p>
                                        200 ft
                                        </p>
                                  </div>
                                  <div className="pc-cart-values">
                                    <h2 onClick={()=> {handleDecrease()
                                    }}>
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
              <svg width="1240" height="1" viewBox="0 0 1240 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="1.31134e-08" y1="0.85" x2="1240" y2="0.850108" stroke="#747474" stroke-width="0.3"/>
              </svg>

                    <div className="pc-cart-products-container1">
                      <div className="pc-cart-container1">
                            <div className="pc-cart-img-container">
                              <img src={Cart2} alt="cart2" />
                            </div>
                            <div className="pc-cart-content-container">
                                  <h2>
                                  Philomena ‘22
                                  </h2>
                                  <h3>
                                  Clearamane
                                  </h3>
                                  <div className="pc-precart-values">
                                        <p>
                                        Size:
                                        </p>
                                        <p>
                                        200 ft
                                        </p>
                                  </div>
                                  <div className="pc-cart-values">
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
              <svg width="1240" height="1" viewBox="0 0 1240 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="1.31134e-08" y1="0.85" x2="1240" y2="0.850108" stroke="#747474" stroke-width="0.3"/>
              </svg>

                    <div className="pc-cart-products-container1">
                      <div className="pc-cart-container1">
                            <div className="pc-cart-img-container">
                              <img src={Cart3} alt="cart3" />
                            </div>
                            <div className="pc-cart-content-container">
                                  <h2>
                                  Philomena ‘22
                                  </h2>
                                  <h3>
                                  Clearamane
                                  </h3>
                                  <div className="pc-precart-values">
                                        <p>
                                        Size:
                                        </p>
                                        <p>
                                        200 ft
                                        </p>
                                  </div>
                                  <div className="pc-cart-values">
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
              <svg width="1240" height="1" viewBox="0 0 1240 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="1.31134e-08" y1="0.85" x2="1240" y2="0.850108" stroke="#747474" stroke-width="0.3"/>
              </svg>

            </div>
            }
    </div>
    
  )
}

export default Main
