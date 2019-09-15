import React from 'react';
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;
const { SubMenu } = Menu;

export default function DashboardAside({ collapsed }) {
	return (
		<Sider trigger={null} collapsible collapsed={collapsed.collapsed}>
			<div className='da__dashboard__logo' />
			<Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
				<Menu.Item key='1'>
					<Icon type='pie-chart' />
					<span>Option 1</span>
				</Menu.Item>
				<SubMenu
					key='sub1'
					title={
						<span>
							<Icon type='user' />
							<span>User</span>
						</span>
					}
				>
					<Menu.Item key='3'>Tom</Menu.Item>
					<Menu.Item key='4'>Bill</Menu.Item>
					<Menu.Item key='5'>Alex</Menu.Item>
				</SubMenu>
				<Menu.Item key='2'>
					<Icon type='video-camera' />
					<span>nav 2</span>
				</Menu.Item>
				<Menu.Item key='3'>
					<Icon type='upload' />
					<span>nav 3</span>
				</Menu.Item>
			</Menu>
		</Sider>
	);
}
