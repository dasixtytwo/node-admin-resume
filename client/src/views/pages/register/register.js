import React from "react";
// Styled Component
import styled from 'styled-components';

// React bootstrap 4.x
import { Button, Card, CardBody, CardFooter, Col, Container, Form, FormFeedback, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
// Load image
import logoBrand from 'assets/images/logo/logo.png';

const Image = styled.img`
  width: 45px;
  height: 48px;
  `;

export default function Register() {
	return (
		<div>
			<Container className="">
          <Row className="justify-content-center">
            <Col md="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit='' noValidate autoComplete="off">
                    <h1><Image src={logoBrand} alt="Davide Agosti" /> Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        required
                        type="text"
                        name="name"
                        id="user-name"
                        value=''
                        onChange=''
                        invalid=''
                        placeholder="Full name"
                        autoComplete="name" />
                      <FormFeedback>error</FormFeedback>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        required
                        type="text"
                        name="email"
                        id="email"
                        value=''
                        onChange=''
                        invalid=''
                        placeholder="Email"
                        autoComplete="email" />
                      <FormFeedback>error</FormFeedback>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="password"
                        id="password"
                        type=''
                        placeholder="Password"
                        autoComplete="password"
                        value=''
                        onChange=''
                        invalid=''
                      />
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText onClick=''>
                          <i className="fa fa-eye-slash"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <FormFeedback>error</FormFeedback>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="password2"
                        id="confirm-password"
                        type=''
                        placeholder="Retype password"
                        value=''
                        onChange=''
                        invalid=''
                        autoComplete="confirm-password" />
                      <FormFeedback>error</FormFeedback>
                    </InputGroup>
                    <Button type="submit" color="success" block>Create Account</Button>
                  </Form>
                </CardBody>
                <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook" block><span>facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter" block><span>twitter</span></Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
		</div>
	);
}
