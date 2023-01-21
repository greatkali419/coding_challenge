import UseWindowSize from "../../hooks/UseWindowSize";
import logo from "../../images/pcARTSY..svg";
import icon1 from "../../images/pcMessage.svg";
import icon2 from "../../images/pcLocate.svg";

const Footer = () => {
  const today = new Date();
  const { width } = UseWindowSize();


  return (
    <div>
      {width<799 ?
      <div className="footer-container">
        <div className="footer-main-container" >
          <h2>
            NEWSLETTER
          </h2>
          <p> SUBSCRIBE TO OUR DAILY UPDATES AND NEWSLETTERS </p> 
          <form className="form-container">
            <input
            placeholder="ENTER YOUR EMAIL HERE" />
            <button>
              SUBSCRIBE
            </button>
          </form>
        </div>
        <div>
              <div className="email-container">
              <svg width="41" height="18" viewBox="0 0 41 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.05 0H38.95C39.4937 0 40.0151 0.199007 40.3996 0.553243C40.784 0.907478 41 1.38792 41 1.88889V32.1111C41 32.6121 40.784 33.0925 40.3996 33.4468C40.0151 33.801 39.4937 34 38.95 34H2.05C1.50631 34 0.984881 33.801 0.600431 33.4468C0.215981 33.0925 0 32.6121 0 32.1111V1.88889C0 1.38792 0.215981 0.907478 0.600431 0.553243C0.984881 0.199007 1.50631 0 2.05 0ZM36.9 8.00511L20.6476 21.4162L4.1 7.96356V30.2222H36.9V8.00511ZM5.14755 3.77778L20.625 16.3616L35.8791 3.77778H5.14755Z" fill="#333333"/>
              </svg>

                <p>
                artsystudios@gmail.com
              </p>
              </div>
            <div  className="email-container">
            <svg width="41" height="22" viewBox="0 0 41 58" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.5 58L6.00423 41.0121C3.13728 37.6522 1.18487 33.3715 0.393892 28.7112C-0.397084 24.0509 0.00889892 19.2204 1.5605 14.8306C3.11211 10.4407 5.73964 6.68864 9.11084 4.04882C12.482 1.409 16.4455 0 20.5 0C24.5545 0 28.518 1.409 31.8892 4.04882C35.2604 6.68864 37.8879 10.4407 39.4395 14.8306C40.9911 19.2204 41.3971 24.0509 40.6061 28.7112C39.8151 33.3715 37.8627 37.6522 34.9958 41.0121L20.5 58ZM31.775 37.2376C34.0047 34.6243 35.5231 31.2948 36.1382 27.6702C36.7533 24.0456 36.4374 20.2886 35.2306 16.8744C34.0237 13.4602 31.9801 10.542 29.3581 8.48886C26.7361 6.43574 23.6534 5.33989 20.5 5.33989C17.3466 5.33989 14.2639 6.43574 11.6419 8.48886C9.0199 10.542 6.97626 13.4602 5.76942 16.8744C4.56257 20.2886 4.24672 24.0456 4.86181 27.6702C5.4769 31.2948 6.9953 34.6243 9.22501 37.2376L20.5 50.451L31.775 37.2376ZM20.5 29.3629C19.2918 29.3629 18.1331 28.8005 17.2787 27.7992C16.4244 26.798 15.9444 25.4401 15.9444 24.0242C15.9444 22.6083 16.4244 21.2503 17.2787 20.2491C18.1331 19.2479 19.2918 18.6854 20.5 18.6854C21.7082 18.6854 22.8669 19.2479 23.7213 20.2491C24.5756 21.2503 25.0556 22.6083 25.0556 24.0242C25.0556 25.4401 24.5756 26.798 23.7213 27.7992C22.8669 28.8005 21.7082 29.3629 20.5 29.3629Z" fill="#333333"/>
              </svg>

              <p>
                Lagos, Nigeria.
              </p>
            </div>
          </div>
      </div>
      
      

    : 
    <div className="pc-footer-container">
      <div className="pc-footer-header">
        <h2>
        NewsLetter
        </h2>
          <p>
            Subscribe to get daily updates on new drops & exciting deals
          </p>
          <form action="#" className="pc-form-comtainer">
            <input type="text"
            placeholder="Enter your Email"
            />
            <button>Subscribe</button>
          </form> 
      </div>

        <div className="pc-footer-body">
          <div className="pc-body-1">
            <img src={logo} alt="logo" />
          </div>
          <ul className="pc-body-2">
              <li>Home</li>
              <li>Marketplace</li>
              <li>Auctions</li>
              <li>Drops</li>
          </ul>
          <ul className="pc-body-3">
              <li>Blog</li>
              <li>Wallets</li>
              <li>Rates</li>
              <li>High bids</li>
         </ul>
         <div className="pc-body-4">
                  <div className="pc-email-container">
                      <img src={icon1} alt="2" />
                        <p>
                        artsystudios@gmail.com
                      </p>
                      </div>
                      <div  className="pc-email-container">
                      <img src={icon2} alt="2" />
                      <p>
                        Lagos, Nigeria.
                      </p>
                </div>
         </div>
                
            </div>
          <div className="pc-footer-footer">
            <p className="pc-footer-paragraph">Copyright &copy; {today.getFullYear()}. All Rights Reserved.</p>
          </div>
          
    </div>}
    </div>
    
  )
}

export default Footer