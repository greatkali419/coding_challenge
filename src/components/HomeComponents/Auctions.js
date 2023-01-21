import UseWindowSize from "../../hooks/UseWindowSize";
import dotImage from "../../images/dot.svg";
import arrow from "../../images/ArrowAuctionpc.svg";
import { Link } from "react-router-dom";
const Auctions = () => {
  const { width } = UseWindowSize();

  return (
    <div>
        {width< 768 ? <div className="auction-container">
              <div className="auction-container2">
                

              <div className="auction-content-container">
                    <div className="contentA">
                      <img src={dotImage} alt="1" />
                      <h1>
                        01
                      </h1>
                    </div>
                    <div className="contentB">
                        <h2>
                          MONALISA REDEFINED IN STYLE
                        </h2>
                        <p>
                          START ON : 08:00 BTS. MONDAY
                        </p>
                        <p className="scndparagraph">
                          GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS
                        </p>
                      </div>

                </div>
                <div className="button-content-container">
                  <Link to='/drop'>
                      <button className="auction-button">
                        Set a reminder
                      </button>
                    </Link> 
                     <Link to='/auctions'>
                      <button className="auction-button">
                        See more
                      </button>
                    </Link> 
                  </div>
                  </div>

              </div> 
              : 
              <div className="pc-auction-container">
                <div className="pc-auction-header">
                  <h1>
                  See Upcoming Auctions and Exhibitions
                  </h1>
                  <img src={arrow} alt="arrow" />
                </div>
                  <div className="pc-home-auction-bg">
                    <div className="pc-home-con1">
                    <div className="pc-auction-content-container">
                            <div className="pc-contentA">
                              <img src={dotImage} alt="1" />
                              <h1>
                                01
                              </h1>
                            </div>
                            <div className="pc-contentB">
                                <h2>
                                  MONALISA REDEFINED IN STYLE
                                </h2>
                                <p  className="pc-1stparagraph">
                                  START ON : 08:00 BTS. MONDAY
                                </p>
                                <p className="pc-scndparagraph">
                                  GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS
                                </p>
                              </div>

                        </div>
                        <div className="pc-button-content-container">
                          <Link to='drop'>
                              <button className="pc-auction-button">
                                Set a reminder
                              </button>
                              </Link>
                          <Link to='auctions'>
                              <button className="pc-auction-button">
                                See more
                              </button>
                          </Link>

                              
                          </div>
                  </div>
                    </div>
                      
                <div className="pc-lower-homeAuction">
                    <div className="slider">
                    <span>

                    </span>
                    </div>
                    <div className="pc-home-auctionbutton-container">
                      <button>
                          <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.94469 5.85521L6.79102 2.00888L5.69229 0.910156L0.747236 5.85521L5.69229 10.8003L6.79102 9.70153L2.94469 5.85521Z" fill="white"/>
                          </svg>
                        
                      </button>
                      <button>
                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.91505 5.85521L0.0687256 2.00888L1.16745 0.910156L6.11251 5.85521L1.16745 10.8003L0.0687256 9.70153L3.91505 5.85521Z" fill="white"/>
                        </svg>

                      </button>
                    </div>
                </div>
              </div>}
    </div>
    
  )
}

export default Auctions