import { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"

function NavHeader() {
    const [isActiveLinkHome, setIsActiveLinkHome] = useState("home");

    const styleKata = {
        color: "white"
    }

    const getLinkClassName = (link) => {
        let customClassname: string = "";
        // if (isActive) {
        //     customClassname = "text-white"; 
        // } else {
        //     customClassname = "text-primary"
        // }
        return customClassname;
    }
    const styleItemNavlink = {
        textDecorationLine: "none", 
        color: "whitesmoke"
    }

    function test() {
        setIsActive(true);
        console.log(isActive);
        
    }

    return (
        <>
            <Navbar bg="success" expand="lg" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand>Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            style={{ maxHeight: '100px' }}  
                            navbarScroll
                        ></Nav>
                        <Nav className="me-auto">
                            <Nav.Link href="/home" className="active"> Home
                                {/* <NavLink
                                to="/home" 
                                className={customStyle()}
                                className={({isActive}) => isActive ? "active": "inactive"}
                                className="active"
                                onClick={test}
                                >
                                    Home
                                </NavLink> */}
                            </Nav.Link>
                            <Nav.Link href="/transaksi" className="">Transaksi</Nav.Link>
                            <Nav.Link href="#aset">Aset</Nav.Link>
                            <Nav.Link href="#pembayaran">Pembayaran</Nav.Link>
                        </Nav>
                        <Nav className="mx-5">    
                            <NavDropdown style={styleKata} title="Hadi" id="navbarScrollingDropdown">
                                <NavDropdown.Item className="success" href="#action3">pengaturan</NavDropdown.Item>
                                <NavDropdown.Divider></NavDropdown.Divider>
                                <NavDropdown.Item href="#action3">logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavHeader