import React from "react";
import styles from "./MainMenu.module.css";
import Chefimg from "../../Assets/Chef.png";
import Image_1 from "../../Assets/Image__1.png";
import Image_2 from "../../Assets/Image__2.png";
import Image_3 from "../../Assets/Image__3.png";
import Paragraph from "../../Components/Paragraph";
import Picture from "../../Components/Picture";
function Section(){
    return(
        <div className={styles.container1}>
        <h2 className={styles.headingtext1}>Welcome</h2>
       <div className={styles.contant1}> 
       <div className={styles.imagebox}>
            <Picture className={styles.image} url={Chefimg}/>
        </div>
      <div className={styles.textbox}>
      <Paragraph className={styles.text} value='Lorem ipsium dolor sit amet,consecteluer adipiscing elit,sed diam nonummy ni bh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in d minim veniam, quis m, quis nostrud exerci tation ullamcorper suscipit lob ortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in d minim veniam,quis'/>
      </div>
      </div>
        <h2 className={styles.headingtext1}>Special Offers</h2>
       <div className={styles.contant2}>
            <div className={styles.imagebox}>
            <Picture className={styles.image} url={Image_1}/>
        </div>
        <div className={styles.textbox}>
            <h3 className={styles.headingtext2}>Afghani chicken kabab</h3>
        <Paragraph className={styles.text} value='od tincidunt ut laoreet dolore magna aliquam erat vol dolor sit amet, co nsec tetuer adipiscing elit, sed diam nonummy nibh eem vel eum iriure dolor in hen drerit in d minim veniam, quis m, quis nostrud ex'/>
        </div>
        </div>
        <div className={styles.contant2}>
        <div className={styles.imagebox}>
            <Picture className={styles.image} url={Image_2}/>
        </div>
        <div className={styles.textbox}>
            <h3 className={styles.headingtext2}>Chicken hot & spicy pizza</h3>
        <Paragraph className={styles.text} value='od tincidunt ut laoreet dolore magna aliquam erat vol dolor sit amet, co nsec tetuer adipiscing elit, sed diam nonummy nibh eem vel eum iriure dolor in hen drerit in d minim veniam, quis m, quis nostrud ex'/>
        </div>
        </div>
        <div className={styles.contant2}>
        <div className={styles.imagebox}>
            <Picture className={styles.image} url={Image_3}/>
        </div>
        <div className={styles.textbox}>
            <h3 className={styles.headingtext2}>Marinated Grilled Shrimp</h3>
        <Paragraph className={styles.text} value='od tincidunt ut laoreet dolore magna aliquam erat vol dolor sit amet, co nsec tetuer adipiscing elit, sed diam nonummy nibh eem vel eum iriure dolor in hen drerit in d minim veniam, quis m, quis nostrud ex'/>
        </div>
        </div>
        </div>
    )
}
export default Section;