import React from "react";
import {Nav, Navbar} from "react-bootstrap";

const NavBar = ({setCurrPage}) => {
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" sticky={"top"}>
            <Navbar.Brand href="#home">Movie Catalogue</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick = {()=>{setCurrPage('now_playing')}}>Now Playing</Nav.Link>
                    <Nav.Link onClick = {()=>{setCurrPage('popular')}}>Popular</Nav.Link>
                    <Nav.Link onClick = {()=>{setCurrPage('top_rated')}}>Top Rated</Nav.Link>
                    <Nav.Link onClick = {()=>{setCurrPage('upcoming')}}>Upcoming</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};
export default NavBar;
