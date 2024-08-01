import React from "react";
import "./PersonalInfo.css";
import Settings from "./Settings";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Footor from "./Footor";

const PersonalInfo = () => {
  return (
    <div>
      <div className="pi1">
        <Settings />
        <div className="pi2">
          <Container fluid="md" className="pi3" style={{ textAlign: "center" }}>
            <Row>
              <Col xs="auto" style={{ textAlign: "center" }}>
                <h1>Personal Information</h1>
                <div className="pi6">
                  <Form className="pi5">
                    <Form.Group
                      className="pi5"
                      controlId="formBasicPersanalinfo1"
                    >
                      <Form.Control
                        type="text"
                        placeholder="First Name"
                        size="lg"
                      />
                    </Form.Group>

                    <Form.Group
                      className="pi5"
                      controlId="formBasicPersanalinfo6"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Last Name"
                        size="lg"
                      />
                    </Form.Group>

                    <Form.Group
                      className="pi5"
                      controlId="formBasicPersanalinfo2"
                    >
                      <Form.Control type="email" placeholder="Email" size="lg" />
                    </Form.Group>

                    <Form.Group
                      className="pi5"
                      controlId="formBasicPersanalinfo3"
                    >
                      <Form.Select
                        defaultValue=""
                        placeholder="Select Gender"
                        size="lg"
                      >
                        <option value="" disabled hidden>
                          Select Gender
                        </option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Others">Others</option>
                        <option value="Not Specify">Not Specify</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group
                      className="pi5"
                      controlId="formBasicPersanalinfo4"
                    >
                      <Form.Control type="text" placeholder="Address" size="lg" />
                    </Form.Group>

                    <Form.Group
                      className="pi5"
                      controlId="formBasicPersanalinfo5"
                    >
                      <Form.Control
                        type="number"
                        placeholder="Postal Code"
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

export default PersonalInfo;
