import Image from "../components/ThankyouComp/Image";
import Main from "../components/ThankyouComp/Main";
import {motion } from "framer-motion";

const Thankyou = () => {
  return (
    <motion.div
    initial={{x: "-100%"}}
    animate={{x: "0"}}
    exit={{x: window.innerWidth}}>
      <Image />
      <Main />
    </motion.div>
  )
}

export default Thankyou