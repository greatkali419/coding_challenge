import Header from "../components/CartPageComp/Header";
import Main from "../components/CartPageComp/Main";
import Pricing from "../components/CartPageComp/Pricing";
import { useState } from "react";
import {motion } from "framer-motion";


const CartPage = () => {
  const [pricingValue, setPricingValue] = useState(39.50)
  const [pricing1Value, setPricing1Value] = useState(39.50)
  const [pricing2Value, setPricing2Value] = useState(39.50)
  const [totalValue, setTotalValue] = useState(118.50)
  const [grandTotalValue, setGrandTotalValue] = useState(121.00)
  const [cartNoValue, setCartNoValue] = useState(3);
  
  return (
    <motion.div
    initial={{x: "-100%"}}
    animate={{x: "0"}}
    exit={{x: window.innerWidth}}>
      <Header />
      <Main 
      pricingValue={pricingValue}
      setPricingValue={setPricingValue}
      pricing1Value={pricing1Value}
      pricing2Value={pricing2Value}
      setPricing1Value={setPricing1Value}
      setPricing2Value={setPricing2Value}
      setTotalValue={setTotalValue}
      grandTotalValue={grandTotalValue}
      setGrandTotalValue={setGrandTotalValue}
      setCartNoValue={setCartNoValue}
      totalValue={totalValue}
       />
      <Pricing
            cartNoValue={cartNoValue}
            pricingValue={pricingValue}
            setPricingValue={setPricingValue}
            pricing1Value={pricing1Value}
            pricing2Value={pricing2Value}
            setPricing1Value={setPricing1Value}
            setPricing2Value={setPricing2Value}
            totalValue={totalValue}
            setTotalValue={setTotalValue}
            grandTotalValue={grandTotalValue}
            setGrandTotalValue={setGrandTotalValue}
      />
    </motion.div>

  )
}

export default CartPage