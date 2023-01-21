import image1 from "../../images/topanima1.png";
import image2 from "../../images/CIRCA.svg";
import image3 from "../../images/1985.svg";
import image4 from "../../images/home1anime.png";
import image5 from "../../images/home2anime.png";
import image6 from "../../images/home3anime.png";

import { motion } from "framer-motion";
import UseWindowSize from "../../hooks/UseWindowSize";

const Animation = () => {
  const { width } = UseWindowSize();

  const boxVariant = {
    hidden: {
      x:"0",
    },
    visible: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 2,

      }
    }
  }
  const listVariant = {
    hidden: {
      opacity: 1,
    },
    visible: {
      x: 0,
      opacity: 0,
      transition : {
        duration: 5,
        repeat: Infinity,
        repeatDelay: 3   
       }
    }
  }
  const listVariant1 = {
    hidden: {
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: [0,0,0.5,0.8,0.9,1,1,1,1,0.9,0.8,0.7,0.6,0.5,0],
      transition : {
        duration: 5, 
        repeat: Infinity,
        repeatDelay: 3.5 
    }
    }
  }
  const listVariant2 = {
    hidden: {
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: [0,0,0.5,0.8,0.9,1,1,1,1,0.9,0.8,0.7,0.6,0.5,0],
      transition : {
        duration: 5,  
        repeat: Infinity,
        repeatDelay: 4 
    }
    }
  }
  return (
    <div>
        {width<799 ? <div className="home-animation-container">
          <div className="circa-image-cont">
            <div className="circa">
              <img src={image2} alt="2" />
              <img src={image3} alt="3" />
            </div>
          </div>
          <motion.div 
          variants={listVariant}
          initial="hidden"
          animate="visible"
          className="animation-container">
            <img src={image1} alt="1" />
          </motion.div>
        </div>
        :
        <div className="pc-animation-container">
          <motion.div className="pc-anime-images"
           variants={boxVariant} 
           initial="hidden"
           animate="visible"
           exit="ext"
          >
            <motion.img
            
            variants={listVariant} 
            src={image4} alt="4" className="creator1a"/>
            <motion.img 
            variants={listVariant1}
            src={image5} alt="5" className="creator2a" />
            <motion.img 
            variants={listVariant2}
            src={image6} alt="6" className="creator3a" />
          </motion.div>
        </div>}
    </div>
    
  )
}

export default Animation