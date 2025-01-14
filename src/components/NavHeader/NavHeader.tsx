import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useNavigate } from "react-router";

function NavHeader() {
    const [nav, setNav] = useState('home');

    useEffect(() => {
        // You can add any side effects here if needed
        // For example, you might want to log the current nav state
        console.log(`Current active nav: ${nav}`);
    }, [nav]); // Dependency array includes 'nav' to run effect when 'nav' changes

    let navigate = useNavigate();

    return (
        <>
            <Navbar bg="success" expand="lg" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand>Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto">
                            <Nav.Link 
                                className={nav === 'home' ? 'active' : ''} 
                                onClick={(e) => {
                                    setNav('home');
                                    navigate("/home");
                                }}
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link 
                                className={nav === 'transaksi' ? 'active' : ''} 
                                onClick={(e) => {
                                    setNav('transaksi');
                                    navigate("/transaksi");
                                }}
                            >
                                Transaksi
                            </Nav.Link>
                            <Nav.Link href="#aset">Aset</Nav.Link>
                            <Nav.Link href="#pembayaran">Pembayaran</Nav.Link>
                        </Nav>
                        <Nav className="mx-5">    
                            <NavDropdown title="Hadi" id="navbarScrollingDropdown">
                                <NavDropdown.Item className="success" href="#action3">Pengaturan</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action3">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavHeader;