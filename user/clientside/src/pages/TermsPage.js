import React, { Component, Fragment } from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import TermsDescription from "../components/TermsDescription/TermsDescription";

class TermsPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }
    render() {
        return (
            <>
                <TopNavigation title="Terms & Conditions" />
                <PageTop pagetitle="Terms & Conditions" />
                <TermsDescription />
                <Footer />
            </>
        );
    }
}

export default TermsPage;