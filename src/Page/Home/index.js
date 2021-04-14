import React from "react";
import Header from "../../Containers/Header";
import Navbar from "../../Containers/Navbar";
import Landing from "../../Containers/Landing";
import styles from "./Home.module.css";
import Section from "../../Containers/MainMenu";
import Aside from "../../Containers/LeftSidebar";
import Footer from "../../Containers/Footer";
class Restaurant extends React.Component{
    constructor(props){
        super(props)
        this.state={data:false}
    }
    changeData=()=>{
       this.setState({data:!this.state.data})
    }
    render(){
    return(
        <div className={styles.container}>
            <Header Display={this.changeData} />
            <Navbar data={this.state.data}/>
            <Landing/>
            <Section/>
            <Aside/>
            <Footer/>
        </div>
    )
 }
}
export default Restaurant;