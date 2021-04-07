import React from "react";
import styles from "./Aside.module.css";
import Aside1 from "./Aside1";
import Aside2 from "./Aside2";
function Aside(){
    return(
        <div className={styles.container}>
          <Aside1/>
          <Aside2/>
        </div>
    )
}
export default Aside;