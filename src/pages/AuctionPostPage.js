import Header from "../components/LiveAuctionComp/Header";
import Main from "../components/LiveAuctionComp/Main";
import Bar from "../components/LiveAuctionComp/Bar";
import UseWindowSize from "../hooks/UseWindowSize";
import LivestreamMobile from "../components/LiveAuctionComp/LivestreamMobile";
import {motion } from "framer-motion";

const AuctionPostPage = () => {
  const { width } = UseWindowSize();

  return (
    <motion.div
    initial={{x: "-100%"}}
    animate={{x: "0"}}
    exit={{x: window.innerWidth}}>
      {width <769 ? <LivestreamMobile /> : 
      <div>
      <Header />
      <Main />
      <Bar />
      </div> }
    </motion.div>
  )
}

export default AuctionPostPage