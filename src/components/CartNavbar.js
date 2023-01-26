import { Link } from 'react-router-dom';
import UseWindowSize from "../hooks/UseWindowSize";
import { useState } from "react";

const CartNavbar = () => {
  const { width } = UseWindowSize();
  const [cartColor, setCartColor] = useState();
  const [shippingColor, setShippingColor] = useState();
  const [paymentColor, setPaymentColor] = useState();
  const [cartLine, setCartLine] = useState();
  const [shippingLine, setShippingLine] = useState();
  const [paymentLine, setPaymentLine] = useState();

  const handleCartLink = ()=> {
    setCartColor('#292929')
    setCartLine('2px solid #2F4333')
    setShippingColor('')
    setShippingLine('')
    setPaymentColor('')
    setPaymentLine('')
  }
  const handleShippingLink = ()=> {
    setShippingColor('#292929')
    setShippingLine('2px solid #2F4333')
    setCartColor('#888888')
    setCartLine('none')    
    setPaymentColor('')
    setPaymentLine('')
  }
  const handlePaymentLink = ()=> {
    setPaymentColor('#292929')
    setPaymentLine('2px solid #2F4333')
    setShippingColor('')
    setShippingLine('')
    setCartColor('#888888')
    setCartLine('none')      
  }

  return (
    <div>
      {width<799 ? "" : 
      <div className='pc-cart-nav-container'>
        <div className='pc-cart-nav'>
        <Link to="/coding_challenge/products/cart">
          <p
          onClick={handleCartLink} 
          style={{ color: cartColor, borderBottom: cartLine}}>
          Shopping cart
          </p>
          </Link>

          <Link to="/coding_challenge/products/cart/shipping">
          <p 
          onClick={handleShippingLink} 
          style={{ color: shippingColor, borderBottom: shippingLine}}
          >
          Shipping details
          </p>
          </Link>

          <Link to="/coding_challenge/products/cart/payment">
          <p 
          onClick={handlePaymentLink} 
          style={{ color: paymentColor, borderBottom: paymentLine}}
          >
          Payment details
          </p>
          </Link>

        </div>
        <div className='pc-cart-line-container'>
            <svg width="650" height="1" viewBox="0 0 650 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.75" x2="650" y2="0.75" stroke="#747474" stroke-width="0.5"/>
            </svg>
        </div>

      </div>}

    </div>
  )
}

export default CartNavbar