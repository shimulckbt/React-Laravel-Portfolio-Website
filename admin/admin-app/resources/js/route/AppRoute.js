import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router";
import CoursesPage from "../pages/CoursesPage";
import ServicesPage from "../pages/ServicesPage";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import ProjectPage from "../pages/ProjectPage";
import ClientReviewPage from "../pages/ClientReviewPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/course" component={CoursesPage}/>
                    <Route exact path="/service" component={ServicesPage}/>
                    <Route exact path="/project" component={ProjectPage}/>
                    <Route exact path="/review" component={ClientReviewPage}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;
