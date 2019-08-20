import React, { Fragment } from "react";
import PropTypes from "prop-types";

const propTypes = {
	children: PropTypes.node
};

const defaultProps = {};

function DashboardFooter() {
	return (
		<Fragment>
			<span>
				<a href="http://davideagosti.info">DA</a> &copy;{" "}
				{1900 + new Date().getYear()} DA(Davide Agosti) .
			</span>
			<span className="ml-auto">
				Powered by{" "}
				<a href="https://http://davideagosti.info/react">DA Admin for React</a>
			</span>
		</Fragment>
	);
}

DashboardFooter.propTypes = propTypes;
DashboardFooter.defaultProps = defaultProps;

export default DashboardFooter;
