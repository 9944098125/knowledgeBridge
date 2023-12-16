import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
	return (
		<React.Fragment>
			<div className="navbar-container">
				<div className="search-container">
					<IoSearch color="grey" />
					<input type="text" className="searchBar" placeholder="Search Bar" />
				</div>
				<div className="icon-avatar">
					<div className="bell-container">
						<FaBell color="blue" fontSize={35} />
						<div className="notification-container"></div>
					</div>
					<div className="avatar-container">
						<RxAvatar color="red" fontSize={35} />
						<h4 className="name">Serrah Williams</h4>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Navbar;
