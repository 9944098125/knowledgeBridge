import { MdDashboardCustomize } from "react-icons/md";
import { GiPostStamp } from "react-icons/gi";
import { FaPlusCircle } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa6";
import { LiaTableSolid } from "react-icons/lia";
import { FaRegUserCircle } from "react-icons/fa";
import { MdRunningWithErrors } from "react-icons/md";

const sidebarItems = [
	{
		icon: <MdDashboardCustomize />,
		text: "Blog Dashboard",
		link: "/",
	},
	{
		icon: <GiPostStamp />,
		text: "Blog Posts",
		link: "/posts",
	},
	{
		icon: <FaPlusCircle />,
		text: "Add Blog Posts",
		link: "/add-post",
	},
	{
		icon: <FaWpforms />,
		text: "Forms & Components",
		link: "/fc",
	},
	{
		icon: <LiaTableSolid />,
		text: "Tables",
		link: "/tables",
	},
	{
		icon: <FaRegUserCircle />,
		text: "User",
		link: "/user",
	},
	{
		icon: <MdRunningWithErrors />,
		text: "Errors",
		link: "/errors",
	},
];

export default sidebarItems;
