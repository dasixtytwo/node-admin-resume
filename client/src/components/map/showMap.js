import React from "react";
import PropTypes from "prop-types";
import { Map, Marker, Popup, TileLayer, ZoomControl } from "react-leaflet";
import _ from "lodash";

export default function ShowMap({ location }) {
	const position = [location.lat, location.lon];
	return (
		<Map
			center={position}
			zoomControl={false}
			zoom={13}
			id="leaflet-map"
			className="bg-image"
		>
			<TileLayer
				url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
			/>
			<ZoomControl position={"topright"} />
			{location && (
				<Marker position={[location.lat, location.lon]} key="marker-1">
					<Popup>{location.address}</Popup>
				</Marker>
			)}
		</Map>
	);
}

ShowMap.propTypes = {
	location: PropTypes.object.isRequired,
};
