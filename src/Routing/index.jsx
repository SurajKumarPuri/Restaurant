import React from "react";
import {Switch,Route,BrowserRouter as Router  } from "react-router-dom";
import About from "../Page/AboutUs";
import Contact from "../Page/ContactUs";
import Gallery from "../Page/Gallery";
import Restaurant from "../Page/Home";
import Menu from "../Page/Menu";
function Routes(){
    return(
        <Router>
        <Switch>
            <Route path='/' exact component={Restaurant}/>
            <Route path='/aboutus' exact component={About}/>
            <Route path='/menu' exact component={Menu}/>
            <Route path='/gallery' exact component={Gallery}/>
            <Route path='/contactus'  component={Contact}/>
        </Switch>
        </Router>
    )
}
export default Routes;