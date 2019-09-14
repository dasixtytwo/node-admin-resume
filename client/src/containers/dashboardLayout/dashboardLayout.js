import React from 'react';
import { Layout } from 'antd';

import DashboardAside from 'containers/dashboardLayout/dashboardAside';
import DashboardHeader from 'containers/dashboardLayout/dashboardHeader';

export default function DashboardLayout() {
	return (
		<Layout className='app'>
			<DashboardAside />
			<DashboardHeader />
		</Layout>
	);
}
