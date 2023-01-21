import { Link } from 'react-router-dom';
import UseWindowSize from "../../hooks/UseWindowSize";

const Pricing = ({ grandTotalValue, totalValue,cartNoValue }) => {
  const { width } = UseWindowSize();

  return (
    <div>
      {width < 799 ? <div>
      <div className="pricing-container1">
                    <div className="pricing-content-container">
                        <p>
                        Products in cart : 

                        </p>
                        <p>
                         {cartNoValue}items
                        </p>
                    </div>
                    <div className="pricing-content-container">
                        <p>

                        Shipping : 
                        </p>
                        <p>

                          $2.50
                        </p>
                    </div>
                    <div className="pricing-content-container">
                        <p>
    
                      Total :
                        </p>
                        <p>
                     
                          ${totalValue}
                        </p>
                    </div>
                    <div className="pricing-content-container">
                      <p>

                      Grand total:
                      </p>
                      <p>

                    ${grandTotalValue}
                      </p>
                    </div>
          </div>
          <div className="pricing-button-container">
            <button className="link2-button">
            <Link to="/products/cart/shipping">
            Proceed to checkout
            </Link>
            </button>

              <button className='link-button'>
                <Link to="/products">
                  Continue shopping
                </Link>
              </button>
          </div>
      </div> :
      <div className='pc-pricing-container'>
        <div className='pc-pricing-button-container'>
        <Link to="/products/cart/shipping">
          <button>
          Proceed to checkout
          </button>
          </Link>
          
          <Link to="/products">
          <button>
          Continue shopping
          </button>
          </Link>

        </div>
        <div className='pc-pricing-content-container'>
            <div className='pc-pricing-content1'>
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
            <div className='pc-pricing-content2'>
              <p>
              {cartNoValue} items
              </p>
              <p>
              $2.50
              </p>
              <p>
              ${totalValue}
              </p>
            </div>
        </div>
       
      </div>
      }
          
    </div>
  )
}

export default Pricing