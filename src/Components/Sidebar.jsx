import React from "react";
import sidebarItems from "./SidebarItems";
import "./styles.css";
import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<React.Fragment>
			<div className="sidebar">
				<div className="logo-container">
					<h3 className="app-name">🔷 Shards Dashboard</h3>
				</div>
				<div className="links-container">
					{sidebarItems.map((item, idx) => {
						return (
							<Link
								to={item.link}
								style={{ textDecoration: "none", color: "inherit" }}>
								<div key={idx} className="each-item">
									<h4>{item.icon}</h4>
									<h4>{item.text}</h4>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Sidebar;
