import React from "react";
import {Switch, Route} from "react-router-dom";
import Landing from "./components/Landing";
import Pets from "./components/Pets";
import AboutUs from "./components/AboutUs";





export default (
    <Switch>
        <Route path="/pets" component={Pets} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route exact path="/" component={Landing} />
    </Switch>
) 