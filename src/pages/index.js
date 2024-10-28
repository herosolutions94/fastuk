import React, { useState } from "react";
import Link from "next/link";
import Testimonials from "../../components/testimonials";



export default function Home() {
  return (
    <>
      <main>
        <section id="banner">
          <div className="contain">
            <div className="flex">
              <div className="col col1">
                <h1>We are a UK based top Movers company</h1>
                <p>
                  Moving services can significantly reduce the stress of
                  relocating, allowing you to focus on settling into your new
                  home.
                </p>
                <div className="search_tab">
                  <div className="tabs_top">
                    <button class="tab_btn active" type="button">
                      Shipping Rates
                    </button>
                    <button class="tab_btn" type="button">
                      Tracking
                    </button>
                  </div>
                  <div className="tab_content">
                    <form>
                      <div className="flex_input">
                        <div className="field_col">
                          <label for="location">From:</label>
                          <input
                            type="text"
                            name=""
                            placeholder="Manchester"
                            class="input"
                          />
                        </div>
                        <div className="field_col">
                          <label for="location">To:</label>
                          <input
                            type="text"
                            name=""
                            placeholder="Birmingham"
                            class="input"
                          />
                        </div>
                        <div className="field_col">
                          <label for="location">Date:</label>
                          <input
                            type="text"
                            name=""
                            placeholder="Enter Date"
                            class="input"
                          />
                        </div>
                        <button type="submit" class="site_btn">
                          <img src="/images/search.svg" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col col2">
                <div className="image">
                  <img src="/images/banner.png" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="counter" className="bluebg">
          <div className="contain">
            <div className="flex">
              <div className="coll">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/c1.png" />
                  </div>
                  <div className="text">
                    <h3>543</h3>
                    <p>Consulting Success</p>
                  </div>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/c2.png" />
                  </div>
                  <div className="text">
                    <h3>612</h3>
                    <p>Financial Consulting</p>
                  </div>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/c3.png" />
                  </div>
                  <div className="text">
                    <h3>356</h3>
                    <p>Market Research</p>
                  </div>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/c4.png" />
                  </div>
                  <div className="text">
                    <h3>287</h3>
                    <p>Happy Client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="company">
          <div className="contain">
            <div className="content_center">
              <div className="title">OUR COMPANY</div>
              <h2>We are experienced work lovers focused on quality</h2>
            </div>
            <div className="flex">
              <div className="coll">
                <div className="inner">
                  <h4>Corporate Location</h4>
                  <p>
                    Lorem ipsum dolor sit amet,con sec tetur adipisicing
                    elit,sed do.
                  </p>
                  <div className="icon">
                    <img src="/images/crane1.png" />
                  </div>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <h4>Door to Door Service</h4>
                  <p>
                    Lorem ipsum dolor sit amet,con sec tetur adipisicing
                    elit,sed do.
                  </p>
                  <div className="icon">
                    <img src="/images/crane2.png" />
                  </div>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <h4>Warehousing & Storage</h4>
                  <p>
                    Lorem ipsum dolor sit amet,con sec tetur adipisicing
                    elit,sed do.
                  </p>
                  <div className="icon">
                    <img src="/images/crane3.png" />
                  </div>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <h4>Transportation Servcie</h4>
                  <p>
                    Lorem ipsum dolor sit amet,con sec tetur adipisicing
                    elit,sed do.
                  </p>
                  <div className="icon">
                    <img src="/images/crane4.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="contain">
            <div className="flex">
              <div className="col col1">
                <div className="image">
                  <img src="/images/about.png" />
                </div>
              </div>
              <div className="col col2">
                <div className="title">About Us </div>
                <h2>Welcome Worldwide Best Transport Company</h2>

                <p>
                  Competently implement efficient e-commerce without cross-unit
                  growth strategies.
                </p>
                <ul>
                  <li>Unlimited Revisions</li>
                  <li>Best Solutions</li>
                  <li>Best Fitness Excercise</li>
                  <li>Combine Fitness and</li>
                </ul>
                <div className="btn_blk">
                  <Link href="" className="site_btn color">
                    About More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="bg">
          <div className="contain">
            <div className="content_center">
              <div className="icon">
                <img src="/images/play.png" />
              </div>
              <h2>Fast And Reliable Moving Solutions Managers Since 1989</h2>
            </div>
          </div>
        </section>

        <section id="choose">
          <div className="contain">
            <div className="flex">
              <div className="col col1">
                <div className="title">why people choose us?</div>
                <h2>
                  We have 25+ years of experiences give you better results.
                </h2>
                <div className="btn_blk">
                  <Link href="" className="site_btn color">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="col col2">
                <ul>
                  <li>
                    <div className="head">
                      <div className="icon">
                        <img src="/images/earth1.png" />
                      </div>
                      <h4>Economical Air Freight</h4>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet,con sec tetur adipisicing
                      elit,sed do.
                    </p>
                  </li>
                  <li>
                    <div className="head">
                      <div className="icon">
                        <img src="/images/crane2.png" />
                      </div>
                      <h4>Same day Delivery</h4>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet,con sec tetur adipisicing
                      elit,sed do.
                    </p>
                  </li>
                  <li>
                    <div className="head">
                      <div className="icon">
                        <img src="/images/earth2.png" />
                      </div>
                      <h4>Time Bound deliveries</h4>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet,con sec tetur adipisicing
                      elit,sed do.
                    </p>
                  </li>
                  <li>
                    <div className="head">
                      <div className="icon">
                        <img src="/images/crane1.png" />
                      </div>
                      <h4>Multi-modal Transport</h4>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet,con sec tetur adipisicing
                      elit,sed do.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="c_points">
          <div className="contain">
            <div className="flex">
              <div className="coll">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/cp1.png" />
                  </div>
                  <h4>Free Estimate</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellu.
                  </p>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/cp2.png" />
                  </div>
                  <h4>Packaging</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellu.
                  </p>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/cp3.png" />
                  </div>
                  <h4>Moving Protection</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellu.
                  </p>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/cp4.png" />
                  </div>
                  <h4>Contact Office</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work">
          <div className="contain">
            <div className="heading">
              <div className="title">How It Works?</div>
              <h2>How We Deliver Your Parcel</h2>
            </div>
            <div className="flex">
              <div className="col">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/verify 5.svg" />
                  </div>
                  <div className="text">
                    <h4>Parcel Register</h4>
                    <p>
                      One of the key components of best logistics solutions
                      industy
                    </p>
                  </div>
                </div>
                <div className="inner">
                  <div className="ll1">
                    <img src="/images/line.svg" alt="" />
                  </div>
                  <div className="icon">
                    <img src="/images/verify 6.svg" />
                  </div>
                  <div className="text">
                    <h4>Parcel Loading</h4>
                    <p>
                      One of the key components of best logistics solutions
                      industy
                    </p>
                  </div>
                </div>
                <div className="inner">
                  <div className="ll1">
                    <img src="/images/line.svg" alt="" />
                  </div>
                  <div className="icon">
                    <img src="/images/verify 7.svg" />
                  </div>
                  <div className="text">
                    <h4>Parcel In-transit</h4>
                    <p>
                      One of the key components of best logistics solutions
                      industry
                    </p>
                  </div>
                </div>
                <div className="inner">
                <div className="ll1">
                    <img src="/images/line.svg" alt="" />
                  </div>
                  <div className="icon">
                    <img src="/images/verify 8.svg" />
                  </div>
                  <div className="text">
                    <h4>Parcel Delivery</h4>
                    <p>
                      One of the key components of best logistics solutions
                      industy
                    </p>
                  </div>
                </div>
              </div>
              <div className="colr">
                <div className="image">
                  <img src="/images/work.png" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />
      </main>
    </>
  );
}
