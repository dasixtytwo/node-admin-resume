import React from 'react';
import { Layout } from 'antd';

import DashboardHeader from 'components/dashboard/header/dashboardHeader';

export default function DashboardLayout() {
	return (
		<Layout className='app' style={{ minHeight: '100vh' }}>
			<DashboardHeader />
		</Layout>
	);
}
