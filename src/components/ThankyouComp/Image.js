import blu1 from "../../images/blur1.svg";
import blu2 from "../../images/blur2.svg";
import blu3 from "../../images/blur3.svg";
import ellipses1 from "../../images/Ellip1.png";
import ellipses2 from "../../images/Ellip2.png";
import UseWindowSize from "../../hooks/UseWindowSize";

const Image = () => {
  const { width } = UseWindowSize();
  return (
    <div>
        {width<799 ? <div className="thankyou-image-cont">
          <div className="bg-1">
            <img src={blu1} alt="1" />
            <img src={blu2} alt="2" />
            </div>
            <div className="bg-2">
            <img src={blu3} alt="3" />
          </div>
        </div>:
        <div className="pc-thank-you-image-container">
            <img src={ellipses2} alt="1" />
            <img src={ellipses1} alt="1" />
        </div>
        }
    </div>
    
  )
}

export default Image