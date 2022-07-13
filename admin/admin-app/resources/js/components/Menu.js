import React, { Component, Fragment } from 'react';
import { Navbar, NavLink } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faBookOpen,
    faCode,
    faComment,
    faEnvelope,
    faFolder,
    faHome,
    faPowerOff
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class Menu extends Component {

    constructor() {
        super();
        this.state = {
            sideNav: false,
            sideNavClass: "sidenavClose",
            mainDivOverlay: "main-overlay-close"
        }
        // this.showHideSideNav = this.showHideSideNav.bind(this)
    }

    showHideSideNav = () => {
        if (this.state.sideNav === false) {
            this.setState({ sideNav: true, NavText: "", sideNavClass: "sidenavOpen", mainDivOverlay: "main-overlay-open" })
        }
        else {
            this.setState({ sideNav: false, NavText: "d-none", sideNavClass: "sidenavClose", mainDivOverlay: "main-overlay-close" })
        }
    }

    render() {
        return (
            <>
                <title>{this.props.title}</title>
                <Navbar expand="lg" className="fixed-top shadow-sm bg-white mb-5 py-3" variant="light" bg="white">
                    <Navbar.Brand onClick={this.showHideSideNav} href="#" className="ms-2"><FontAwesomeIcon icon={faBars} /></Navbar.Brand>
                    <b>ADMIN DASHBOARD</b>
                </Navbar>

                <div className={this.state.sideNavClass}>
                    <NavLink><Link className="my-0 p-2 text-white text-decoration-none" to="/"> <FontAwesomeIcon icon={faHome} /> Home</Link></NavLink>
                    <NavLink><Link className="my-0 p-2 text-white text-decoration-none" to="/course"> <FontAwesomeIcon icon={faHome} /> Courses</Link></NavLink>
                    <NavLink><Link className="my-0 p-2 text-white text-decoration-none" to="project"> <FontAwesomeIcon icon={faHome} /> Projects</Link></NavLink>
                    <NavLink><Link className="my-0 p-2 text-white text-decoration-none" to="service"> <FontAwesomeIcon icon={faHome} /> Services</Link></NavLink>
                    <NavLink><Link className="my-0 p-2 text-white text-decoration-none" to="review"> <FontAwesomeIcon icon={faHome} /> Review</Link></NavLink>
                    <NavLink><Link className="my-0 p-2 text-white text-decoration-none" to="contact"> <FontAwesomeIcon icon={faHome} /> Contact</Link></NavLink>
                </div>

                <div onClick={this.showHideSideNav} className={this.state.mainDivOverlay}>

                </div>

                <div className="mt-5">
                    {this.props.children}
                </div>
            </>
        );
    }
}

export default Menu;
