import React from 'react'
import { Button } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown';
import Stack from 'react-bootstrap/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'
import {
    Routes,
    Route,
    Link,
} from "react-router-dom";

import Template2 from "../../templates/Template2";


const NavBarApp = (props) => {
    return (
        <div style={{height: '64px'}}>
            <Navbar bg="light" fixed='top' style={{padding: '8px', height: '64px'}}>
                <Button 
                    onClick={() => props.visibleSidebar((visible) => !visible)}
                >
                    <FontAwesomeIcon icon={faBars} />
                </Button>

                <Navbar.Brand href="#" className='ms-2'>
                    {/* <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '} */}
                    Working Logic
                </Navbar.Brand>
                
                    <Container className='justify-content-center'>
                        <Stack gap={2} direction={'horizontal'}>
                            <Form className="d-flex gap-0 column-gap-3">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Templates
                                </Dropdown.Toggle>

                                <Dropdown.Menu>    
                                    <Dropdown.Item href="/">
                                        Template 1
                                    </Dropdown.Item>
                                    <Dropdown.Item href="/template2">
                                        Template 2
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Stack>
                    </Container>
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                
            </Navbar>
        </div>
    )
}

export default NavBarApp