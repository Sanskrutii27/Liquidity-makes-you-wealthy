import React from 'react';
import './Sidebar.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsFillDoorOpenFill } from 'react-icons/bs';
import { IoMdSettings } from "react-icons/io";
import img22 from "./Images/liquidity.png";
import { Link,useNavigate } from 'react-router-dom'; 

const Sidebar = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout =()=>{
    localStorage.clear();
    navigate('/')
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top" style={{ height: '95px', marginLeft: '0px'}}>
      <Container>
        <Navbar.Brand href="#home"><img src={img22} width="175.15" height="70" className="d-inline-block align-top" 
        alt="Liquidity logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="sidebar1" />
        <Navbar.Collapse id="sidebar1">
          <Nav className="me-auto" style={{marginLeft:'1020px'}}>
            <NavDropdown title="Dashboard" id="sidebar2">
              <Link to="/charts" className="dropdown-item">
                Charts
              </Link>
              <NavDropdown.Divider />
              <Link to="/news" className="dropdown-item">
                News
              </Link>
              <NavDropdown.Divider />
              <Link to="/economic_calender" className="dropdown-item">
                Economic Calender
              </Link>
              <NavDropdown.Divider />
              <Link to="/forex_heatmap" className="dropdown-item">
                Forex Heatmap
              </Link>
              <NavDropdown.Divider />
              <Link to="/stock_heatmap" className="dropdown-item">
                Stock Heatmap
              </Link>
              <NavDropdown.Divider />
              <Link to="/crypto_heatmap" className="dropdown-item">
                Crypto Heatmap
              </Link>
              <NavDropdown.Divider />
              <Link to="/forex_cross_rates" className="dropdown-item">
                Forex Cross Rates
              </Link>
            </NavDropdown>
            <NavDropdown title="Tools" id="sidebar2">
              <Link to="/currency_converter" className="dropdown-item">
                Currency Converter
              </Link>
              <NavDropdown.Divider />
              <Link to="/pip_calculator" className="dropdown-item">
                Pip Calculator
              </Link>
              <NavDropdown.Divider />
              <Link to="/position_size_calculator" className="dropdown-item">
                Position Size Calculator
              </Link>
              <NavDropdown.Divider />
              <Link to="/profitcalculator" className="dropdown-item">
                Profit Calculator
              </Link>
              <NavDropdown.Divider />
              <Link to="/margincalculator" className="dropdown-item">
                Margin Calculator
              </Link>
            </NavDropdown>
            <NavDropdown title={JSON.parse(auth).username} id="sidebar2">
              <Link to="/personalinfo" className="dropdown-item">
                <IoMdSettings color='grey'/>Settings
              </Link>
              <NavDropdown.Divider />
              <Link onClick={logout} to="/" className="dropdown-item">
                <BsFillDoorOpenFill color='grey'/>Logout
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Sidebar;
