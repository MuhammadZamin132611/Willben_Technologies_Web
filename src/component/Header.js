import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import logo from '../assets/willben_technologies1.jpeg'
function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand ><Link to="/"><Image src={logo} rounded style={{height:"70px"}} /></Link></Navbar.Brand>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/">Home</Link>
                        <Link to="/about">About Us</Link>
                        <NavDropdown title="Services" id="basic-nav-dropdown">
                            <NavDropdown.Item ><Link to="/services/placement-traning">Placement and Traning</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to="/services/it-solution">IT Solution</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to="/services/financial-service">Financial Services</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to="/services/company-formation">Company Formation</Link></NavDropdown.Item>
                        </NavDropdown>
                        <Link to="/contact">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header