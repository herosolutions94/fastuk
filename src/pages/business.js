import Link from "next/link";
import React from "react";

export default function Business() {
  return (
    <div>
      <main>
        <section id="rider">
          <div className="contain">
            <div className="flex">
              <div className="col col1 ">
                <div className="title">For Businesses</div>
                <h2>
                  Business Solutions - Delivering Excellence for Your Business
                </h2>
                <p>
                  We understand that every business is unique. That’s why we
                  offer customized shipping solutions to meet your specific
                  needs, whether you’re a small startup or a large enterprise.
                  From bulk deliveries to urgent express services, we have the
                  right plan for your business.
                </p>
                <div className="btn_blk">
                  <Link href="" className="site_btn color">
                    Get a Quote
                  </Link>
                </div>
              </div>
              <div className="col col2">
                <div className="image">
                  <img src="/images/bu.png" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="process1" className="pl mtl">
          <div className="contain">
            <div className="outer">
              <div className="head">
                <div className="text">
                  <div className="title">PROCESS</div>
                  <h2>Our Process</h2>
                </div>
                <Link href="" className="site_btn">
                  Request a Consultation
                </Link>
              </div>
              <div className="flex">
                <div className="coll">
                  <div className="inner">
                    <div className="icon">
                      <img src="/images/image 60.png" alt="" />
                    </div>
                    <h4>Consultation</h4>
                    <p>
                      We begin with a detailed consultation to understand your
                      needs and vision.
                    </p>
                  </div>
                </div>
                <div className="coll">
                  <div className="inner">
                    <div className="icon">
                      <img src="/images/image 59.png" alt="" />
                    </div>
                    <h4>Design</h4>
                    <p>
                      Our design team creates a customized plan that brings your
                      ideas to life.
                    </p>
                  </div>
                </div>
                <div className="coll">
                  <div className="inner">
                    <div className="icon">
                      <img src="/images/image 58.png" alt="" />
                    </div>
                    <h4>Execution</h4>
                    <p>
                      Our skilled craftsmen execute the plan with precision and
                      care.
                    </p>
                  </div>
                </div>
                <div className="coll">
                  <div className="inner">
                    <div className="icon">
                      <img src="/images/image 61.png" alt="" />
                    </div>
                    <h4>Completion</h4>
                    <p>
                      We ensure everything meets your expectations and conduct a
                      final walkthrough.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="rider" className="p0">
                <div className='contain'>
                    <div className='flex'>
                        <div className='col col3 '>
                            <div className='image uncover'>
                            <img src="/images/bui.png" />
                            </div>
                        </div>
                        <div className='col '>
                            <div className='title'>PARTNERS</div>
                            <h2>Exclusive Discounts & Rewards</h2>
                            <p>Partner with us and enjoy exclusive discounts on bulk shipments, subscription plans, and seasonal offers. We reward your loyalty with benefits designed to save you time and money, so you can focus on what matters most—growing your business.</p>
                            <div className="btn_blk">
                  <Link href="" className="site_btn color">
                   Get a Quote
                  </Link>
                </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="operations">
            <div className="contain">
                <div className="content_center">
                    <div className="title">OPERATIONS</div>
                    <h2>Seamless Integration with Your Business Operations</h2>
                
                </div>
                <div className="flex">
                    <div className="coll">
                        <div className="inner">
                            <div className="image">
                                <img src="/images/o1.png" alt="" />
                            </div>
                            <div className="text">
                                <h4>API & E-Commerce Integration</h4>
                                <p>Easily connect your online store or business management software with our platform through our API. Automate order processing and shipping labels directly from your system.</p>
                            </div>
                        </div>
                    </div>
                    <div className="coll">
                        <div className="inner">
                            <div className="image">
                                <img src="/images/o2.png" alt="" />
                            </div>
                            <div className="text">
                                <h4>Automated Shipping & Label Generation</h4>
                                <p>With our integration, you can automate the creation of shipping labels and invoices as soon as an order is placed. </p>
                            </div>
                        </div>
                    </div>
                    <div className="coll">
                        <div className="inner">
                            <div className="image">
                                <img src="/images/o3.png" alt=""/>
                            </div>
                            <div className="text">
                                <h4>Inventory & Order Management Synchronization</h4>
                                <p>Keep your inventory and order statuses up to date with real-time synchronization.</p>
                            </div>
                        </div>
                    </div>
                    <div className="coll">
                        <div className="inner">
                            <div className="image">
                                <img src="/images/o4.png" alt=""/>
                            </div>
                            <div className="text">
                                <h4>Customizable Shipping Rules & Settings</h4>
                                <p>Tailor your shipping preferences to match your business needs. Set custom rules based on order value, weight, or delivery location.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <section id="shipment" className="busines mb">
          <div className="contain">
            <div className="flex">
              <div className="col col1">
              <h2>Real-Time Tracking & Transparency</h2>
                    <p>Stay in control of your shipments with our advanced tracking system. Our platform provides real-time updates and full transparency, allowing you and your customers to track packages every step of the way.</p>
                    <div className="btn_blk">
                  <Link href="" className="site_btn">
                    About More
                  </Link>
                </div>
          
              </div>
              <div className="col col2">
                <div className="image">
                  <img src="/images/st.png" />
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
