import React from "react"
import { Link } from "gatsby"
import "./footer.css"

const footer = () => (
  <div className="footer-dark">
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-3 item">
            <h3>Quicklinks</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Services</Link>
              </li>
              <li>
                <Link to="/">Get in touch</Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3 item">
            <h3>About</h3>
            <ul>
              <li>
                <Link to="/">Company</Link>
              </li>
              <li>
                <Link to="/">Team</Link>
              </li>
              <li>
                <Link to="/">Careers</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 item text">
            <h3>Portfol.io</h3>
            <p className="mb-4">
              Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus
              ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique
              lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.
            </p>
            <a
              className="btn btn-inverted"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-social-facebook" />
            </a>
            <a
              className="btn btn-inverted"
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-social-twitter" />
            </a>
            <a
              className="btn btn-inverted"
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-social-youtube" />
            </a>
          </div>
        </div>
        <p className="text-white-50 copyright mt-5">
          Designed and powered by
          <a
            href="https://webriq.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            WebriQ
          </a>
        </p>
      </div>
    </footer>
  </div>
)

export default footer
