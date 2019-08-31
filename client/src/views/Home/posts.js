import React from "react";
import PostItem from "components/post/postItem";
import { Row, Col } from "antd";
import Masonry from "react-masonry-component";

export default function HomePost({ posts }) {
	const masonryOptions = {
		transitionDuration: 0,
	};
	return (
		<div id="posts" className="section bg-grey padding-v-60">
			{/*-- Mcontent --*/}
			<div className="container container-wide">
				<h6 className="margin-b-50">Latest Posts</h6>

				<Masonry
					options={masonryOptions}
					className="ant-row masonry padding-sm"
				>
					{/*-- Masonry Sizer --
						<Col lg={8} sm={12} xs={24} className="masonry-sizer" />*/}
					{/*-- Masonry Element / Post --*/}
					{posts.posts.map(post => (
						<PostItem key={post.slug} post={post} />
					))}
				</Masonry>
			</div>
		</div>
	);
}
