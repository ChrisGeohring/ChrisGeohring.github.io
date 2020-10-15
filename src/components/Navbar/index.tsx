import React, { Component } from "react";
import { Collapse, Container, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import "./index.scss";

interface NavProps {
  isOpen: boolean;
}
export default class MyNavbar extends Component<{}, NavProps> {
  constructor(props: any) {
    super(props);
    this.state = { isOpen: false };
  }

  toggle = (): void => {
    const cs = this.state.isOpen;
    this.setState({ isOpen: !cs });
  };

  isDarkMode = (): boolean => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  render() {
    return (
      <div>
        <Navbar
          color="faded"
          dark={this.isDarkMode()}
          light={!this.isDarkMode()}
          expand="md"
          fixed="top"
          id="my-navbar"
        >
          <Container>
            <NavbarBrand href="#home" className="mr-auto" id="navbrand">
              Chris Geohring
            </NavbarBrand>
            <NavbarToggler id="navbar-toggle" onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#projects">Projects</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#contact">Contact</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
