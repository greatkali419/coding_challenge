import ProductFooter from "../components/ProductComponents/ProductFooter";
import ProductHeader from "../components/ProductComponents/ProductHeader";
import ProductMain from "../components/ProductComponents/ProductMain";
import Footer from "../components/HomeComponents/Footer";
import {motion } from "framer-motion";

const ProductPage = () => {
  return (
    <motion.div
    initial={{x: "-100%"}}
    animate={{x: "0"}}
    exit={{x: window.innerWidth}}>
      <ProductHeader />
      <ProductMain />
      <ProductFooter />
      <Footer />
    </motion.div>
  )
}

export default ProductPage