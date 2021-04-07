import React from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { useFormik } from "formik";
import * as Yup from 'yup';

// Sass
import "./Contact.scss";

// Shared/Components
import TextInfoComponent from "../../../shared/components/text-info/TextInfoComponent";

const Contact = () => {
  const title = "Contact";
  const description =
    "The contact page is one of the most important on your website. For most companies, it is usually one of the most visited pages. ... They include a call to action: this way they keep people on the website and offer another option in case they don't want to fill out the form.";

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El campo nombre es requerido"),
      email: Yup.string().email().required(),
      message: Yup.string().required()
    }),
    onSubmit: (formDate) => {
      console.log("formDate", formDate);
    },
  });

  // const clear = () => {
  //   formik.handleReset()
  // };

  return (
    <div className="contact">
      <div className="contact__child-content-top">
        <TextInfoComponent title={title} description={description} />
      </div>

      <div className="contact__child-form">
        <Form onSubmit={formik.handleSubmit}>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  className="form-control"
                  id="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                <p className="error">{formik.errors.name}</p>
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="text"
                  className="form-control"
                  id="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <p className="error">{formik.errors.email}</p>
              </FormGroup>
            </Col>

            <Col md={12}>
              <FormGroup>
                <Label for="message">Message</Label>
                <Input
                  type="textarea"
                  className="form-control"
                  id="message"
                  rows="3"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                />
                <p className="error">{formik.errors.message}</p>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Button type="submit" color="primary">
                Send
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
