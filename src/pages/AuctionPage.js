import Header from "../components/AuctionComponents/Header";
import SectionOne from "../components/AuctionComponents/SectionOne";
import SubHeader from "../components/AuctionComponents/SubHeader";
import SectionTwo from "../components/AuctionComponents/SectionTwo";
import {motion } from "framer-motion";

const AuctionPage = () => {
  return (
    <motion.div
    initial={{x: "-100%"}}
    animate={{x: "0"}}
    exit={{x: window.innerWidth}}>
      <Header />
      <SectionOne />
      <SubHeader />
      <SectionTwo />
    </motion.div>
  )
}

export default AuctionPage