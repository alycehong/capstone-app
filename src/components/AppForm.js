import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AppForm(props) {
    return (
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="text-center">Distance</Form.Label>
            <Form.Control type="email" placeholder="Enter distance" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-center">Direction</Form.Label>
            <Form.Control type="email" placeholder="Enter direction" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-center">Time</Form.Label>
            <Form.Control type="password" placeholder="Enter time" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
    )
}

export default AppForm;