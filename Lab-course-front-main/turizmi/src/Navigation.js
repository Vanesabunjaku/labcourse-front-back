import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

export class Navigation extends Component{

    render(){
        return(
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                    Home
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/Parku">
                    Parku
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/Shpellat">
                    Shpellat
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/MonumentetHistorike">
                    MonumentetHistorike
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/VendeNatyrore">
                    VendeNatyrore
                </NavLink>

                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}