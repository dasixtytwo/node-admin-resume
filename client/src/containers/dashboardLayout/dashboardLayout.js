import React from "react";
import { Layout } from "antd";

import DashboardHeader from "components/dashboard/main/dashboardMain";

export default function DashboardLayout() {
	return (
		<Layout className="app" style={{ minHeight: "100vh" }}>
			<DashboardHeader />
		</Layout>
	);
}
