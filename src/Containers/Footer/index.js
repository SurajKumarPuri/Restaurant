import React from "react";
import styles from "./Footer.module.css";
function Footer(){
    return(
        <div className={styles.container3}>
            <div className={styles.line}></div>
            <div className={styles.contant}>
                <div className={styles.textbox}>
                    <span className={styles.text1}>@ Copyright 2010 - 2016, Feast.</span>
                    <span className={styles.text2}>All rights reserved</span>
                </div>
                <p className={styles.text3}>Home | About us | Menu | Gallery | Contact us</p>
            </div>
        </div>
    )
}
export default Footer;