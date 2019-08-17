import React, { Component } from "react";
import PropTypes from "prop-types";
// Redux/React module
import { connect } from "react-redux";
// Authentication
import { loginUser } from "actions/authActions";
// React router
import { Link } from "react-router-dom";
// Antd
import { Button, Checkbox, Form, Icon, Input, message } from "antd";
// Load image
import loginImage from "assets/images/profile-bg.jpg";
import logoBrand from "assets/images/logo/logo-dark.png";

const FormItem = Form.Item;

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			errors: {},
			type: "password"
		};
		this.onSubmit = this.onSubmit.bind(this);
		this.showPassword = this.showPassword.bind(this);
	}
	handleChange = prop => e => {
		this.setState({
			[prop]: e.target.value
		});
	};
	handleMouseDownPassword = e => {
		e.preventDefault();
	};
	showPassword(e) {
		e.preventDefault();
		e.stopPropagation();
		this.setState({
			type: this.state.type === "input" ? "password" : "input"
		});
	}
	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push("/dashboard");
		}
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
			this.props.history.push("/dashboard");
		}
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors });
		}
	}
	onSubmit(e) {
		e.preventDefault();

		const userData = {
			email: this.state.email,
			password: this.state.password
		};
		this.props.loginUser(userData);
	}
	render() {
		const { errors } = this.props;
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
								<p>
									By Signin Up, you can avail full features of our services.
								</p>
								<p>Get an account !!!</p>
							</div>
							<div className="da-app-logo">
								<img alt="example" src={logoBrand} />
							</div>
						</div>
						<div className="da-app-login-content">
							<Form
								onSubmit={this.onSubmit}
								className="da-signin-form da-form-row0"
							>
								<FormItem>
									<Input
										prefix={
											<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
										}
										placeholder="Email"
									/>
								</FormItem>
								<FormItem>
									<Input
										prefix={
											<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
										}
										type="password"
										placeholder="Password"
									/>
								</FormItem>
								<FormItem>
									<Checkbox>Remember me</Checkbox>
									<span className="da-signup-form-forgot da-link" />
								</FormItem>
								<FormItem>
									<Button type="primary" className="da-mb-0" htmlType="submit">
										Login
									</Button>
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
}

Login.propTypes = {
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{ loginUser }
)(Login);
