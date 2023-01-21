import image1 from "../../images/a1.png";
import image2 from "../../images/A2.png";
import image3 from "../../images/a3.png";
import image4 from "../../images/a4.png";
import image5 from "../../images/a5.png";
import image6 from "../../images/a6.png";
import imagex from "../../images/pcLiveX.svg";
import hrt1 from "../../images/h1.svg";
import hrt2 from "../../images/h2.svg";
import hrt3 from "../../images/h3.svg";
import hrt4 from "../../images/h4.svg";
import hrt5 from "../../images/h5.svg";
import hrt6 from "../../images/h6.svg";
import send from "../../images/sendicon.svg";
import liveheart from "../../images/liveHeart.svg";
const Main = () => {
  return (
    <div className="pc-liveAuction-container">
      <div className="pc-livestream-bg">
        <div className="pc-livestream-header">
          <button>
            <img src={imagex} alt="x" />
          </button>
          <button>
            LIVE
          </button>
        </div>
        <div className="pc-livestream-main">
            <p>
            Current bid $4500
            </p>
        </div>
        
        <div className="pc-livestream-footer">
          <p>
          Tag: Lost or Wither
          </p>
        </div>
      </div>
  
        
        <div className="pc-live-stream-content-container">
            <div className="pc-live-stream-content">
                <div className="pc-main-avatar-container">
                  <div className="pc-avatar-container1">
                      <img src={image1} alt="1" />
                    <div>
                      <p>
                      Taylor Ellen
                      </p>
                      <p>
                      $45.00 instant bid
                      </p>
                    </div>
                  </div>
                  <div className="pc-avatar-container">
                      <img src={image2} alt="2" />
                    <div>
                      <p>
                      Ella Flynn
                      </p>
                      <p>
                      Tight bid
                      </p>
                    </div>
                  </div>
                  <div className="pc-avatar-container">
                      <img src={image3} alt="3" />
                    <div>
                      <p>
                      Uncle Luca 
                      </p>
                      <p>
                      instant bid
                      </p>
                    </div>
                  </div>
                  <div className="pc-avatar-container">
                      <img src={image4} alt="4" />
                    <div>
                      <p>
                      Opeyemi Tiwalope
                      </p>
                      <p>
                      $45.00 
                      </p>
                    </div>
                  </div>
                  <div className="pc-avatar-container">
                      <img src={image5} alt="5" />
                    <div>
                      <p>
                      Celestina Quinn
                      </p>
                      <p>
                      gm frens! ready to bidddd
                      </p>
                    </div>
                  </div>
                  <div className="pc-avatar-container">
                      <img src={image6} alt="6" />
                    <div>
                      <p>
                      Samy Ellen
                      </p>
                      <p>
                        i love this. $20.00 for me
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pc-heart-love-container">
                  <img src={hrt6} alt="6" className="h1"/>
                  <img src={hrt1} alt="1" className="h2" />
                  <img src={hrt2} alt="2" className="h3" />
                  <img src={hrt3} alt="3" className="h4" />
                  <img src={hrt4} alt="4" className="h5" />
                  <img src={hrt5} alt="5" className="h6" />
                </div>
            </div>
            <div className="pc-livestream-form-container">
              <form action="#">
                <label htmlFor="yourbid">
                  Creator : Stormi Rylie
                </label>
                <div className="pc-livestream-input-container">
                  <input type="text" />
                  <button>
                    <img src={send} alt="send" />
                  </button>
                </div>
              </form>
              <button className="pc-live-like-button">
                <img src={liveheart} alt="liveheart" />
              </button>
            </div>
        </div>
    </div>
  )
}

export default Main