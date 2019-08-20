import React, { Fragment } from "react";
import PropTypes from "prop-types";

const propTypes = {
	children: PropTypes.node
};

const defaultProps = {};

function DashboardAside() {
	return (
		<Fragment>
			<h4>Aside</h4>
		</Fragment>
	);
}

DashboardAside.propTypes = propTypes;
DashboardAside.defaultProps = defaultProps;

export default DashboardAside;
