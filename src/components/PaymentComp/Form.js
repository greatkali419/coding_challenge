import { Link } from 'react-router-dom';
import UseWindowSize from "../../hooks/UseWindowSize";

const Form = () => {
  const { width } = UseWindowSize();
  return (
    <div>
{width<799 ?        <form action="#" className="shipping-form-container">
              <div className="first-form-container">
                  <label htmlFor="email">
                  Wallet type
                  </label>
                  <input type="text" />
                </div>
              <div className="first-form-container">
                  <label htmlFor="email">
                  Key
                  </label>
                  <input type="text" />
                </div>
              <div className="first-form-container">
                  <label htmlFor="email">
                  Expiry date
                  </label>
                  <input type="text" />
                </div>
              <div className="first-form-container">
                  <label htmlFor="email">
                  Safe code
                  </label>
                  <input type="text" />
                  <ul className="shippinglist-container">
                    <li>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="16" rx="5" fill="#D9D9D9"/>
                    </svg>
                    Save my wallet details & information for future transactions
                    </li>
                  </ul>
                </div>
                <div className="shipping-button-container">
                  <button>
                      <Link to="/coding_challenge/thanks">
                        Confirm
                      </Link>
                  </button>
                </div>
            </form>:
            <div className='pc-payment-container2'>
              <div className='pc-payment-container1-header'>
                <h2>
                Payment Summary
                </h2>
              </div>
              <div className='pc-payment-container1-subheader'>
                <h2>
                Metamask wallet : 002345KJi90pzzz3
                </h2>
                <h3>
                Actively linked to Yaba, Lagos Nigeria.
                </h3>
              </div>
              <div className='pc-payment-container1-paragraph'>
                <p>
                Expected arrival date: Between 22nd September and 26th September 20222
                </p>
              </div>
            <div className='pc-pricing-content-container-f'>
                <div className='pc-pricing-content1f'>
                  <p>
                  Products in cart : 
                  </p>
                  <p>
                  Shipping : 
                  </p>
                  <p>
                  Total :
                  </p>
                </div>
                <div className='pc-pricing-content2f'>
                  <p>
                  3
                  </p>
                  <p>
                  $2.50
                  </p>
                  <p>
                  $114.00
                  </p>
                </div>
            </div>
            </div>
            }
    </div>
    
  )
}

export default Form