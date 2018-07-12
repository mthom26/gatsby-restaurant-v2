import React, { Fragment } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

// ToDo: Add padding 56px to the top of the body to push content down

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { isOpen } = this.state;

    return (
      <Navbar fixed="top" color="dark" dark expand="md">
        <NavbarBrand href="/">Restaurant</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/food">Food</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/drinks">Drinks</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  } 
}

export default NavBar;
