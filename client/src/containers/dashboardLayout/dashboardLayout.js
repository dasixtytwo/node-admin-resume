import React from "react";

import DashboardAside from "containers/dashboardLayout/dashboardAside";
import DashboardFooter from "containers/dashboardLayout/dashboardFooter";
import DashboardHeader from "containers/dashboardLayout/dashboardHeader";

export default function DashboardLayout() {
	return (
		<div className="app">
			<DashboardHeader />
			<DashboardAside />
			<DashboardFooter />
		</div>
	);
}
