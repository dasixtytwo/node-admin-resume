import React, { Fragment } from "react";
import Masonry from "react-masonry-component";
import PortfolioItem from "components/portfolio/portfolioItem";

export default function HomePortfolio({ dataProject }) {
	const masonryOptions = {
		transitionDuration: 0,
	};

	const { projects, isLoading } = dataProject;

	return (
		<Fragment>
			{!isLoading && (
				<div id="portfolio" className="section bg-grey padding-v-60">
					{/*-- Content --*/}
					<div className="container container-wide">
						<h6 className="margin-b-50">Portfolio</h6>

						{/*-- Filters --*/}
						<nav className="text-center">
							<ul
								className="nav nav-filter nav-pills margin-b-40"
								data-filter-grid="#portfolio-list"
							>
								<li className="active">
									<a href="/" data-filter="*">
										All
									</a>
								</li>
								<li>
									<a href="/" data-filter=".webdesign">
										Webdesign
									</a>
								</li>
								<li>
									<a href="/" data-filter=".development">
										Development
									</a>
								</li>
								<li>
									<a href="/" data-filter=".graphic">
										Graphic Design
									</a>
								</li>
							</ul>
						</nav>

						<Masonry
							id="portfolio-list"
							options={masonryOptions}
							className="ant-row masonry padding-sm"
						>
							{/*-- Masonry Element --*/}

							{projects.map((project, i) => (
								<PortfolioItem key={`project-${i}`} project={project} />
							))}
						</Masonry>
					</div>
				</div>
			)}
		</Fragment>
	);
}
