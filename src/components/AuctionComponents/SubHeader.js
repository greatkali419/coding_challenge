import UseWindowSize from "../../hooks/UseWindowSize";

const SubHeader = () => {
  const { width } = UseWindowSize();

  return (
    <div>
      {width< 799 ?
       <div className="subHeader-container">
          <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="2.80001" cy="3" rx="2.80001" ry="3" fill="#4693ED"/>
          </svg>
          <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="3.39962" cy="3" rx="2.80001" ry="3" fill="#B8BCB5"/>
          </svg>
          <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="3.39962" cy="3" rx="2.80001" ry="3" fill="#B8BCB5"/>
          </svg>
          <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="3.39962" cy="3" rx="2.80001" ry="3" fill="#B8BCB5"/>
          </svg>
       </div> 
       :
        <div className="pc-auction-slider">
          <button></button>
          <button></button>
          <button></button>
          <button></button>
      </div>}
      {width< 799 ? <div className="subHeader-container1">
        <h2>
        Top bids from popular creators
        </h2>
      </div>:
      <div className="pc-subHeader-container1" >
        <h2>
        Top bids from popular creators
        </h2>
      </div>}
    </div>
  )
}

export default SubHeader