import image1 from "../../images/firsthero.png";
import image2 from "../../images/secondhero.png";
import image3 from "../../images/thirdhero.png";
import image4 from "../../images/fourthhero.png";
import imageMobile from "../../images/mobilehome.png";
import UseWindowSize from "../../hooks/UseWindowSize";
import { motion } from "framer-motion";
const Home = () => {
    const { width } = UseWindowSize();
    const AnimationVariant = {
      previous: {
        x: 0,
       
      },
      after: {
        x: ["0px","-358px","-358px","-716px","-716px","-1074px","-1074px","-358px","-358px","-716px","-716px", "-358px", "-358px", "0px"],
        transition : {
            duration: 15,
            repeat: Infinity,
            repeatDelay: 3 
        }
      }
    }
  return (
    <div>
    {width<799 ? <div className="home-container">
      <div className="home-header">
        <h1>
        Photography is poetry and beautiful untold stories
        </h1>
      </div>
     
      <p className="home-paragraph">
        Flip through more than 10,000 vintage shots, old photographs, historic images and captures seamlessly in one place. Register to get top access
      </p>
    
      <div className="mobile-image-container">
        <img className="mobile-image" src={imageMobile} alt="mobile" />
      </div> 
      
    </div>
          :    <div className="pc-home-container">
                  <div className="pc-home-header">
                    <h1>
                    Photography is poetry & beautiful untold stories
                    </h1>
                </div>
                <div className="pc-home-paragragh">
                  <p className="home-paragraph">
                        Flip through more than 10,000 vintage shots, old photographs, historic images and captures seamlessly in one place. Register to get top access
                  </p>
                </div>
              <div className="Home-animation-container">
              <motion.div className="inner-animation-container" >
                  <motion.div 
                  variants={AnimationVariant}
                  initial="previous"
                  animate="after"
                  className="home-animation-image-container" >
                    <img src={image1} alt="1" className="img1"/>
                    <img src={image2} alt="2" className="img2" />
                    <img src={image3} alt="3" className="img3" />
                    <img src={image4} alt="4" className="img4" />
                  </motion.div>
              </motion.div>
              <motion.div className="inner-animation-container" >

                  <motion.div
                    variants={AnimationVariant}
                    initial="previous"
                    animate="after"
                  className="home-animation-image-container">
                    <img src={image2} alt="2" className="img2" />
                    <img src={image3} alt="3" className="img3" />
                    <img src={image4} alt="4" className="img4" />
                    <img src={image1} alt="1" className="img1" />
                  </motion.div>
              </motion.div>
              <motion.div className="inner-animation-container" >

                  <motion.div
                    variants={AnimationVariant}
                    initial="previous"
                    animate="after"
                  className="home-animation-image-container">
                    <img src={image3} alt="3" className="img3" />
                    <img src={image4} alt="4" className="img4" />
                    <img src={image1} alt="1" className="img1" />
                    <img src={image2} alt="2" className="img2" />

                  </motion.div>
              </motion.div>
              <motion.div className="inner-animation-container" >

                  <motion.div
                    variants={AnimationVariant}
                    initial="previous"
                    animate="after"
                  className="home-animation-image-container">
                    <img src={image4} alt="4" className="img4" />
                    <img src={image1} alt="1" className="img1" />
                    <img src={image2} alt="2" className="img2" />
                    <img src={image3} alt="3" className="img3" />
                  </motion.div>
              </motion.div>
              
          </div>
    </div>}
    
    </div>

  )
}

export default Home