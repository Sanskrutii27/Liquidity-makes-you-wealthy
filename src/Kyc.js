import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MainNav from "./Components/MainNav";
import "./Kyc.css";
import Footor from "./Footor";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Kyc = () => {
  // State for storing the selected date
  const [selectedDate, setSelectedDate] = useState(null);
  // Handler for date change
  const handleDateChange = (date) => 
  {
    setSelectedDate(date);
  };

  return (
    <div>
      <div className="kyc1">
        <MainNav />
        <div className="kyc2">
          <Container fluid="md" className="kyc5">
            <Row>
              <Col xs="auto" style={{ textAlign: "center" }}>
                <h1>KYC</h1>
                <div className="kyc3">
                  <Form className="kyc4">
                    <Form.Group controlId="adharFile" className="kyc4">
                      <Form.Label>
                        <b>Select Adhar Card File:</b>
                      </Form.Label>
                      <Form.Control type="file" accept=".pdf" />
                    </Form.Group>

                    <Form.Group controlId="panFile" className="kyc4">
                      <Form.Label>
                        <b>Select Pan Card File:</b>
                      </Form.Label>
                      <Form.Control type="file" accept=".pdf" />
                    </Form.Group>

                    <Form.Group controlId="birthDate" className="kyc4">
                      <Form.Label>
                        {" "}
                        <b>Select Birth Date:</b>
                      </Form.Label>
                      <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        placeholderText="Click to select a date"
                      />
                    </Form.Group>

                    <Button
                      variant="primary"
                      type="submit"
                      size="lg"
                      style={{
                        backgroundColor: "#00204a",
                        borderColor: "#00204a",
                        fontSize: "18px",
                        marginTop: "15px",
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

export default Kyc;
