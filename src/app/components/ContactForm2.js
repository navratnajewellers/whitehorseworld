"use client";

import { useState } from "react";
import {
  Button,
  ButtonToolbar,
  Col,
  Container,
  Form,
  Input,
  Row,
} from "rsuite";

const ContactForm2 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  return (
    <Container>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12}>
          <h2>Image</h2>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Form>
            <Form.Group controlId="name">
              <Form.ControlLabel>Name</Form.ControlLabel>
              <Form.Control name="name" />
              <Form.HelpText>Required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.ControlLabel>Email</Form.ControlLabel>
              <Form.Control name="email" type="email" />
              <Form.HelpText>Required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="subject">
              <Form.ControlLabel>Subject</Form.ControlLabel>
              <Form.Control name="subject" placeholder="Enter Subject" />
              <Form.HelpText>Required</Form.HelpText>
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Message</Form.ControlLabel>
              <Input
                name="message"
                as="textarea"
                rows={5}
                value={formData.message}
                // onChange={(value) => handleChange(value, "message")}
                placeholder="Write your message here"
              />
            </Form.Group>
            <Form.Group>
              <ButtonToolbar>
                <Button appearance="primary">Submit</Button>
              </ButtonToolbar>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm2;
