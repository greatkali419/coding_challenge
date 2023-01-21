import UseWindowSize from "../../hooks/UseWindowSize";

const PostPageHeader = () => {
  const { width } = UseWindowSize();

  return (
    <div>
        {width < 799 ? <div className="postPage-header-container">
          <div className="header-nav-container">
              <p className="postpagelink">
                Home/Marketplace/Editorials/
              </p>
              <p>
                Philomena '22
              </p> 
          </div>
          <div className="borderline">
              <svg width="398" height="1" viewBox="0 0 398 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.75" x2="398" y2="0.75" stroke="#333333" stroke-width="0.5"/>
              </svg>
          </div>
        </div>
        :
        <div className="pc-postPage-header-container">
            <div className="pc-header-nav-container">
                <h2 className="pc-postpagelink">
                  Home/Marketplace/Editorials/
                </h2>
                <h2>
                  Philomena '22
                </h2> 
            </div>
        </div>
        }
    </div>
    
  )
}

export default PostPageHeader