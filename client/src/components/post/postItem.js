import React from "react";
import moment from "moment";
import { Col } from "antd";
import ScrollAnimation from "react-animate-on-scroll";

export default function PostItem({ post }) {
	return (
		<Col lg={4} sm={6} xs={12} className="post post-item masonry-item">
			<div className="post-photo">
				<img src="assets/img/photos/post01.jpg" alt="..." />
			</div>
			<ScrollAnimation animateIn="fadeInUp" className="post-content">
				<div className="meta">
					<span>
						<i className="fa fa-comment" />
						<a href="/">{post.comments.length}</a>
					</span>
					<span>
						<i className="fa fa-user" />
						<a href="/">{post.author}</a>
					</span>
					<span>
						<i className="fa fa-tag" />
						<a href="/">{post.category}</a>
					</span>
				</div>
				<div className="date">{moment(post.date).format("DD MMM, YYYY")}</div>
				<h1>
					<a href="/">{post.title}</a>
				</h1>
				<p className="lead">Per sint eirmod expetenda te. Pro ne essent.</p>
				<p>{post.body}. </p>
				<a href={`/${post.slug}`} className="btn btn-primary btn-xs">
					<span>Read more</span>
					<i className="ti-arrow-right" />
				</a>
			</ScrollAnimation>
		</Col>
	);
}
