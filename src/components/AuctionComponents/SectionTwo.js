import image1 from "../../images/sectiontwo1.png";
import mobileimage1 from "../../images/Topbid1.png";
import mobileimage2 from "../../images/Topbid2.png";
import image2 from "../../images/sectiontwo2.png";
import UseWindowSize from "../../hooks/UseWindowSize";
import heart1 from "../../images/pc-red-heart.svg";
import heart2 from "../../images/pc-faded-heart.svg";

const SectionTwo = () => {
  const { width } = UseWindowSize();

  return (
    <>
        {width<799 
        ? <div className="section2-container">
                <div className="top-creators1-container">
                <div className="heart-container">
                  <button>
                        <svg width="19" height="16" viewBox="0 0 19 16"         fill="none" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8182 0C12.0045 0 10.4068 0.933333 9.5 2.4C8.59318 0.933333 6.99545 0 5.18182 0C2.33182 0 0 2.4 0 5.33333C0 10.6222 9.5 16 9.5 16C9.5 16 19 10.6667 19 5.33333C19 2.4 16.6682 0 13.8182 0Z" fill="#F44336"/>
                        </svg>
                  </button>
                </div>
                <img src={mobileimage1} alt="1" />
                <div className="top-creators-content-container">
                  <h2>
                  Out of the box
                  </h2>
                  <h2>
                  0.57 ETH
                  </h2>
                </div>
            </div>
            <div className="sectionTwo-content-container1">
                  <div className="name-container">
                        <p>
                        Creator : 
                        </p>
                        <p>
                        Jacob Banks
                        </p>
                  </div>
                  <div className="date-container">
                        <p>
                        Date :
                        </p>
                        <p>
                        12/08/22
                        </p>
                  </div>
                  <div className="bid-container"> 
                        <div className="bid">
                              <p>
                              Current bid
                              </p>
                              <p>
                              0.987 ETH
                              </p>
                        </div>
                        <button>
                        Place bid
                        </button>
                  </div>
            </div>
                <div className="top-creators1-container">
                <div className="heart-container">
                  <button>
                        <svg width="19" height="16" viewBox="0 0 19 16"         fill="none" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8182 0C12.0045 0 10.4068 0.933333 9.5 2.4C8.59318 0.933333 6.99545 0 5.18182 0C2.33182 0 0 2.4 0 5.33333C0 10.6222 9.5 16 9.5 16C9.5 16 19 10.6667 19 5.33333C19 2.4 16.6682 0 13.8182 0Z" fill="#E8E0E0"/>
                        </svg>
                  </button>
                </div>
                <img src={mobileimage2} alt="1" />
                <div className="top-creators-content-container">
                  <h2>
                  Out of the box
                  </h2>
                  <h2>
                  0.34 ETH
                  </h2>
                </div>
            </div>
            <div className="sectionTwo-content-container1">
                  <div className="name-container">
                        <p>
                        Creator : 
                        </p>
                        <p>
                        Jacob Banks
                        </p>
                  </div>
                  <div className="date-container">
                        <p>
                        Date :
                        </p>
                        <p>
                        12/08/22
                        </p>
                  </div>
                  <div className="bid-container"> 
                        <div className="bid">
                              <p>
                              Current bid
                              </p>
                              <p>
                              0.987 ETH
                              </p>
                        </div>
                        <button>
                        Place bid
                        </button>
                  </div>
            </div>
            <div className="section2-container2">
              <h2>
                Load more
              </h2>
              <button>
                  <svg width="34" height="22" viewBox="0 0 34 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 11C0 10.6759 0.127925 10.3651 0.355633 10.1359C0.583342 9.9067 0.89218 9.77795 1.21421 9.77795H29.8525L22.2103 2.08881C21.9823 1.85934 21.8542 1.54811 21.8542 1.22359C21.8542 0.899077 21.9823 0.587851 22.2103 0.358382C22.4383 0.128914 22.7475 7.64589e-09 23.07 0C23.3924 -7.64589e-09 23.7016 0.128914 23.9296 0.358382L33.6433 10.1348C33.7564 10.2483 33.8461 10.3832 33.9073 10.5316C33.9685 10.6801 34 10.8393 34 11C34 11.1607 33.9685 11.3199 33.9073 11.4684C33.8461 11.6168 33.7564 11.7517 33.6433 11.8652L23.9296 21.6416C23.7016 21.8711 23.3924 22 23.07 22C22.7475 22 22.4383 21.8711 22.2103 21.6416C21.9823 21.4122 21.8542 21.1009 21.8542 20.7764C21.8542 20.4519 21.9823 20.1407 22.2103 19.9112L29.8525 12.2221H1.21421C0.89218 12.2221 0.583342 12.0933 0.355633 11.8641C0.127925 11.6349 0 11.3241 0 11V11Z" fill="#616161"/>
                  </svg>
              </button>
            </div>
        </div> 
         
         : <div className="pc-sectiontwo-container">

            <div className="pc-sectiontwo-container1">
                  <div className="pc-sectiontwo-container1-header">
                        <div className="pc-sectiontwo-heart-container">
                              <button>
                              <img src={heart1} alt="red-heart" />
                              </button>
                        </div>
                        <div className="pc-sectiontwo-img-container">
                        <img src={image1} alt="1" />
                        </div>
                        <div className="pc-sectiontwo-subhead-container">
                              <h2>
                              Out of the box
                              </h2>
                        </div>
                  </div>
                  <div className="pc-sectiontwo-content-container">
                        <div className="pc-sectiontwo-content-container1">
                              <h3>
                              Creator : 
                              </h3>
                              <h3>
                              Dan Murray
                              </h3>
                        </div>
                        <div className="pc-sectiontwo-content-container1">
                              <h3>Date :</h3>
                              <h3>12/08/22</h3>
                        </div>
                        <div className="pc-sectiontwo-content-container1">
                              <h3>
                              Highest bid : 
                              </h3>
                              <h3>
                              0.57 ETH
                              </h3>
                        </div>
                        <div className="pc-sectiontwo-contentbid-container">
                              <div className="pc-sectiontwo-contentbid-container1">
                                    <h3>
                                    Current bid
                                    </h3>
                                    <p>
                                    0.987 ETH
                                    </p>
                              </div>
                              <button>
                              Place bid
                              </button>
                        </div>
                  </div>
            </div>
            <div className="pc-sectiontwo-container1">
                  <div className="pc-sectiontwo-container1-header">
                        <div className="pc-sectiontwo-heart-container">
                              <button>
                              <img src={heart2} alt="red-heart" />
                              </button>
                        </div>
                        <div className="pc-sectiontwo-img-container">
                        <img src={image2} alt="1" />
                        </div>
                        <div className="pc-sectiontwo-subhead-container">
                              <h2>
                              Falling apart
                              </h2>
                        </div>
                  </div>
                  <div className="pc-sectiontwo-content-container">
                        <div className="pc-sectiontwo-content-container1">
                              <h3>
                              Creator : 
                              </h3>
                              <h3>
                              Jacob Banks
                              </h3>
                        </div>
                        <div className="pc-sectiontwo-content-container1">
                              <h3>Date :</h3>
                              <h3>12/08/22</h3>
                        </div>
                        <div className="pc-sectiontwo-content-container1">
                              <h3>
                              Highest bid : 
                              </h3>
                              <h3>
                              0.34 ETH
                              </h3>
                        </div>
                        <div className="pc-sectiontwo-contentbid-container">
                              <div className="pc-sectiontwo-contentbid-container1">
                                    <h3>
                                    Current bid
                                    </h3>
                                    <p>
                                    0.99 ETH
                                    </p>
                              </div>
                              <button>
                              Place bid
                              </button>
                        </div>
                  </div>
            </div>

        </div>}
        
    </>
  )
}

export default SectionTwo