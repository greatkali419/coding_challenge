import UseWindowSize from "../../hooks/UseWindowSize";


const Creators = () => {
  const { width } = UseWindowSize();

  return (
    <div>
      {width<799 ?  <div className="creators-container">
        <div className="creators-main-container">
          <h2 className="creators-header">
            TOP CREATORS OF THE WEEK
          </h2>
        <ul className="creators-list-container">
          <li className="creators-listitems"> Editorials </li>
          <li className="creators-listitems"> Fashion </li>
          <li className="creators-listitems"> Lifestyle </li>
          <li className="creators-listitems"> Blueprint </li>
        </ul>
      </div>
      <div className="creators-paragraph-container">
        <p>
        “Everything always looked better in black and white. Everything always  as if it were the first time; there’s always more people in a black and white photograph. It just makes it seem that there were more people at a gig, more people at a football match, than with colour photography. Everything looks more exciting.”– Jack Lowden

        </p>
      </div>
      
    </div>
    :
    <div className="pc-creators-container">
      <div className="pc-creators-header-container">
        <div className="pc-creators-header">
          <h2>
          TOP CREATORS OF THE WEEK
          </h2>
        </div>
        <div className="pc-list-container">
          <div className="slide-cont">
          <span className="pc-creators-slider">
            <span></span>
          </span>
          </div>
          <div className="pc-creators-list">
            <p>Editorials</p>
            <p>Fashion</p>
            <p>Lifestyle</p>
            <p>Blueprint</p>
          </div>
        </div>
      </div>
        <div className="pc-creators-paragraph-container">
          <p>
          “Everything always looked better in black and white. Everything always  as if it were the first time; there’s always more people in a black and white photograph. It just makes it seem that there were more people at a gig, more people at a football match, than with colour photography. Everything looks more exciting.”– Jack Lowden
          </p>
        </div>
    </div>
    }
    </div>
    
  )
}

export default Creators