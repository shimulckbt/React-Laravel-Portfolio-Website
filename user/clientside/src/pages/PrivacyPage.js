import React, { Component, Fragment } from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import PrivacyDescription from "../components/PrivacyDescription/PrivacyDescription";

class PrivacyPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }
    render() {
        return (
            <>
                <TopNavigation title="Privacy Policy" />
                <PageTop pagetitle="Privacy Policy" />
                <PrivacyDescription />
                <Footer />
            </>
        );
    }
}

export default PrivacyPage;