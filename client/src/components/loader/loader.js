import React from "react";
import Loader from "react-loader-spinner";

export default function Spinner() {
	return (
		<div className="da-loader-view da-loader-position">
			<Loader
				type="Bars"
				color="#3aa8db"
				height={100}
				width={100}
				visible={true}
			/>
		</div>
	);
}
