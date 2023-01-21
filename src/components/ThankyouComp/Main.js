import UseWindowSize from "../../hooks/UseWindowSize";
import image1 from "../../images/Woman get online delivery.png";

const Main = () => {
  const { width } = UseWindowSize();
  return (
    <div>
  { width < 799 ?   <div className="thankyou-main-container">
          <h2>
          Hey Celestina, thank you for your purchase. 
          </h2>
          <p>
          You are amazing. Cheers to being ARTSY!
          </p>
      </div>: 
      <div className="pc-thankyou-main-container">
        <div>
          <img src={image1} alt="1" />
        </div>
        <div className="pc-thankyou-main-container">
        <h2>
          Hey Celestina, thank you for your purchase. 
          </h2>
          <div className="thankyou-last-container">
            <p>
            You are amazing. Cheers to being
            </p>
            <a href="/">
            ARTSY!
            </a>
        </div>
        
          </div>
          
      </div>
      }
    </div>
    
  )
}

export default Main