import React, { Fragment, useState } from 'react';
import DashboardAside from 'components/dashboard/aside/dashboardAside';
import { Layout, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer } = Layout;

export default function DashboardHeader() {
	const INITIAL_STATE = { collapsed: false };
	const [stateCollapsed, setStateCollapsed] = useState(INITIAL_STATE);

	const toggle = () => {
		const collapsed = 'collapsed';
		setStateCollapsed({ [collapsed]: !stateCollapsed[collapsed] });
	};

	return (
		<Fragment>
			<DashboardAside collapsed={stateCollapsed} />
			<Layout>
				<Header style={{ background: '#fff', padding: 0 }}>
					<Icon
						className='trigger'
						type={stateCollapsed ? 'menu-unfold' : 'menu-fold'}
						onClick={toggle}
					/>
				</Header>
				<Content
					style={{
						margin: '24px 16px',
						padding: 24,
						background: '#fff',
						minHeight: 280
					}}
				>
					<Breadcrumb style={{ margin: '16px 0' }}>
						<Breadcrumb.Item>User</Breadcrumb.Item>
						<Breadcrumb.Item>Bill</Breadcrumb.Item>
					</Breadcrumb>
					<div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
						Here goes the content
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					Ant Design ©2019 Created by DA
				</Footer>
			</Layout>
		</Fragment>
	);
}
