import React, { Fragment, useState } from "react";
import { Button, Form, Icon, Input, message } from "antd";

const FormItem = Form.Item;
const { TextArea } = Input;

export default function ContactForm() {
	const [showForm, setShowForm] = useState(false);

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
								src="assets/img/photos/it-avatar-96x96.jpg"
								alt="..."
								className="img-circle margin-b-30"
							/>
							<h3>
								Please fill the <strong>form</strong> - I will response as fast
								as I can!
							</h3>
							{/*-- Contact Form --*/}
							<form id="contact-form">
								<div className="form-alert"></div>
								<div className="form-error alert alert-default">
									<ul></ul>
								</div>
								<FormItem label="Name:">
									<Input
										id="name"
										prefix={
											<Icon type="user" style={{ color: "rgba(0,0,0,.5)" }} />
										}
										type="text"
										placeholder="Name"
									/>
								</FormItem>
								<FormItem label="E-Mail:">
									<Input
										id="email"
										prefix={
											<Icon type="mail" style={{ color: "rgba(0,0,0,.5)" }} />
										}
										type="text"
										placeholder="E-Mail"
									/>
								</FormItem>
								<FormItem label="Message:">
									<TextArea rows={4} id="message" />
								</FormItem>
								<Button type="submit" className="ant-btn-blue" shape="round">
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
