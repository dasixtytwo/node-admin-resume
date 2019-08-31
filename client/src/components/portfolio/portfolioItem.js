import React from "react";
import { Col } from "antd";

export default function PortfolioItem({ project }) {
	const randomCol = Math.floor(Math.random() * (12 - 6 + 1)) + 6;

	return (
		<Col
			lg={randomCol}
			sm={12}
			xs={24}
			className="webdesign masonry-item margin-b-30"
		>
			<div className="gallery-item">
				<div className="item-photo">
					<a href="/" data-target="ajax-modal">
						<img
							src={`/upload/images/projects/${project.projectImage}`}
							alt={project.title}
						/>
					</a>
					<div className="item-hover bg-dark dark">
						<div className="item-hover-content">
							<a
								href="/"
								data-target="ajax-modal"
								className="icon icon-sm icon-hover icon-circle icon-primary"
							>
								<i className="fa fa-link" />
							</a>
							<a
								href="http://davideagosti.info"
								target="_blank"
								className="icon icon-sm icon-circle icon-white icon-hover"
							>
								<i className="fa fa-play" />
							</a>
						</div>
					</div>
				</div>
				<div className="item-title">
					<a href="/" className="title">
						{project.title}
					</a>
					<span className="caption text-muted">Mockups</span>
				</div>
			</div>
		</Col>
	);
}
