import React from "react"
import { Link } from "gatsby"
import { Nav } from "react-bootstrap"
import "./menu.css"

export default () => (
	<div className="navigation">
		<Nav className="flex-column">
			<Nav.Item>
				<Link to="/">Home</Link>
			</Nav.Item>
			<Nav.Item>
				<Link to="/">Blog</Link>
			</Nav.Item>
			<Nav.Item>
				<Link to="/">Contact Us</Link>
			</Nav.Item>
		</Nav>
	</div>
)
