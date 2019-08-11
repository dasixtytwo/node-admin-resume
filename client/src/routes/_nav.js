export default {
	items: [
		{
			name: "Dashboard",
			url: "/dashboard",
			icon: "icon-speedometer"
		},
		{
			title: true,
			name: "Profile",
			wrapper: {
				// optional wrapper object
				element: "", // required valid HTML5 element tag
				attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
			},
			class: "" // optional class names space delimited list for title item ex: "text-center"
		},
		{
			name: "User",
			url: "/user",
			icon: "icon-user",
			children: [
				{
					name: "Profile",
					url: "/user/profile",
					icon: "icon-user"
				},
				{
					name: "New Profile",
					url: "/user/create-profile",
					icon: "icon-user-follow",
					badge: {
						variant: "info",
						text: "NEW"
					}
				},
				{
					name: "Skill",
					url: "/user/skill",
					icon: "icon-layers"
				},
				{
					name: "Education",
					url: "/user/education",
					icon: "icon-graduation"
				},
				{
					name: "Experience",
					url: "/user/experience",
					icon: "icon-briefcase"
				}
			]
		},
		{
			title: true,
			name: "Blog",
			wrapper: {
				// optional wrapper object
				element: "", // required valid HTML5 element tag
				attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
			},
			class: "" // optional class names space delimited list for title item ex: "text-center"
		},
		{
			name: "Posts",
			url: "/blog",
			icon: "icon-docs",
			children: [
				{
					name: "Show Post",
					url: "/blog/post",
					icon: "icon-doc"
				},
				{
					name: "new Post",
					url: "/blog/create-post",
					icon: "icon-note",
					badge: {
						variant: "info",
						text: "NEW"
					}
				}
			]
		}
	]
};
