import React, { Fragment } from "react";
import PostItem from "components/post/postItem";
import Masonry from "react-masonry-component";

export default function HomePost({ dataPost }) {
	const { posts, isLoading } = dataPost;
	const masonryOptions = {
		transitionDuration: 0,
	};
	return (
		<Fragment>
			{posts && !isLoading && (
				<div id="posts" className="section bg-grey padding-v-60">
					<div className="container container-wide">
						<h6 className="margin-b-50">Latest Posts</h6>
						<Masonry
							options={masonryOptions}
							className="ant-row masonry padding-sm"
						>
							{posts.map(post => (
								<PostItem key={post.slug} post={post} />
							))}
						</Masonry>
					</div>
				</div>
			)}
		</Fragment>
	);
}
