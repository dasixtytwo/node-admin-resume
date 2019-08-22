import React, { Component } from "react";
import PropTypes from "prop-types";
// React router
import { Link } from "react-router-dom";
// React/Redux
import { connect } from "react-redux";
// Core Library
import { registerUser } from "actions/authActions";
// Antd
import { Button, Checkbox, Form, Icon, Input } from "antd";
// Load image
import loginImage from "assets/images/profile-bg.jpg";
import logoBrand from "assets/images/logo/logo-dark.png";

const FormItem = Form.Item;

class Register extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			email: "",
			password: "",
			password2: "",
			errors: {},
			type: "password"
		};
		this.onSubmit = this.onSubmit.bind(this);
	}
	handleChange = prop => e => {
		this.setState({
			[prop]: e.target.value
		});
	};

	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push("/dashboard");
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			});
		}
	}

	onSubmit(e) {
		e.preventDefault();

		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
		};
		this.props.registerUser(newUser, this.props.history);
	}

	render() {
		const { errors } = this.props;
		return (
			<div className="da-app-login-wrap">
				<div className="da-app-login-container">
					<div className="da-app-login-main-content">
						<div className="da-app-logo-content">
							<div className="da-app-logo-content-bg">
								<img src={loginImage} alt="DA Register" />
							</div>
							<div className="da-app-logo-wid">
								<h1>Sign Up</h1>
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
								className="da-signup-form da-form-row0"
							>
								<FormItem
									validateStatus={errors.name ? "error" : ""}
									help={errors.name}
								>
									<Input
										type="text"
										id="user-name"
										value={this.state.name}
										onChange={this.handleChange("name")}
										placeholder="Full Name"
									/>
								</FormItem>

								<FormItem
									validateStatus={errors.email ? "error" : ""}
									help={errors.email}
								>
									<Input
										type="email"
										id="email"
										value={this.state.email}
										onChange={this.handleChange("email")}
										placeholder="Email"
									/>
								</FormItem>
								<FormItem
									validateStatus={errors.password ? "error" : ""}
									help={errors.password}
								>
									<Input.Password
										type="password"
										id="user-password"
										value={this.state.password}
										onChange={this.handleChange("password")}
										placeholder="Password"
									/>
								</FormItem>
								<FormItem
									validateStatus={errors.password2 ? "error" : ""}
									help={errors.password2}
								>
									<Input.Password
										type="password"
										id="user-password2"
										value={this.state.password2}
										onChange={this.handleChange("password2")}
										placeholder="Confirm Password"
									/>
								</FormItem>
								<FormItem>
									<Checkbox>by signing up, I accept</Checkbox>
									<span className="da-link da-signup-form-forgot">
										Term & condition
									</span>
								</FormItem>
								<FormItem>
									<Button type="primary" className="da-mb-0" htmlType="submit">
										Sign Up
									</Button>
									<span> or</span>{" "}
									<Link to="/login">
										<span>Sign In</span>
									</Link>
								</FormItem>
								<div className="da-flex-row da-justify-content-between">
									<span>or connect with</span>
									<ul className="da-social-link">
										<li>
											<Icon type="google" />
										</li>
										<li>
											<Icon type="facebook" />
										</li>
									</ul>
								</div>
							</Form>
						</div>
						{/*loader && (
							<div className="da-loader-view">
								<CircularProgress />
							</div>
						)}
						{showMessage && message.error(alertMessage)*/}
					</div>
				</div>
			</div>
		);
	}
}

Register.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});
export default connect(
	mapStateToProps,
	{ registerUser }
)(Register);
