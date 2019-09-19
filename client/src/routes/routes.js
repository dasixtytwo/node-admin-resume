import React from "react";
import Loadable from "react-loadable";
import Spinner from "components/Spinner/Spinner";
// Layouts
import DefaultLayout from "layouts/DefaultLayout";
import HomeLayout from "layouts/HomeLayout";

function Loading() {
	return <Spinner />;
}

const Dashboard = Loadable({
	loader: () => import("views/Dashboard"),
	loading: Loading
});

const CreatePost = Loadable({
	loader: () => import("views/Post/CreatePost"),
	loading: Loading
});

const ShowPost = Loadable({
	loader: () => import("views/Post/ShowPost"),
	loading: Loading
});

const UserProfile = Loadable({
	loader: () => import("views/User/Profile"),
	loading: Loading
});

const CreateProfile = Loadable({
	loader: () => import("views/User/CreateProfile"),
	loading: Loading
});

const Skill = Loadable({
	loader: () => import("views/User/Skill"),
	loading: Loading
});

const Education = Loadable({
	loader: () => import("views/User/Education"),
	loading: Loading
});

const Experience = Loadable({
	loader: () => import("views/User/Experience"),
	loading: Loading
});

const routes = [
	{ path: "/", exact: true, name: "Home", component: HomeLayout },
	{
		path: "/dashboard",
		exact: true,
		name: "Dashboard",
		component: DefaultLayout
	},
	{ path: "/dashboard", name: "Dashboard", component: Dashboard },
	{ path: "/user", exact: true, name: "User", component: UserProfile },
	{ path: "/user/profile", name: "Profile", component: UserProfile },
	{
		path: "/user/create-profile",
		name: "New Profile",
		component: CreateProfile
	},
	{ path: "/user/skill", name: "Skills", component: Skill },
	{ path: "/user/education", name: "Educations", component: Education },
	{ path: "/user/experience", name: "Experiences", component: Experience },
	{ path: "/blog", exact: true, name: "Post", component: ShowPost },
	{ path: "/blog/post", name: "Post", component: ShowPost },
	{ path: "/blog/create-post", name: "New Post", component: CreatePost }
];

export default routes;
