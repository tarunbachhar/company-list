import React from 'react'
import {Navbar, NavbarBrand, Nav ,NavItem,NavLink,Container} from 'reactstrap'
import Aux from '../hoc/aux'



const appNavBar =(props)=>(
    <Aux>
        <Navbar color="dark" dark expand="sm" className="mb-5">
            <Container>
                <NavbarBrand href="/"> Company List </NavbarBrand>
                <Nav navbar className="ml-auto">
                    <NavItem>
                        <NavLink href="https://github.com/tarunbachhar/company-list">
                            Github
                        </NavLink>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>   
    </Aux>
)

export default appNavBar