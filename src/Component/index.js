import React from "react";
import Header from "../Component/Header";
import Navbar from "../Component/Navbar";
import Landing from "../Component/Landing";
import styles from "./Component.module.css";
import Aside from "./Aside";
import Footer from "./Footer";
class Webapp extends React.Component{
    constructor(props){
        super(props)
        this.state={data:false}
    }
    Changedata=()=>{
       this.setState({data:!this.state.data})
    }
    render(){
    return(
        <div className={styles.container}>
            <Header Display={this.Changedata} />
            <Navbar data={this.state.data}/>
            <Landing/>
            <Aside/>
            <Footer/>
        </div>
    )
 }
}
export default Webapp;