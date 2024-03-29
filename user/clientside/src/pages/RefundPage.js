import React, { Component, Fragment } from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import RefundDescription from "../components/RefundDescription/RefundDescription";

class RefundPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }
    render() {
        return (
            <>
                <TopNavigation title="Refund Policy" />
                <PageTop pagetitle="Refund Policy" />
                <RefundDescription />
                <Footer />
            </>
        );
    }
}

export default RefundPage;