import pay1 from "../../images/pay1.svg";
import pay2 from "../../images/pay2.svg";
import pay3 from "../../images/pay3.svg";
import pay4 from "../../images/pay4.svg";
import pay5 from "../../images/pay+.svg";
import wallet1 from "../../images/wallet1.svg";
import wallet2 from "../../images/wallet2.svg";
import wallet3 from "../../images/Wallet3.svg";
import wallet4 from "../../images/wallet4.svg";
import select from "../../images/select1.svg";
import metamask from "../../images/MetaMask - jpeg.svg";
import { Link } from 'react-router-dom';
import UseWindowSize from "../../hooks/UseWindowSize";

const Wallet = () => {
  const { width } = UseWindowSize();
  return (
    <div>
      {width<799 ? <div className="wallet-container">
            <img src={pay1} alt="1" />
            <img src={pay2} alt="2" />
            <img src={pay3} alt="3" />
            <img src={pay4} alt="4" />
          <button>
            <img src={pay5} alt="5" />
          </button>
      </div>:
      <div className="pc-payment-container1">
          <div className="pc-payment-form-container">
            <div className="pc-payment-form-header-container">
              <div className="pc-payment-form-header-container1">
                <button>
                  <img src={select} alt="select" />
                </button>
                  <h3>
                  Select your wallet
                  </h3>
              </div>
              <div className="pc-payment-form-header-container2">
                <img src={wallet1} alt="1" />
                <img src={wallet2} alt="2" />
                <img src={wallet3} alt="3" />
                <img src={wallet4} alt="4" />
              </div>
            </div>
            <div className="pc-payment-form-paragraph">
              <p>
              Connect with one of our available wallet providers or add and connect a new wallet.  
              </p>
            </div>
            <form action="#" className="pc-payment-form-">
              <div action="#" className="pc-payment-form-1">
                <label htmlFor="wallet">Wallet type</label>
                <input type="text" />
              </div>
              <div className="pc-payment-form-2">
                <label htmlFor="Key">Key</label>
                <div className="pc-payment-innerform-2">
                <input type="text" />
                <img src={metamask} alt="meta" />

                </div>
              </div>
              <div className='pc-form-flex'>
                  <div className="pc-payment-form-3">
                    <label htmlFor="Expiry date">Expiry date</label>
                    <input type="text" placeholder="MM/YY" />
                  </div>
                  <div className="pc-payment-form-3">
                    <label htmlFor="CVV">CVV</label>
                    <input type="text" placeholder="***" />
                  </div>
              </div>
              <ul className="pc-payment-form-4">
                <li><input type="checkbox" />Save my wallet details & information for future transactions</li>
              </ul>
            </form>

            </div>
            <div className="pc-payment-botton">
              <button>
            <Link to="/thanks">

                Confirm
              </Link>

              </button>
            </div>
      </div>
      }
         
    </div>
  )
}

export default Wallet