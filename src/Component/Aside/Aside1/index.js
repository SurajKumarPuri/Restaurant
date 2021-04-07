import React from "react";
import styles from "./Aside1.module.css";
import Chefimg from "../../../Assect/Chef.png";
import Image_1 from "../../../Assect/Image__1.png";
import Image_2 from "../../../Assect/Image__2.png";
import Image_3 from "../../../Assect/Image__3.png";
function Aside1(){
    return(
        <div className={styles.container}>
        <h2 className={styles.headingtext1}>Welcome</h2>
       <div className={styles.contant1}> 
       <div className={styles.imagebox}>
            <img className={styles.image} src={Chefimg}/>
        </div>
      <div className={styles.textbox}> <p className={styles.text}>Lorem ipsium dolor sit amet,consecteluer adipiscing elit,sed diam nonummy ni bh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in d minim veniam, quis m, quis nostrud exerci tation ullamcorper suscipit lob ortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in d minim veniam,quis</p></div>
      </div>
        <h2 className={styles.headingtext1}>Special Offers</h2>
       <div className={styles.contant2}>
            <div className={styles.imagebox}>
            <img className={styles.image} src={Image_1}/>
        </div>
        <div className={styles.textbox}>
            <h3 className={styles.headingtext2}>Afghani chicken kabab</h3>
        <p className={styles.text}> od tincidunt ut laoreet dolore magna aliquam erat vol dolor sit amet, co nsec tetuer adipiscing elit, sed diam nonummy nibh eem vel eum iriure dolor in hen drerit in d minim veniam, quis m, quis nostrud ex</p></div>
        </div>
        <div className={styles.contant2}>
        <div className={styles.imagebox}>
            <img className={styles.image} src={Image_2}/>
        </div>
        <div className={styles.textbox}>
            <h3 className={styles.headingtext2}>Chicken hot & spicy pizza</h3>
        <p className={styles.text}> od tincidunt ut laoreet dolore magna aliquam erat vol dolor sit amet, co nsec tetuer adipiscing elit, sed diam nonummy nibh eem vel eum iriure dolor in hendrerit in d minim veniam, quis</p></div>
        </div>
        <div className={styles.contant2}>
        <div className={styles.imagebox}>
            <img className={styles.image} src={Image_3}/>
        </div>
        <div className={styles.textbox}>
            <h3 className={styles.headingtext2}>Marinated Grilled Shrimp</h3>
        <p className={styles.text}> od tincidunt ut laoreet dolore magna aliquam erat vol dolor sit amet, co nsec tetuer adipiscing elit, sed diam nonummy nibh eem vel eum iriure dolor in hendrerit in d minim veniam, quis m,quis nost</p></div>
        </div>
        </div>
    )
}
export default Aside1;