import React from "react";
import List from "../../Components/MenuList";
import Paragraph from "../../Components/Paragraph";
import styles from "./LeftSidebar.module.css";
function Aside(){
    return(
        <div className={styles.container}>
            <div className={styles.contant}>
             <div className={styles.heading}>
                 <h4 className={styles.headingtext}>Features</h4>
             </div>
             <Paragraph className={styles.text} value='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat vol dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat vol '/>
             <div className={styles.heading}>
                 <h4 className={styles.headingtext}>New Summer Menu</h4>
             </div>
             <List className={styles.listitem} value='Chicken Schnitzel'/>
             <List className={styles.listitem} value='Chicken Parmigiana'/>
             <List className={styles.listitem} value='Prawn Caesar Salad'/>
             <List className={styles.listitem} value='Thai Noodle Salad'/>
             <List className={styles.listitem} value='Blackened Chicken Supreme'/>
             <div className={styles.heading}>
                 <h4 className={styles.headingtext}>We are Open</h4>
             </div>
             <div className={styles.schedule}>
                 <Paragraph className={styles.day} value='Monday - Friday'/>
                 <Paragraph className={styles.time} value='8 AM - 10:30 PM'/>
             </div>
             <div className={styles.schedule}>
                 <Paragraph className={styles.day} value='Saturday - Sunday'/>
                 <Paragraph className={styles.time} value='8 AM - 11:30 PM'/>
             </div>
             </div>
        </div>
    )
}
export default Aside;