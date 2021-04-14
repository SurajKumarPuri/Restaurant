import React from "react";
import Styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
class Navbar extends React.Component{
    render(){
    return(
        <div className={`${Styles.container1} ${this.props.data?Styles.container1:Styles.container2}`}>
          <Link to='/' className={Styles.menutext}>Home</Link>
          <Link to='/aboutus' className={Styles.menutext}>About us</Link>
          <Link to='/menu' className={Styles.menutext}>Menu</Link>
          <Link to='gallery' className={Styles.menutext}>Gallery</Link>
          <Link to='/contactus' className={Styles.menutext}>Contact us</Link>
        </div>
    )
 }
}
export default Navbar;