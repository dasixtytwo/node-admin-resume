import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendMsgContact } from "actions/mailActions";
import { Button, Form, Icon, Input } from "antd";
import ContactLogo from "assets/images/logo/contact-logo.png";
const FormItem = Form.Item;
const { TextArea } = Input;

export default function ContactForm() {
	const mailData = useSelector(state => state);
	const dispatch = useDispatch();
	const [dataError, setDataError] = useState();
	const [showForm, setShowForm] = useState(false);
	const [inputData, setInputData] = useState({});

	const { errors, mail } = mailData;

	// Reset form when mail is sended
	const resetForm = () => {
		setInputData({});
	};

	useEffect(() => {
		setDataError(errors);
	});

	const handleStateInputForm = event => {
		event.persist();

		setInputData(inputData => ({
			...inputData,
			[event.target.name]: event.target.value
		}));
	};

	const handleSubmit = event => {
		if (event) {
			event.preventDefault();
		}

		const newMsgContact = {
			fullname: inputData.fullname,
			email: inputData.email,
			message: inputData.message
		};

		dispatch(sendMsgContact(newMsgContact));
		resetForm();
	};

	const active = showForm ? "active" : null;

	return (
		<Fragment>
			{!showForm && (
				<Button
					id="messenger-toggle"
					className="icon icon-sm icon-circle"
					onClick={() => setShowForm(true)}
				>
					<i className="fa fa-comments"></i>
				</Button>
			)}
			{showForm && (
				<div id="messenger" className={`dark ${active}`}>
					<div id="messenger-box">
						<div className="messenger-box-content">
							{/*-- Close --*/}
							<Button
								type="primary"
								shape="circle"
								icon="close"
								className="messenger-close icon icon-xs icon-white"
								onClick={() => setShowForm(false)}
							/>
							{/*-- Avatar --*/}
							<img
								src={ContactLogo}
								alt="..."
								className="img-circle margin-b-30"
							/>
							<h3>
								Please fill the <strong>form</strong> - I will response as fast
								as I can!
							</h3>
							{/*-- Contact Form --*/}
							<form
								id="contact-form"
								name="contactForm"
								onSubmit={handleSubmit}
							>
								<div className="form-alert"></div>
								<div className="form-error alert alert-default">
									<ul>
										<li>{mail.sendmail ? mail.sendmail.msg : ""}</li>
									</ul>
								</div>
								<FormItem
									validateStatus={dataError.fullname ? "error" : ""}
									help={dataError.fullname}
									label="Name:"
								>
									<Input
										id="fullname"
										name="fullname"
										prefix={
											<Icon type="user" style={{ color: "rgba(0,0,0,.5)" }} />
										}
										type="text"
										value={inputData.fullname}
										onChange={handleStateInputForm}
										placeholder="Name"
									/>
								</FormItem>
								<FormItem
									validateStatus={dataError.email ? "error" : ""}
									help={dataError.email}
									label="E-Mail:"
								>
									<Input
										id="email"
										name="email"
										prefix={
											<Icon type="mail" style={{ color: "rgba(0,0,0,.5)" }} />
										}
										type="text"
										value={inputData.email}
										onChange={handleStateInputForm}
										placeholder="E-Mail"
									/>
								</FormItem>
								<FormItem
									validateStatus={dataError.message ? "error" : ""}
									help={dataError.message}
									label="Message:"
								>
									<TextArea
										rows={4}
										id="message"
										name="message"
										value={inputData.message}
										onChange={handleStateInputForm}
									/>
								</FormItem>
								<Button
									htmlType="submit"
									className="ant-btn-blue"
									shape="round"
								>
									<span>Send a message!</span>
									<Icon type="mail" />
								</Button>
							</form>
						</div>
					</div>
				</div>
			)}
			;
		</Fragment>
	);
}
