import React from "react";
import "./Changepass.css";
import Settings from "./Settings";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Footor from "./Footor";

const Changepass = () => {
  return (
    <div>
      <div className="changepass1">
        <Settings />
        <div className="changepass2">
          <Container fluid="md" className="changepass3">
            <Row>
              <Col style={{ textAlign: "center" }}>
                <h1>Change Password</h1>
                <div className="changepass4">
                  <Form className="changepass5">
                    <Form.Group
                      className="changepass5"
                      controlId="formBasicPassword1"
                    >
                      <Form.Control
                        type="password"
                        placeholder=" Old Password"
                        size="lg"
                      />
                    </Form.Group>

                    <Form.Group
                      className="changepass5"
                      controlId="formBasicPassword2"
                    >
                      <Form.Control
                        type="password"
                        placeholder=" New Password"
                        size="lg"
                      />
                    </Form.Group>

                    <Form.Group
                      className="changepass5"
                      controlId="formBasicPassword3"
                    >
                      <Form.Control
                        type="password"
                        placeholder=" Confirm Password"
                        size="lg"
                      />
                    </Form.Group>

                    <Button
                      variant="primary"
                      type="submit"
                      size="lg"
                      style={{
                        backgroundColor: "#022c64",
                        borderColor: "#636BFF",
                        fontSize: "18px",
                        marginTop: "15px",
                        marginLeft: "80px"

                      }}
                    >
                      {" "}
                      Save{" "}
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footor />
    </div>
  );
};

export default Changepass;