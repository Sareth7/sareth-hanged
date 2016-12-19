import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


export default class AbyssNavbar extends React.Component {
    render() {
        const { first_name, last_name } = this.props.user;
        return (
            <div>
                <Navbar color="faded" dark fixed = "top">
                    <Nav className="float-xs-right" navbar>
                        <NavItem>
                            <NavLink href="#">{ first_name }</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}
