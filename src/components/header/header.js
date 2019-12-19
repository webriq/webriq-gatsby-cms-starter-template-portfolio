import React from "react"
import { Link } from "gatsby"
import Sticky from "react-sticky-el"
import SideBarMenu from "../sidebar/sidebar"
import { Nav } from "react-bootstrap"
// import "./header.css"
import "./header.module.css"
import "./header.css"

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
            <div className="col-md-3 col-3 col-sm-3">
              <Link className="navbar-brand" to="/">
                &nbsp;
                <i className="icon-diamond" />
                &nbsp; PORTFOL.IO
              </Link>
            </div>
            <div className="col-md-9 col-9 col-sm-9 ">
              <SideBarMenu />
            </div>
          </div>
        </div>
      </Nav>
    </Sticky>
  </header>
)

export default Header
