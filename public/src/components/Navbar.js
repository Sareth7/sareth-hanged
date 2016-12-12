import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


export default class Header extends React.Component {
    render() {
        return (
            <div>
                <Navbar color="faded" light>
                    <NavbarBrand href="/">Hanged Man</NavbarBrand>
                    <Nav className="float-xs-right" navbar>
                        <NavItem>
                            <NavLink href="/components/">Отзывы</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/Sareth7/sareth-hanged">Github</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}
