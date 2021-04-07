import React from "react";
import Styles from "./Navbar.module.css";
class Navbar extends React.Component{
    render(){
    return(
        <div className={`${Styles.container1} ${this.props.data?Styles.container1:Styles.container2}`}>
          <div className={Styles.menutext}>Home</div>
          <div className={Styles.menutext}>About us</div>
          <div className={Styles.menutext}>Menu</div>
          <div className={Styles.menutext}>Gallery</div>
          <div className={Styles.menutext}>Contact us</div>
        </div>
    )
 }
}
export default Navbar;