import logo from "../../assets/img/logo.png"
import "./Landing.css"

const Landing =()=>{
    return (
      <div className="backgroundmain">
        <div className="containershade">
            <div className="circle-container">
                <img src={logo} alt="logopic" className="logo"/>
            </div> 
            <div className="address">
                <h4>📍 Fake Street 1234 XL4000 FT </h4>  
            </div>
            <div className="startbutton hoverw">
                <a href="/orderpizza">ORDER NOW!</a>
            </div>
        </div>
      </div>
    );
  }
  
  export default Landing;