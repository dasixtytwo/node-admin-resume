import React from "react";
// React router
import { NavLink } from 'react-router-dom';
// Styled component
import styled from 'styled-components';
// Reactstrap components
import { Button, Card, CardBody, CardGroup, Col, Container, Form, FormFeedback, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
// Load image
import logoBrand from 'assets/images/logo/logo.png';

const Image = styled.img`
  margin-bottom: 10px;
  width: 45px;
  height: 48px;
  `;

export default function Login() {
	return (
		<div className="">
			<Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit='' noValidate autoComplete="off">
                      <h1><Image src={logoBrand} alt="Davide Agosti" /> Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          required
                          type="email"
                          placeholder="Email"
                          name="email"
                          id="email"
                          autoComplete="email"
                          invalid=''
                          value=''
                          onChange=''
                        />
                        <FormFeedback>error</FormFeedback>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type=''
                          name="password"
                          id="user-password"
                          value=''
                          onChange=''
                          invalid=''
                          placeholder="Password"
                          autoComplete="password" />
                        <InputGroupAddon addonType="append">
                          <InputGroupText onClick=''>
                            <i className="fa fa-eye-slash"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <FormFeedback>error</FormFeedback>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button type="submit" color="primary" className="px-4">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button
                            tag="a"
                            href="/"
                            color="link"
                            className="px-0">
                            Forgot password?
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                      <Image src={logoBrand} alt="Davide Agosti" />
                      <p>This is the Davide Agosti personal page, if you like and you like to have one like this, contact me.</p>
                      <NavLink to="/" color="primary" className="btn btn-primary mt-3">Contact Me!</NavLink>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
		</div>
	);
}
