import UseWindowSize from "../../hooks/UseWindowSize";

const Header = () => {
  const { width } = UseWindowSize();

  return (
    <div>
      {width < 799 ? <div>
          <div className="shipping-header-container">
            <p>
            Home/ Marketplace/ Cart/ Shipping/
            </p>
            <p>
            Payment
            </p>
          </div>
          <div className="secure-header-container">
            <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.8333 8.3125H11.6667V4.75C11.6667 2.1375 9.56667 0 7 0C4.43333 0 2.33333 2.1375 2.33333 4.75V8.3125H1.16667C0.583333 8.3125 0 8.90625 0 9.5V17.8125C0 18.4062 0.583333 19 1.16667 19H12.8333C13.4167 19 14 18.4062 14 17.8125V9.5C14 8.90625 13.4167 8.3125 12.8333 8.3125ZM8.16667 16.625H5.83333L6.3 14.0125C5.71667 13.775 5.25 13.0625 5.25 12.4688C5.25 11.5187 6.06667 10.6875 7 10.6875C7.93333 10.6875 8.75 11.5187 8.75 12.4688C8.75 13.1813 8.4 13.775 7.7 14.0125L8.16667 16.625ZM9.33333 8.3125H4.66667V4.75C4.66667 3.44375 5.71667 2.375 7 2.375C8.28333 2.375 9.33333 3.44375 9.33333 4.75V8.3125Z" fill="#747474"/>
            </svg>

              <p>
              Secure server
              </p>
          </div>
          <div className="select-acct-container">
            <button>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 0.5C4.10999 0.5 3.23996 0.763921 2.49994 1.25839C1.75991 1.75285 1.18314 2.45566 0.842544 3.27792C0.50195 4.10019 0.412835 5.00499 0.586468 5.87791C0.760102 6.75082 1.18869 7.55264 1.81802 8.18198C2.44736 8.81132 3.24918 9.2399 4.1221 9.41353C4.99501 9.58717 5.89981 9.49805 6.72208 9.15746C7.54434 8.81686 8.24715 8.24009 8.74161 7.50007C9.23608 6.76005 9.5 5.89002 9.5 5C9.5 3.80653 9.0259 2.66193 8.18198 1.81802C7.33807 0.974106 6.19348 0.5 5 0.5Z" fill="#28A814"/>
                </svg>
            </button>
              <p>
              Select your wallet
              </p>

          </div>
          <div className="payment-paragraph-container">
            <p>
            Connect with one of our available wallet providers or add and connect a new wallet.  
            </p>
          </div>
      </div>
      :
      <div className="pc-payment-header-container">
        <div className="pc-payment-header1">
          <h2>
          Payment method
          </h2>
        </div>
        <div className="pc-payment-header2">
          <svg width="20" height="27" viewBox="0 0 20 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.3333 11.8125H16.6667V6.75C16.6667 3.0375 13.6667 0 10 0C6.33333 0 3.33333 3.0375 3.33333 6.75V11.8125H1.66667C0.833333 11.8125 0 12.6562 0 13.5V25.3125C0 26.1562 0.833333 27 1.66667 27H18.3333C19.1667 27 20 26.1562 20 25.3125V13.5C20 12.6562 19.1667 11.8125 18.3333 11.8125ZM11.6667 23.625H8.33333L9 19.9125C8.16667 19.575 7.5 18.5625 7.5 17.7188C7.5 16.3687 8.66667 15.1875 10 15.1875C11.3333 15.1875 12.5 16.3687 12.5 17.7188C12.5 18.7313 12 19.575 11 19.9125L11.6667 23.625ZM13.3333 11.8125H6.66667V6.75C6.66667 4.89375 8.16667 3.375 10 3.375C11.8333 3.375 13.3333 4.89375 13.3333 6.75V11.8125Z" fill="#747474"/>
          </svg>
          <h2>
          Secure server
          </h2>
        </div>
      </div>
        }
    </div>
  )
}

export default Header