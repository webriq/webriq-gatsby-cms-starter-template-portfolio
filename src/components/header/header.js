import React from "react"
import { Link } from "gatsby"
import Sticky from "react-sticky-el"
import SideBarMenu from "../sidebar/sidebar"
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
          <div className="row w-100">
            <div className="col-md-3 col-9 col-sm-9">
              <Link className="navbar-brand" to="/">
                &nbsp;
                <i className="icon-diamond" />
                &nbsp; PORTFOL.IO
              </Link>
            </div>
            <div className="col-3 col-sm-3 hide-768">
              <SideBarMenu />
            </div>
            <div className="col-md-9 col-6 hide-767">
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
          </div>
        </div>
      </Nav>
    </Sticky>
  </header>
)

export default Header
