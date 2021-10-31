import React, {Component, Fragment} from 'react';
import {Navbar, NavLink} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
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
import {Link} from "react-router-dom";

class Menu extends Component {

    constructor() {
        super();
        this.state={
            sideNav:false,
            sideNavClass:"sidenavClose",
            mainDivOverlay:"main-overlay-close"
        }
    }

    showHideSideNav=()=>{
        if(this.state.sideNav===false){
            this.setState({sideNav:true,NavText:"",sideNavClass:"sidenavOpen",mainDivOverlay:"main-overlay-open"})
        }
        else {
            this.setState({sideNav:false,NavText:"d-none",sideNavClass:"sidenavClose",mainDivOverlay:"main-overlay-close"})
        }
    }

    render() {
        return (
            <Fragment>
                <Navbar  expand="lg" className="fixed-top shadow-sm bg-white mb-5 py-3" variant="light" bg="white">
                    <Navbar.Brand onClick={this.showHideSideNav} href="#"><FontAwesomeIcon icon={faBars} /></Navbar.Brand>
                    <b>ADMIN DASHBOARD</b>
                </Navbar>

                <div className={this.state.sideNavClass}>
                    <NavLink className="NavItem" to=""> <FontAwesomeIcon icon={faHome} /> Home</NavLink>
                </div>

                <div onClick={this.showHideSideNav} className={this.state.mainDivOverlay}>

                </div>
            </Fragment>
        );
    }
}

export default Menu;
