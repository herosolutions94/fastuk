import React, { useState } from "react";
import Link from "next/link";

export default function About() {
  return (
    <>
      <main>
        <section id="whoweare">
          <div className="contain">
            <div className="flex">
              <div className="col col1">
                <div className="image">
                  <img src="/images/who.png" />
                </div>
              </div>
              <div className="col">
                <div className="title">Who we are</div>
                <h2>Digital & Trusted Transport Logistics Company</h2>
                <p>
                  Nulla vitae ex nunc Morbi quis purus convallis fermentum metus
                  volutpat sodales purus Nunc quis mauris et eros vulputate
                  mattis Nulla vitae ex nunc Mor bi quis the purus convallis
                  fermentum metus volutpat
                </p>
                <div className="btn_blk">
                  <Link href="" className="site_btn color">
                    About More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="shipment">
          <div className="contain">
            <div className="flex">
              <div className="col col1">
                <h2>We give you complete control of your any type shipment.</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution.
                </p>
                <div className="box">
                  <img src="/images/box.png"></img>
                  <p>
                    We Create A Honest, Hassle-Free And Quality Moving
                    Experience
                  </p>
                </div>
              </div>
              <div className="col col2">
                <div className="image">
                  <img src="/images/shipment.png" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="team">
          <div className="contain">
            <div className="content_center">
              <div className="title">Professionals</div>
              <h2>Our Expert Teams</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
            <div className="flex">
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="/images/t1.png" />
                  </div>
                  <div className="text">
                    <h4>Harry Mok</h4>
                    <p>Main Supervisor</p>
                  </div>
                  <div className="share">
                    <div className="social">
                      <img src="/images/li.svg" />
                      <img src="/images/in.svg" />
                      <img src="/images/fb.svg" />
                    </div>
                    <div className="social">
                      <img src="/images/ph.svg" />
                      <img src="/images/en.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="/images/t2.png" />
                  </div>
                  <div className="text">
                    <h4>Harry Mok</h4>
                    <p>Main Supervisor</p>
                  </div>
                  <div className="share">
                    <div className="social">
                      <img src="/images/li.svg" />
                      <img src="/images/in.svg" />
                      <img src="/images/fb.svg" />
                    </div>
                    <div className="social">
                      <img src="/images/ph.svg" />
                      <img src="/images/en.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="/images/t3.png" />
                  </div>
                  <div className="text">
                    <h4>Harry Mok</h4>
                    <p>Main Supervisor</p>
                  </div>
                  <div className="share">
                    <div className="social">
                      <img src="/images/li.svg" />
                      <img src="/images/in.svg" />
                      <img src="/images/fb.svg" />
                    </div>
                    <div className="social">
                      <img src="/images/ph.svg" />
                      <img src="/images/en.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="coll">
                <div className="inner">
                  <div className="image">
                    <img src="/images/t4.png" />
                  </div>
                  <div className="text">
                    <h4>Harry Mok</h4>
                    <p>Main Supervisor</p>
                  </div>
                  <div className="share">
                    <div className="social">
                      <img src="/images/li.svg" />
                      <img src="/images/in.svg" />
                      <img src="/images/fb.svg" />
                    </div>
                    <div className="social">
                      <img src="/images/ph.svg" />
                      <img src="/images/en.svg" />
                    </div>
                  </div>
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

        <section id="counts">
          <div className="contain">
            <div className="flex">
              <div className="col col1">
                <div className="image">
                  <img src="/images/counts.png" />
                </div>
              </div>
              <div className="col">
                <div className="flex">
                  <div className="coll">
                    <div className="inner">
                      <div className="icon">
                        <img src="/images/count1.png" />
                      </div>
                      <h3>10K</h3>
                      <h5>Projects Completed</h5>
                    </div>
                  </div>
                  <div className="coll">
                    <div className="inner">
                      <div className="icon">
                        <img src="/images/count2.png" />
                      </div>
                      <h3>240+</h3>
                      <h5>Projects Completed</h5>
                    </div>
                  </div>
                  <div className="coll">
                    <div className="inner">
                      <div className="icon">
                        <img src="/images/count3.png" />
                      </div>
                      <h3>8K</h3>
                      <h5>Projects Completed</h5>
                    </div>
                  </div>
                  <div className="coll">
                    <div className="inner">
                      <div className="icon">
                        <img src="/images/count4.png" />
                      </div>
                      <h3>80+</h3>
                      <h5>Projects Completed</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      <section id="benefit">
        <div className="contain">
          <div className="flex">
            <div className="col col1">
              <div className="title">Who we are</div>
              <h2>Benefits for using our services</h2>
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</li>
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</li>
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</li>
              </ul>
              <div className="btn_blk">
                  <Link href="" className="site_btn color">
                    About More
                  </Link>
                </div>
            </div>
            <div className="col col2">
              <div className="image">
            <img src="/images/benefit.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
