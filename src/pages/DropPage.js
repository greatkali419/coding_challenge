import Header from "../components/DropComponents/Header";
import Main from "../components/DropComponents/Main";
import {motion } from "framer-motion";

const DropPage = () => {
  return (
    <motion.div
    initial={{x: "-100%"}}
    animate={{x: "0"}}
    exit={{x: window.innerWidth}}>
      <Header />
      <Main />      
    </motion.div>
  )
}

export default DropPage