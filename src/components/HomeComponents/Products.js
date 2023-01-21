import image1 from "../../images/booleanhome.png";
import image2 from "../../images/booleanx.png";
import image3 from "../../images/boolean3.png";
import avatar1 from "../../images/Ellipse 14.png";
import avatar2 from "../../images/Ellipse 15.png";
import avatar3 from "../../images/Ellipse 16.png";
import avatar4 from "../../images/Ellipse 17.png";
import avatar5 from "../../images/Ellipse 18.png";
import  arrowButton  from "../../images/mobilearrowicon.svg";
import UseWindowSize from "../../hooks/UseWindowSize";

const Products = () => {
  const { width } = UseWindowSize();
  return (
    <div>
        {width< 799 ? <div className="product-container">
              <h1 className="product-header">
                Features products 
              </h1>
              <div className="product-content-container">
                <div className="product-bg">
                <div className="bg-button"> <button className="button">
                  <img src={arrowButton} />
                </button> </div> 
                <div className="boolean-header-container">
                  <h1 className="boolean-header">
                  Boolean Egyptian
                  </h1>
                </div>
                  
                </div>
                <div className="paragraph-container">

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim natus architecto officiis modi tempore? Saepe cupiditate voluptas quod eveniet nostrum. Repudiandae blanditiis odio, quasi doloremque quia expedita veniam ratione atque?
                    Nulla
                  </p>
                  <div className="Avatar-container">
                    <div >
                      <img src={avatar1} alt="1" />
                      <img src={avatar2} alt="2" />
                      <img src={avatar3} alt="3" />
                      <img src={avatar4} alt="4" />
                      <img src={avatar5} alt="5" />
                    </div>
                    <div className="avatar-description">
                    <p >64 major creators</p>

                    </div>


                  </div>
                  <div>
                    <svg width="294" height="1" viewBox="0 0 294 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="2.18557e-08" y1="0.75" x2="294" y2="0.750026" stroke="black" stroke-width="0.5"/>
                    </svg>
                    </div>
                </div>
                <div className="product-content-container">
                <div className="product-bg2">
                <div className="bg-button"> <button className="button">
                  <img src={arrowButton} />
                </button> </div> 
                  <div className="boolean-header-container">
                  <h1 className="boolean-header">
                    Are We There Yet ?
                    </h1>
                </div>
                  </div>
                  <div className="paragraph-container">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim natus architecto officiis modi tempore? Saepe cupiditate voluptas quod eveniet nostrum. Repudiandae blanditiis odio, quasi doloremque quia expedita veniam ratione atque?
                      Nulla
                    </p>
                  
                  <div className="Avatar-container">
                  <div>
                      <img src={avatar1} alt="1" />
                      <img src={avatar2} alt="2" />
                      <img src={avatar3} alt="3" />
                      <img src={avatar4} alt="4" />
                      <img src={avatar5} alt="5" />
                    </div>
                    <div className="avatar-description">
                    <p >64 major creators</p>

                    </div>

                  </div>
                  <div>
                    <svg width="294" height="1" viewBox="0 0 294 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="2.18557e-08" y1="0.75" x2="294" y2="0.750026" stroke="black" stroke-width="0.5"/>
                    </svg>
                    </div>
                  </div>
              
                </div>
                <div className="product-content-container">
                <div className="product-bg3">
                <div className="bg-button"> <button className="button">
                  <img src={arrowButton} />
                </button> </div>
                  <div className="boolean-header-container">
                    <h1 className="boolean-header">
                      Oloibiri 1997 
                      </h1>
                    </div>
                  </div>
                  <div className="paragraph-container">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim natus architecto officiis modi tempore? Saepe cupiditate voluptas quod eveniet nostrum. Repudiandae blanditiis odio, quasi doloremque quia expedita veniam ratione atque?
                    Nulla
                  </p>
                  <div className="Avatar-container">
                  <div>
                      <img src={avatar1} alt="1" />
                      <img src={avatar2} alt="2" />
                      <img src={avatar3} alt="3" />
                      <img src={avatar4} alt="4" />
                      <img src={avatar5} alt="5" />
                    </div>
                    <div className="avatar-description">
                    <p >64 major creators</p>

                    </div>
                    </div>
            
                  <div>
                    <svg width="159" height="1" viewBox="0 0 159 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="2.18557e-08" y1="0.75" x2="159" y2="0.750014" stroke="black" stroke-width="0.5"/>
                    </svg>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            :
            
            <div className="pc-home-product-container">
              <div className="pc-home-product-header">
                <h1>
                Featured products
                </h1>
              </div>
              <div className="pc-product-block">
                <div className="pc-productimg-container">
                  <img src={image1} alt="boolean" />
                </div>
              <div className="pc-product-container2">
                <div className="pc-product-container2-content1">
                  <h2>
                  The Boolean Egyptian
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur
                  </p>
                </div>
                <div className="pc-Avatar-container">
                      <div className="pc-Avatar-container1">
                        <div className="pc-Avatar-container-content">
                            <img src={avatar1} alt="1" />
                            <img src={avatar2} alt="2" />
                            <img src={avatar3} alt="3" />
                            <img src={avatar4} alt="4" />
                            <img src={avatar5} alt="5" />
                          </div>
                          <div className="pc-avatar-description">
                          <p >64 major creators</p>

                          </div>
                      </div>
                  
                      <button>
                      <svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13C0 12.617 0.1505 12.2496 0.418392 11.9788C0.686284 11.7079 1.04962 11.5558 1.42848 11.5558H35.1206L26.1298 2.46859C25.8615 2.1974 25.7108 1.82959 25.7108 1.44607C25.7108 1.06255 25.8615 0.694733 26.1298 0.423543C26.398 0.152353 26.7618 9.03605e-09 27.1411 0C27.5205 -9.03605e-09 27.8843 0.152353 28.1525 0.423543L39.5803 11.9775C39.7134 12.1116 39.8189 12.271 39.8909 12.4465C39.9629 12.6219 40 12.81 40 13C40 13.19 39.9629 13.3781 39.8909 13.5535C39.8189 13.729 39.7134 13.8884 39.5803 14.0225L28.1525 25.5765C27.8843 25.8476 27.5205 26 27.1411 26C26.7618 26 26.398 25.8476 26.1298 25.5765C25.8615 25.3053 25.7108 24.9375 25.7108 24.5539C25.7108 24.1704 25.8615 23.8026 26.1298 23.5314L35.1206 14.4442H1.42848C1.04962 14.4442 0.686284 14.2921 0.418392 14.0212C0.1505 13.7504 0 13.383 0 13Z" fill="#616161"/>
                      </svg>
                      </button>
                    </div>
                    </div>
            </div>
              <div className="pc-product-block alt">
                <div className="pc-productimg-container">
                  <img src={image2} alt="boolean" />
                </div>
              <div className="pc-product-container2">
                <div className="pc-product-container2-content1">
                  <h2>
                  The Boolean Egyptian
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur
                  </p>
                </div>
                <div className="pc-Avatar-container">
                      <div className="pc-Avatar-container1">
                        <div className="pc-Avatar-container-content">
                            <img src={avatar1} alt="1" />
                            <img src={avatar2} alt="2" />
                            <img src={avatar3} alt="3" />
                            <img src={avatar4} alt="4" />
                            <img src={avatar5} alt="5" />
                          </div>
                          <div className="pc-avatar-description">
                          <p >64 major creators</p>

                          </div>
                      </div>
                  
                      <button>
                      <svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13C0 12.617 0.1505 12.2496 0.418392 11.9788C0.686284 11.7079 1.04962 11.5558 1.42848 11.5558H35.1206L26.1298 2.46859C25.8615 2.1974 25.7108 1.82959 25.7108 1.44607C25.7108 1.06255 25.8615 0.694733 26.1298 0.423543C26.398 0.152353 26.7618 9.03605e-09 27.1411 0C27.5205 -9.03605e-09 27.8843 0.152353 28.1525 0.423543L39.5803 11.9775C39.7134 12.1116 39.8189 12.271 39.8909 12.4465C39.9629 12.6219 40 12.81 40 13C40 13.19 39.9629 13.3781 39.8909 13.5535C39.8189 13.729 39.7134 13.8884 39.5803 14.0225L28.1525 25.5765C27.8843 25.8476 27.5205 26 27.1411 26C26.7618 26 26.398 25.8476 26.1298 25.5765C25.8615 25.3053 25.7108 24.9375 25.7108 24.5539C25.7108 24.1704 25.8615 23.8026 26.1298 23.5314L35.1206 14.4442H1.42848C1.04962 14.4442 0.686284 14.2921 0.418392 14.0212C0.1505 13.7504 0 13.383 0 13Z" fill="#616161"/>
                      </svg>
                      </button>
                    </div>
                    </div>
            </div>
              <div className="pc-product-block">
                <div className="pc-productimg-container">
                  <img src={image3} alt="boolean" />
                </div>
              <div className="pc-product-container2">
                <div className="pc-product-container2-content1">
                  <h2>
                  The Boolean Egyptian
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur
                  </p>
                </div>
                <div className="pc-Avatar-container">
                      <div className="pc-Avatar-container1">
                        <div className="pc-Avatar-container-content">
                            <img src={avatar1} alt="1" />
                            <img src={avatar2} alt="2" />
                            <img src={avatar3} alt="3" />
                            <img src={avatar4} alt="4" />
                            <img src={avatar5} alt="5" />
                          </div>
                          <div className="pc-avatar-description">
                          <p >64 major creators</p>

                          </div>
                      </div>
                  
                      <button>
                      <svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13C0 12.617 0.1505 12.2496 0.418392 11.9788C0.686284 11.7079 1.04962 11.5558 1.42848 11.5558H35.1206L26.1298 2.46859C25.8615 2.1974 25.7108 1.82959 25.7108 1.44607C25.7108 1.06255 25.8615 0.694733 26.1298 0.423543C26.398 0.152353 26.7618 9.03605e-09 27.1411 0C27.5205 -9.03605e-09 27.8843 0.152353 28.1525 0.423543L39.5803 11.9775C39.7134 12.1116 39.8189 12.271 39.8909 12.4465C39.9629 12.6219 40 12.81 40 13C40 13.19 39.9629 13.3781 39.8909 13.5535C39.8189 13.729 39.7134 13.8884 39.5803 14.0225L28.1525 25.5765C27.8843 25.8476 27.5205 26 27.1411 26C26.7618 26 26.398 25.8476 26.1298 25.5765C25.8615 25.3053 25.7108 24.9375 25.7108 24.5539C25.7108 24.1704 25.8615 23.8026 26.1298 23.5314L35.1206 14.4442H1.42848C1.04962 14.4442 0.686284 14.2921 0.418392 14.0212C0.1505 13.7504 0 13.383 0 13Z" fill="#616161"/>
                      </svg>
                      </button>
                    </div>
                    </div>
            </div>
                   
            </div>
            }
    </div>
    
  )
}

export default Products