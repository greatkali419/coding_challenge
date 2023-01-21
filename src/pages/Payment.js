import Header from "../components/PaymentComp/Header";
import Wallet from "../components/PaymentComp/Wallet";
import Form from "../components/PaymentComp/Form";
import {motion } from "framer-motion";

const Payment = () => {
  return (
    <motion.div
    initial={{x: "-100%"}}
    animate={{x: "0"}}
    exit={{x: window.innerWidth}}>
      <Header />
      <div className="pc-payment-flex">
      <Wallet />
      <Form />
      </div>
    </motion.div>
  )
}

export default Payment