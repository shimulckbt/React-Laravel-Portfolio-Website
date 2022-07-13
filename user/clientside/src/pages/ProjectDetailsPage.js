import React, { Component, Fragment } from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";

class ProjectDetailsPage extends Component {

    constructor({ match }) {
        super();

        this.state = {
            projectPassedID: match.params.projectID,
            projectPassedName: match.params.projectName
        }
    }

    componentDidMount() {
        window.scroll(0, 0)
    }
    render() {
        return (
            <>
                <TopNavigation title="Project Details" />
                <PageTop pagetitle={this.state.projectPassedName} />
                <ProjectDetails id={this.state.projectPassedID} />
                <Footer />
            </>
        );
    }
}

export default ProjectDetailsPage;