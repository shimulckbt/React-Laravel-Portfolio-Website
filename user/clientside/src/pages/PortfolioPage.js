import React, { Component, Fragment } from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Portfolio from "../components/Portfolio/Portfolio";
import Footer from "../components/Footer/Footer";

class PortfolioPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }
    render() {
        return (
            <>
                <TopNavigation title="Portfolio" />
                <PageTop pagetitle="Portfolio" />
                <Portfolio />
                <Footer />
            </>
        );
    }
}

export default PortfolioPage;