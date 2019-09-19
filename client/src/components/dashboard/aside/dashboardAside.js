import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import UserProfile from "components/dashboard/aside/userProfile";
import AppsNavigation from "components/dashboard/aside/appsNavigation";

import logoBrand from "assets/images/logo/logo-dark.png";

const { Sider } = Layout;
const { SubMenu } = Menu;

export default function DashboardAside({ collapsed }) {
	return (
		<Sider
			trigger={null}
			collapsible
			collapsed={collapsed}
			className="da-app-sidebar  da-layout-sider-dark"
		>
			<div className="da-sidebar-header">
				<div className="da__dashboard__logo">
					<img src={logoBrand} alt="DA Admin" />
				</div>
			</div>
			<div className="da-sidebar-notifications">
				<UserProfile />
				<AppsNavigation />
			</div>
			<Menu theme="dark" mode="inline" defaultSelectedKeys={["dashboard"]}>
				<Menu.Item key="dashboard">
					<Icon type="bank" />
					<span>Dashboard</span>
					<Link to="/dashboard" />
				</Menu.Item>
				<SubMenu
					key="subUser"
					title={
						<span>
							<Icon type="user" />
							<span>User</span>
						</span>
					}
				>
					<Menu.Item key="profile">Profile</Menu.Item>
					<Menu.Item key="email">eMail</Menu.Item>
				</SubMenu>
				<SubMenu
					key="subBlog"
					title={
						<span>
							<Icon type="notification" />
							<span>Blog</span>
						</span>
					}
				>
					<Menu.Item key="allPost">All Post</Menu.Item>
					<Menu.Item key="newPost">New Post</Menu.Item>
				</SubMenu>
				<Menu.Item key="media">
					<Icon type="branches" />
					<span>Media</span>
				</Menu.Item>
				<SubMenu
					key="subSetting"
					title={
						<span>
							<Icon type="tool" />
							<span>Settings</span>
						</span>
					}
				>
					<Menu.Item key="general">General</Menu.Item>
				</SubMenu>
			</Menu>
		</Sider>
	);
}
