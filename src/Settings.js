import React from "react";
import Sidebar from "./Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Settings.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className="settings1">
      <Sidebar />
      <div className="settings2">
        <Container fluid="md">
          <Row>
            <Col style={{ textAlign: "center"}}>
              <h4>
                <b>Accounts</b>
              </h4>
              <h5>
                Edit and manage your personal and account information here
              </h5>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="settings3">
        <Container fluid="md">
          <Row>
            <Col style={{ textAlign: "center" }}>
              <Link to="/personalinfo">
                <Button variant="light" style={{ marginBottom:"55px",color:"black",marginRight:"50px", backgroundColor:"white", width: '195px'}}><b>Personal Information</b></Button>
              </Link>
              {' | '}
              <Link to="/changepass">
                <Button variant="light" style={{ marginBottom:"55px",color:"black",marginLeft:"40px", backgroundColor:"white", width: '195px'}}><b>Change Password</b></Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Settings;
