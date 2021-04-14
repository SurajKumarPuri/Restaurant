import React from "react";
import Styles from "./Landing.module.css";
import Slideimg from "../../Assets/Slide.png";
import Picture from "../../Components/Picture";
function Landing(){
    return(
        <div className={Styles.slidebox}>
            <Picture className={Styles.slide} url={Slideimg}/>
        </div>
    )
}
export default Landing;