import React from "react";

import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Home from "../Pages/Home";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import BlogPosts from "../Pages/BlogPosts";

const Layout = () => {
	return (
		<div className="whole-container">
			<Sidebar />
			<div className="navbar-outlet">
				<Navbar />
				<Outlet />
			</div>
		</div>
	);
};

const routes = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/posts",
				element: <BlogPosts />,
			},
		],
	},
]);

export default function BaseRoutes() {
	return <RouterProvider router={routes} />;
}
