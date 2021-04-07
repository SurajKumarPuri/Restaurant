import React from "react";
import styles from "./Aside2.module.css";
function Aside2(){
    return(
        <div className={styles.container}>
            <div className={styles.contant}>
             <div className={styles.heading}>
                 <h4 className={styles.headingtext}>Features</h4>
             </div>
             <p className={styles.text}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat vol dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat vol </p>
             <div className={styles.heading}>
                 <h4 className={styles.headingtext}>New Summer Menu</h4>
             </div>
             <li className={styles.listitem}>Chicken Schnitzel</li>
             <li className={styles.listitem}>Chicken Parmigiana</li>
             <li className={styles.listitem}>Prawn Caesar Salad</li>
             <li className={styles.listitem}>Thai Noodle Salad</li>
             <li className={styles.listitem}>Blackened Chicken Supreme</li>
             <div className={styles.heading}>
                 <h4 className={styles.headingtext}>We are Open</h4>
             </div>
             <div className={styles.schedule}>
                 <p className={styles.day}>Monday - Friday</p>
                 <p className={styles.time}>8 AM - 10:30 PM</p>
             </div>
             <div className={styles.schedule}>
                 <p className={styles.day}>Saturday - Sunday</p>
                 <p className={styles.time}>8 AM - 11:30 PM</p>
             </div>
             </div>
        </div>
    )
}
export default Aside2;