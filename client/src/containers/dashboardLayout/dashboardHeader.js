import React, { useState } from 'react';
import { Layout, Icon } from 'antd';

const { Header, Content } = Layout;

export default function DashboardHeader() {
	const [stateCollapsed, setStateCollapsed] = useState();

	const toggle = () => {
		setStateCollapsed({
			collapsed: !stateCollapsed
		});
	};

	return (
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
				Content
			</Content>
		</Layout>
	);
}
