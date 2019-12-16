import React from "react"
import { Link } from "gatsby"
import Sticky from "react-sticky-el"
// import SideBarMenu from "../sidebar/sidebar"
import { Nav, Dropdown, NavItem } from "react-bootstrap"
// import "./header.css"
import "./header.module.css"
import "./header.css"
import Modal from "../modal/modal"

const Header = () => (
  <header>
    <Sticky
      id="sticky-wrapper"
      className="sticky-wrapper"
      stickyClassName="is-sticky"
      stickyStyle={{ transform: "unset", zIndex: "999" }}
    >
      <Nav
        className="navbar navbar-light navbar-expand-md navigation-clean"
        style={{ zIndex: "1" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            &nbsp;
            <i className="icon-diamond" />
            &nbsp; PORTFOL.IO
          </Link>
          <button
            data-toggle="collapse"
            className="navbar-toggler"
            data-target="#navcol-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item" role="presentation">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link className="nav-link" href="/">
                  About
                </Link>
              </li>
              <li>
                <Dropdown as={NavItem}>
                  <Dropdown.Toggle
                    split
                    id="dropdown-split-basic"
                    className="btn-toggle"
                  >
                    <span>Services</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/">Action</Dropdown.Item>
                    <Dropdown.Item href="/">Another action</Dropdown.Item>
                    <Dropdown.Item href="/">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="nav-item" role="presentation">
                <Modal className="nav-link btn btn-primary text-uppercase" />
              </li>
            </ul>
          </div>
        </div>
      </Nav>
    </Sticky>
  </header>
)

export default Header
