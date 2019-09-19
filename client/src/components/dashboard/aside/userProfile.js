import React, { useEffect } from "react";
import { Avatar, Popover } from "antd";
import { logoutUser } from "actions/authActions";
import { useDispatch } from "react-redux";

export default function UserProfile() {
	const dispatch = useDispatch();

	const userMenuOptions = (
		<ul className="da-user-popover">
			<li>My Account</li>
			<li>Connections</li>
			<li onClick={() => dispatch(logoutUser())}>Logout</li>
		</ul>
	);

	return (
		<div className="da-flex-row da-align-items-center da-mb-4 da-avatar-row">
			<Popover
				placement="bottomRight"
				content={userMenuOptions}
				trigger="click"
			>
				<Avatar
					src="https://via.placeholder.com/150x150"
					className="da-size-40 da-pointer da-mr-3"
					alt=""
				/>
				<span className="da-avatar-name">
					Davide Agosti
					<i className="icon icon-chevron-down da-fs-xxs da-ml-2" />
				</span>
			</Popover>
		</div>
	);
}
