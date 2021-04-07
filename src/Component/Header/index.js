import React from "react";
import Logoimg from "../../Assect/Logo.png";
import Menuimg from "../../Assect/Menu.png";
import Styles from "./Header.module.css";
class Header extends React.Component{
  render(){
    return(
        <div className={Styles.container}>
         <div className={Styles.logobox}> 
           <img  className={Styles.logo} src={Logoimg} alt='image'/>
          </div>  
         <div className={Styles.menubox} onClick={this.props.Display}>
           <img className={Styles.menu} src={Menuimg} alt='image'/>
          </div>
        </div>
    )
 }
}
export default Header;