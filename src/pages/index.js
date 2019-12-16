import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MySwiper from "../components/swiper/swiper"
// import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import tstl1 from "../images/1.jpg"
import tstl2 from "../images/2.jpg"
import tstl3 from "../images/3.jpg"
import Modal from "../components/modal/modal"

class IndexPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <div
          className="container-fluid hero"
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1490&amp;q=80)",
          }}
        >
          <div className="row">
            <div className="col">
              <div className="text-center">
                <h4
                  data-aos="fade"
                  data-aos-duration="600"
                  data-aos-delay="600"
                >
                  A website template by WebriQ
                </h4>
                <h1
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="1000"
                >
                  We create awesome <br />
                  websites.
                </h1>
                <Modal className="btn btn-primary main-cta text-uppercase" />
              </div>
            </div>
          </div>
        </div>
        <div className="our-work">
          <div className="subheader">
            <h3 data-aos="fade-down" data-aos-duration="600">
              Our Works
            </h3>
            <hr data-aos="fade" />
            <p
              className="text-black-50 subheading"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Lorem ipsum dolor sit amet blanditiis accusamus perferendis libero
              amet nisi accusamus.
            </p>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <div
                  data-aos="fade-right"
                  data-aos-duration="600"
                  data-aos-delay="100"
                  className="items"
                >
                  <Link className="items-link" to="/">
                    <img
                      className="img-fluid"
                      loading="lazy"
                      alt="corporate"
                      src="https://images.unsplash.com/photo-1505322747495-6afdd3b70760?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1020&amp;q=80&amp;h=768"
                    />
                    <div className="info">
                      <i className="icon-trophy text-white text-size-lg" />
                      <h5 className="mt-5 mb-2">Corporate Design</h5>
                      <p>Design</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  className="items"
                >
                  <Link className="items-link" to="/">
                    <img
                      alt="social media"
                      className="img-fluid"
                      loading="lazy"
                      src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1020&amp;q=80&amp;h=768"
                    />
                    <div className="info">
                      <i className="icon-chart text-white text-size-lg" />
                      <h5 className="mt-5 mb-2">Social Media Marketing</h5>
                      <p>Marketing</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  data-aos="fade-left"
                  data-aos-duration="600"
                  data-aos-delay="300"
                  className="items"
                >
                  <Link className="items-link" to="/">
                    <img
                      alt="website"
                      className="img-fluid"
                      loading="lazy"
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1020&amp;q=80&amp;h=768"
                    />
                    <div className="info">
                      <i className="icon-layers text-white text-size-lg" />
                      <h5 className="mt-5 mb-2">Website Development</h5>
                      <p>Development</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="our-services">
          <div className="subheader">
            <h3 data-aos="fade-down" data-aos-duration="600">
              Our Services
            </h3>
            <hr data-aos="fade" />
            <p
              className="text-black-50 subheading"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis accusamus perferendis liberoa dipisicing accusantium
              nisi.
            </p>
          </div>
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-3">
                <div
                  data-aos="fade-right"
                  data-aos-duration="600"
                  data-aos-delay="100"
                  className="info text-center"
                >
                  <i className="icon-trophy" />
                  <h5>Brand Identity</h5>
                  <p className="text-black-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias id volume amet.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  data-aos="fade-right"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  className="info text-center"
                >
                  <i className="icon-layers" />
                  <h5>Web Development</h5>
                  <p className="text-black-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias id volume amet.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  data-aos="fade-left"
                  data-aos-duration="600"
                  data-aos-delay="300"
                  className="info text-center"
                >
                  <i className="icon-screen-smartphone" />
                  <h5>Mobile Application</h5>
                  <p className="text-black-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias id volume amet.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  data-aos="fade-left"
                  data-aos-duration="600"
                  data-aos-delay="400"
                  className="info text-center"
                >
                  <i className="icon-chart" />
                  <h5>SEO</h5>
                  <p className="text-black-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias id volume amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="who-we-are">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <div className="info pr-0 pr-md-5">
                  <h5
                    data-aos="fade-down"
                    data-aos-delay="100"
                    className="text-primary"
                  >
                    WHO WE ARE
                  </h5>
                  <hr
                    data-aos="fade"
                    data-aos-delay="150"
                    className="text-left"
                  />
                  <h3
                    data-aos="fade-down"
                    data-aos-duration="600"
                    data-aos-delay="200"
                    className="my-4"
                  >
                    Do Things That Matters. Plan. Create. Grow.
                  </h3>
                  <p
                    className="text-black-50"
                    data-aos="fade-down"
                    data-aos-duration="600"
                    data-aos-delay="300"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    autem temporibus blanditiis accusamus perferendis libero
                    accusantium nisi itaque tempore, harum aliquid aut, sapiente
                    dolor tenetur. Tempora corrupti suscipit delectus
                    perspiciatis!Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Nostrum, voluptatibus.
                  </p>
                  <p
                    className="text-black-50"
                    data-aos="fade-down"
                    data-aos-duration="600"
                    data-aos-delay="400"
                  >
                    Tempora corrupti suscipit delectus perspiciatis!
                  </p>
                </div>
              </div>
              <div className="col d-md-flex align-items-md-center">
                <img
                  className="img-fluid"
                  data-aos="fade"
                  alt="Tempora"
                  data-aos-duration="600"
                  data-aos-delay="800"
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=768&amp;q=80&amp;h=1020"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="testimonials">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="subheader">
                  <h3>What our client's are saying</h3>
                  <hr className="mx-auto" />
                </div>
              </div>
              <div className="col">
                <MySwiper slidesperview={1}>
                  <div className="w-100">
                    <div className="info">
                      <p>
                        Leo in, vehicula rhoncus lacus. P leo in, vehicula
                        rhoncus lacus. P tortor est, vulputate quis leo in,
                        vehicula rhoncus lacus. Praesent aliquam Aliquam varius
                        finibus est.
                      </p>
                      <img
                        src={tstl1}
                        className="rounded-circle"
                        alt="testimonial"
                      />
                      <h5 className="mb-0">Ben Johnson</h5>
                      <span>CEO of Company, Inc.</span>
                    </div>
                  </div>
                  <div className="w-100">
                    <div className="info">
                      <p>
                        Leo in, vehicula rhoncus lacus. P leo in, vehicula
                        rhoncus lacus. P tortor est, vulputate quis leo in,
                        vehicula rhoncus lacus. Praesent aliquam Aliquam varius
                        finibus est.
                      </p>
                      <img
                        src={tstl2}
                        className="rounded-circle"
                        alt="testimonial"
                      />
                      <h5 className="mb-0">Ben Johnson</h5>
                      <span>CEO of Company, Inc.</span>
                    </div>
                  </div>
                  <div className="w-100">
                    <div className="info">
                      <p>
                        Leo in, vehicula rhoncus lacus. P leo in, vehicula
                        rhoncus lacus. P tortor est, vulputate quis leo in,
                        vehicula rhoncus lacus. Praesent aliquam Aliquam varius
                        finibus est.
                      </p>
                      <img
                        src={tstl3}
                        className="rounded-circle"
                        alt="testimonial"
                      />
                      <h5 className="mb-0">Ben Johnson</h5>
                      <span>CEO of Company, Inc.</span>
                    </div>
                  </div>
                </MySwiper>
              </div>
            </div>
          </div>
        </div>
        <div className="call-to-action">
          <div className="subheader">
            <h3 className="text-white">Let's do more together</h3>
            <p className="text-white-50 subheading">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis accusamus perferendis libero accusantium nisi.
            </p>
            <Modal className="text-white btn btn-primary btn-inverted mt-2 text-uppercase" />
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const indexPageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`
