import React from "react";
// React router
import { Link } from "react-router-dom";
// Antd
import { Button, Checkbox, Form, Icon, Input, message } from "antd";
// Styled component
import styled from "styled-components";
// Load image
import loginImage from "assets/images/profile-bg.jpg";
import logoBrand from "assets/images/logo/logo-dark.png";

const Image = styled.img`
	margin-bottom: 10px;
	width: 45px;
	height: 48px;
`;

const FormItem = Form.Item;

export default function Login() {
	return (
		<div className="da-app-login-wrap">
			<div className="da-app-login-container">
				<div className="da-app-login-main-content">
					<div className="da-app-logo-content">
						<div className="da-app-logo-content-bg">
							<img src={loginImage} alt="Neature" />
						</div>
						<div className="da-app-logo-wid">
							<h1>Sign In</h1>
							<p>By Signin Up, you can avail full features of our services.</p>
							<p>Get an account !!!</p>
						</div>
						<div className="da-app-logo">
							<img alt="example" src={logoBrand} />
						</div>
					</div>
					<div className="da-app-login-content">
						<Form onSubmit="" className="da-signin-form da-form-row0">
							<FormItem>
								<Input placeholder="Email" />
							</FormItem>
							<FormItem>
								<Input type="password" placeholder="Password" />
							</FormItem>
							<FormItem>
								<Checkbox />
								<span className="da-signup-form-forgot da-link" />
							</FormItem>
							<FormItem>
								<Button type="primary" className="da-mb-0" htmlType="submit" />
								<span /> <Link to="/register" />
							</FormItem>
							<div className="da-flex-row da-justify-content-between">
								<span>or connect with</span>
								<ul className="da-social-link">
									<li>
										<Icon type="google" onClick="" />
									</li>
									<li>
										<Icon type="facebook" onClick="" />
									</li>
									<li>
										<Icon type="github" onClick="" />
									</li>
									<li>
										<Icon type="twitter" onClick="" />
									</li>
								</ul>
							</div>
							<span className="da-text-light da-fs-sm">DA Admin</span>
						</Form>
					</div>
					<div className="da-loader-view">{/*<CircularProgress />*/}</div>
				</div>
			</div>
		</div>
	);
}