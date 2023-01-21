import Header from "../components/ShippingComp/Header";
import Main from "../components/ShippingComp/Main";
import { useState } from "react";
import {motion } from "framer-motion";

const Shipping = () => {
  const [cartValue, setCartValue] = useState(1);
  const [cart1Value, setCart1Value] = useState(1);
  const [cart2Value, setCart2Value] = useState(1);
  const [cartNoValue, setCartNoValue] = useState(3);
  const [pricingValue, setPricingValue] = useState(39.50)
  const [pricing1Value, setPricing1Value] = useState(39.50)
  const [pricing2Value, setPricing2Value] = useState(39.50)
  const [totalValue, setTotalValue] = useState(118.50)
 
  const handleIncrease = ()=> {
    let increase = cartValue + 1
    setCartValue(increase)
    let pricing = increase * 39.50
    setPricingValue(pricing)
    handleTotal()
    handleCartAdd()
  }
  const handleIncrease1 = ()=> {
    let increase = cart1Value + 1
    setCart1Value(increase)
    let pricing = increase * 39.50
    setPricing1Value(pricing)
    handleTotal()
    handleCartAdd()
  }
  const handleIncrease2 = ()=> {
    let increase = cart2Value + 1
    setCart2Value(increase)
    let pricing = increase * 39.50
    setPricing2Value(pricing)
    handleTotal()
    handleCartAdd()
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
    
    <motion.div
    initial={{x: "-100%"}}
    animate={{x: "0"}}
    exit={{x: window.innerWidth}}>
      <Header />
      <Main
       cart1Value={cart1Value}
       cart2Value={cart2Value}
       cartValue={cartValue}
       setCart1Value={setCart1Value}
       setCart2Value={setCart2Value}
       setCartValue={setCartValue}
       handleDecrease={handleDecrease}
       handleDecrease1={handleDecrease1}
       handleDecrease2={handleDecrease2}
       handleIncrease={handleIncrease}
       handleIncrease1={handleIncrease1}
       handleIncrease2={handleIncrease2}
       pricingValue={pricingValue}
       setPricingValue={setPricingValue}
       pricing1Value={pricing1Value}
       setPricing1Value={setPricing1Value}
       pricing2Value= {pricing2Value}
       setPricing2Value={setPricing2Value}
       totalValue={totalValue}
       setTotalValue={setTotalValue}
       setCartNoValue={setCartNoValue}
       cartNoValue={cartNoValue}
      />
    </motion.div>
  )
}

export default Shipping