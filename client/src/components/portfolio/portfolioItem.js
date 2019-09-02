import React from "react";
import { Col } from "antd";

export default function PortfolioItem({ project }) {
	const items = [6, 8, 12];
	const randomCol = items[Math.floor(Math.random() * items.length)];

	return (
		<Col
			lg={randomCol}
			sm={12}
			xs={24}
			className={`${project.category} masonry-item margin-b-30`}
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
								href={project.urlProject}
								data-target="ajax-modal"
								className="icon icon-sm icon-hover icon-circle icon-primary"
							>
								<i className="fa fa-play" />
							</a>
						</div>
					</div>
				</div>
				<div className="item-title">
					<div className="title">{project.title}</div>
					<span className="caption text-muted">
						<a href={`http://${project.urlProject}`} target="_blank">
							{project.urlProject}
						</a>
					</span>
				</div>
			</div>
		</Col>
	);
}
