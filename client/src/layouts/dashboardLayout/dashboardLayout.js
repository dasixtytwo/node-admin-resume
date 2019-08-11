import React from "react";

import DashboardAside from "layouts/dashboardLayout/dashboardAside";
import DashboardFooter from "layouts/dashboardLayout/dashboardFooter";
import DashboardHeader from "layouts/dashboardLayout/dashboardHeader";

export default function DashboardLayout() {
	return (
		<div className="app">
			<DashboardHeader />
			<DashboardAside />
			<DashboardFooter />
		</div>
	);
}
