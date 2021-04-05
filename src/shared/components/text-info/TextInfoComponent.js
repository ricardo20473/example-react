import React from "react";
import { Row, Col, Jumbotron } from "reactstrap";

const TextInfoComponent = ({ title, description }) => {
  return (
    <Row>
      <Col md={12}>
        <Jumbotron>
          <h2 className="display-4">{title}</h2>
          <p className="lead">{description}</p>
        </Jumbotron>
      </Col>
    </Row>
  );
};

export default TextInfoComponent;
