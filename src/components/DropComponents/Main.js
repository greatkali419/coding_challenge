import image1 from "../../images/drop1.png";
import image2 from "../../images/drop2.png";
import image3 from "../../images/drop3.png";
import image4 from "../../images/drop4.png";
import UseWindowSize from "../../hooks/UseWindowSize";

const Main = () => {
  const { width } = UseWindowSize();

  
  return (
    <div>
      {width<799 ? 
        <div>
          <div className="main-drop-nav">
            <button>
              Sort by
              <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.0283 0.156939L6.99938 5.73587L0.970513 0.156939C0.862797 0.057061 0.718197 0.00114502 0.567624 0.00114502C0.41705 0.00114502 0.27245 0.057061 0.164734 0.156939C0.112578 0.205451 0.0711434 0.263353 0.0428567 0.327257C0.01457 0.391161 0 0.45978 0 0.529097C0 0.598413 0.01457 0.667032 0.0428567 0.730936C0.0711434 0.794839 0.112578 0.852743 0.164734 0.901254L6.5784 6.83745C6.69103 6.94167 6.8421 7 6.99938 7C7.15667 7 7.30773 6.94167 7.42037 6.83745L13.834 0.902399C13.8866 0.853852 13.9283 0.795806 13.9568 0.731691C13.9853 0.667575 14 0.598689 14 0.529097C14 0.459504 13.9853 0.390617 13.9568 0.326502C13.9283 0.262386 13.8866 0.204342 13.834 0.155794C13.7263 0.0559155 13.5817 0 13.4311 0C13.2806 0 13.136 0.0559155 13.0283 0.155794V0.156939Z" fill="black"/>
              </svg>

            </button>
          </div>
          <div className="drop-main-grid-container">
                  <div className="drop-main-image-container">
                      <div className="drop-button-container">
                          <button>
                          UPCOMING
                          </button>
                      </div>
                      <div className="drop-time-container">
                          <p>
                          Time remaining
                          </p>
                          <h2>
                          06  hrs : 45 min : 22 s
                          </h2>
                      </div>
                  </div>
              <div className="drop-main-content-container">
                    <h3>
                    November 21 at 11 am WAT

                    </h3>
                    <h2>
                    Eyo : Eko For Show

                    </h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.
                    </p>
                    <div className="drop-name-container">
                        <p>
                        Creator :
                        </p>
                        <p>
                        Aliya Minat
                        </p>
                    </div>
                    <a href="/">
                    Get notified
                    </a>
              </div>
           </div>

          <div className="drop-main-grid-container">
                  <div className="drop-main-image-container2">
                      <div className="drop-button-container2">
                          <button>
                          LIVE NOW
                          </button>
                      </div>
                      <div className="drop-time-container">
                          <p>
                          Time remaining
                          </p>
                          <h2>
                          06  hrs : 45 min : 22 s
                          </h2>
                      </div>
                  </div>
              <div className="drop-main-content-container">
                    <h3>
                    November 21 at 11 am WAT

                    </h3>
                    <h2>
                    Ginger Suburbs

                    </h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.
                    </p>
                    <div className="drop-name-container">
                        <p>
                        Creator : 
                        </p>
                        <p>
                        Tina Benson
                        </p>
                    </div>
                    <a href="/">
                    Join now
                    </a>
              </div>
           </div>
          <div className="drop-main-grid-container">
                  <div className="drop-main-image-container3">
                      <div className="drop-button-container3">
                          <button>
                          ENDED
                          </button>
                      </div>
                      <div className="drop-time-container">
                          <p>
                          Auction ended
                          </p>
                          <h2>
                          2 hours ago
                          </h2>
                      </div>
                  </div>
              <div className="drop-main-content-container">
                    <h3>
                    November 21 at 11 am WAT

                    </h3>
                    <h2>
                    Sink

                    </h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.
                    </p>
                    <div className="drop-name-container">
                        <p>
                        Creator :
                        </p>
                        <p>
                        Aliya Minat
                        </p>
                    </div>
                    <a href="/">
                    View
                    </a>
              </div>
           </div>
          <div className="drop-main-grid-container">
                  <div className="drop-main-image-container4">
                      <div className="drop-button-container3">
                          <button>
                          ENDED
                          </button>
                      </div>
                      <div className="drop-time-container">
                          <p>
                          Auction ended
                          </p>
                          <h2>
                          5 hours ago
                          </h2>
                      </div>
                  </div>
              <div className="drop-main-content-container">
                    <h3>
                    November 21 at 11 am WAT

                    </h3>
                    <h2>
                    Warped ‘99

                    </h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.
                    </p>
                    <div className="drop-name-container">
                        <p>
                        Creator :
                        </p>
                        <p>
                        Aliya Minat
                        </p>
                    </div>
                    <a href="/">
                    View
                    </a>
              </div>
           </div>
          

        </div> 
          :
          <div className="pc-drop-container">
            <div className="pc-drop-grid">
              <div className="pc-drop-bg">
                <div className="pc-drop-bg-content">
                    <p>
                      Time remaining
                    </p>
                    <div className="pc-drop-button">
                      <p>
                      06hrs:45 min:22s
                      </p>
                      <button>
                        Join
                      </button>
                    </div>
                </div>
              </div>
            <div className="pc-drop-content">
                  <button>
                    UPCOMING
                  </button>
                  <h3>
                    November 21 at 11am WAT
                  </h3>
                  <h1>
                    Eyo : Eko For Show
                  </h1>
                  <p>
                  Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.
                  </p>
                  <div className="pc-drop-creator">
                    <h2>
                    Creator :
                    </h2>
                    <h2>
                    Aliya Minat
                    </h2>
                  </div>
                  
                  <a>
                    Get notified
                  </a>
            </div>
        </div>
            <div className="pc-drop-grid">
              <div className="pc-drop-bg1">
                <div className="pc-drop-bg-content">
                    <p>
                      Time remaining
                    </p>
                    <div className="pc-drop-button">
                      <p>
                      06hrs:45 min:22s
                      </p>
                      <button>
                        Join
                      </button>
                    </div>
                </div>
              </div>
            <div className="pc-drop-content">
                  <button className="pc-drop-livenow">
                  LIVE NOW
                  </button>
                  <h3>
                    November 21 at 11am WAT
                  </h3>
                  <h1>
                  Ginger Suburbs
                  </h1>
                  <p>
                  Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.
                  </p>
                  <div className="pc-drop-creator">
                    <h2>
                    Creator :
                    </h2>
                    <h2>
                    Tina Benson
                    </h2>
                  </div>
                  
                  <a>
                  Join now
                  </a>
            </div>
        </div>
            <div className="pc-drop-grid">
              <div className="pc-drop-bg2">
                <div className="pc-drop-bg-content">
                    <p>
                      Time remaining
                    </p>
                    <div className="pc-drop-button">
                      <p>
                      06hrs:45 min:22s
                      </p>
                      <button className="pc-drop-ended">
                        View
                      </button>
                    </div>
                </div>
              </div>
            <div className="pc-drop-content">
                  <button className="pc-drop-ended1">
                  ENDED
                  </button>
                  <h3>
                    November 21 at 11am WAT
                  </h3>
                  <h1>
                  Sink
                  </h1>
                  <p>
                  Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.
                  </p>
                  <div className="pc-drop-creator">
                    <h2>
                    Creator :
                    </h2>
                    <h2>
                    Aliya Minat
                    </h2>
                  </div>
                  
                  <a>
                  View
                  </a>
            </div>
        </div>
            <div className="pc-drop-grid">
              <div className="pc-drop-bg3">
                <div className="pc-drop-bg-content">
                    <p>
                    Auction ended
                    </p>
                    <div className="pc-drop-button">
                      <p>
                      5 hours ago
                      </p>
                      <button className="pc-drop-ended">
                        View
                      </button>
                    </div>
                </div>
              </div>
            <div className="pc-drop-content">
                  <button className="pc-drop-ended1">
                  ENDED
                  </button>
                  <h3>
                    November 21 at 11am WAT
                  </h3>
                  <h1>
                  Warped ‘99
                  </h1>
                  <p>
                  Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.
                  </p>
                  <div className="pc-drop-creator">
                    <h2>
                    Creator :
                    </h2>
                    <h2>
                    Aliya Minat
                    </h2>
                  </div>
                  
                  <a>
                  View
                  </a>
            </div>
        </div>

            
            <div className="pc-drop-footer-button">
              <button>
              See more
              </button>
            </div>
      </div>
           }
      
      
    </div>
  )
}

export default Main