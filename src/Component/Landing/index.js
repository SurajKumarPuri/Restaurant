import React from "react";
import Styles from "./Landing.module.css";
import Slideimg from "../../Assect/Slide.png";
function Landing(){
    return(
        <div className={Styles.slidebox}>
            <img className={Styles.slide} src={Slideimg} alt='image'/>
        </div>
    )
}
export default Landing;