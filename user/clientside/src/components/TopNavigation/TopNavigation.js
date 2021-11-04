import React, { Component, Fragment } from 'react';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import whiteLogo from '../../asset/image/navlogo.svg'
import blueLogo from '../../asset/image/navlogoScroll.svg'
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'
import '../../asset/css/responsive.css'
import { NavLink } from "react-router-dom";
import Bounce from 'react-reveal/Bounce';
import Flip from 'react-reveal/Flip';

class TopNavigation extends Component {
    constructor(props) {
        super();
        this.state = {
            navBarTitle: "navTitle",
            navBarLogo: [whiteLogo],
            navVariant: "dark",
            navBarBack: "navBackground",
            navBarItem: "navItem",
            pageTitle: props.title

        }
    }

    onScroll = () => {
        if (window.scrollY > 100) {
            this.setState({ navVariant: 'light', navBarTitle: 'navTitleScroll', navBarLogo: [blueLogo], navBarBack: 'navBackgroundScroll', navBarItem: 'navItemScroll' })
        }
        else if (window.scrollY < 100) {
            this.setState({ navVariant: 'dark', navBarTitle: 'navTitle', navBarLogo: [whiteLogo], navBarBack: 'navBackground', navBarItem: 'navItem' })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }

    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <Navbar variant={this.state.navVariant} className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg">
                    <Bounce><Navbar.Brand ><NavLink className={this.state.navBarTitle} to="/"><img src={this.state.navBarLogo} /> Shimul Chakraborty</NavLink></Navbar.Brand></Bounce>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Flip left><Nav.Link><NavLink exact activeStyle={{ color: '#00a8ee' }} className={this.state.navBarItem} to="/">HOME</NavLink></Nav.Link></Flip>
                            <Flip right><Nav.Link><NavLink exact activeStyle={{ color: '#00a8ee' }} className={this.state.navBarItem} to="/services">SERVICES</NavLink></Nav.Link></Flip>
                            <Flip left><Nav.Link><NavLink exact activeStyle={{ color: '#00a8ee' }} className={this.state.navBarItem} to="/courses">COURSES</NavLink></Nav.Link></Flip>
                            <Flip right><Nav.Link><NavLink exact activeStyle={{ color: '#00a8ee' }} className={this.state.navBarItem} to="/portfolio">PORTFOLIO</NavLink></Nav.Link></Flip>
                            <Flip left><Nav.Link><NavLink exact activeStyle={{ color: '#00a8ee' }} className={this.state.navBarItem} to="/contact">CONTACT</NavLink></Nav.Link></Flip>
                            <Flip right><Nav.Link><NavLink exact activeStyle={{ color: '#00a8ee' }} className={this.state.navBarItem} to="/about">ABOUT</NavLink></Nav.Link></Flip>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment >
        );
    }
}

export default TopNavigation;