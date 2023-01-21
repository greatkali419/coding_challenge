import Home from "../components/HomeComponents/Home";
import Products from "../components/HomeComponents/Products";
import Auctions from "../components/HomeComponents/Auctions";
import Creators from "../components/HomeComponents/Creators";
import PreCreators from "../components/HomeComponents/PreCreators";
import Footer from "../components/HomeComponents/Footer";
import Animation from "../components/HomeComponents/Animation";
import {motion } from "framer-motion";
const HomePage = () => {
  return (
    <motion.div
    initial={{x: "-100%"}}
    animate={{x: "0"}}
    exit={{x: window.innerWidth}}
    >
      <Home />
      <Products />
      <Auctions />
      <PreCreators />
      <Creators />
      <Animation />
      <Footer />
    </motion.div>
  )
}

export default HomePage