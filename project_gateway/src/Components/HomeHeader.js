import "../ComponentStyles/homeHeader.css";
import favicon from "../images/favicon.png";
import landing_main1 from "../images/landing_main1.png";
import HomePayments from "./HomePayments";

const HomeHeader = ()=>{
    return(
        <div>
            <div className="home_header">
                <img src ={favicon} alt ="firespot"/>
                <div className ="uom_label">UCSC Payment Management System</div>
            </div>
            <div className="gradient">
                <div className= "home_label_main">
                    <button className="home_label_1">Secure Payment</button>
                    <div className="home_label_2">
                        <span>Get the all payment ready in a second</span>
                    </div>
                    <div className="home_label_3">
                        <span>
                            The University of Colombo School of Computing (UCSC) is the country's leading technological
                            higher education institution, succeeding locally and
                            internationally. This gateway is for quick and secure university
                            related payments.
                        </span>
                    </div>
                </div>
                <div className="home_image_main">
                    <img className="home_image" src={landing_main1} alt="firespot"/>
                </div>
            </div>
            <div>
                 <HomePayments/>
            </div>
        </div>  
    );
};

export default HomeHeader;