import React from "react";
import LayoutDashboard from "../../../components/layoutdashboard";
import Link from "next/link";

const Index = () => {
  return (
    <>
      <main>
        <section className="main_dashboard_cols">
          <div className="contain">
            <div className="flex flexMinus">
              <div className="cols">
                <div className="inner">
                  <div className="shape">
                    <img src="/images/uj_dash_line.svg" alt="" />
                  </div>
                  <div className="content">
                    <p>Current Orders</p>
                    <h4>03</h4>
                  </div>
                  <div className="images">
                    <img src="/images/uj_dash_box1.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="shape">
                    <img src="/images/uj_dash_line.svg" alt="" />
                  </div>
                  <div className="content">
                    <p>Total Orders</p>
                    <h4>23</h4>
                  </div>
                  <div className="images">
                    <img src="/images/uj_dash_box2.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="shape">
                    <img src="/images/uj_dash_box4.svg" alt="" />
                  </div>
                  <div className="content">
                    <p>Pending Invoices</p>
                    <h4>02</h4>
                  </div>
                  <div className="images">
                    <img src="/images/uj_dash_box3.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="shape">
                    <img src="/images/uj_dash_box4.svg" alt="" />
                  </div>
                  <div className="content">
                    <p>Current Overdue</p>
                    <h4>£2000</h4>
                  </div>
                  <div className="images">
                    <img src="/images/uj_dash_box5.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ====== */}
        <section className="dash_listings">
          <div className="contain">
            <div className="uj_main_heading">
              <h3>Active Orders</h3>
              <div className="cta">
                <Link href="" className="site_btn color">
                  Create New Order
                </Link>
              </div>
            </div>
            <div className="listings">
              <ul>
                <li>
                  <div className="profile">
                    <div className="user_image">
                      <img src="/images/user_uj.png" alt="" />
                    </div>
                    <div className="content">
                      <h3>
                        <strong>Michael Thompson</strong>
                      </h3>
                      <h3>michael_th@gmail.com</h3>
                      <p>+832-345-5867</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="content">
                    <p>
                      <strong>Booking Id</strong>
                    </p>
                    <h3>#R34G5D</h3>
                  </div>
                </li>
                <li>
                  <div className="content">
                    <p>
                      <strong>Distance</strong>
                    </p>
                    <h3>87km</h3>
                  </div>
                </li>
                <li>
                  <div className="content">
                    <p>
                      <strong>Pickup Location</strong>
                    </p>
                    <h3>201 Donna Street , west brookls barcelona</h3>
                  </div>
                </li>
                <li>
                  <div className="content">
                    <p>
                      <strong>Drop-off Location</strong>
                    </p>
                    <h3>201 Donna Street , west brookls UK</h3>
                  </div>
                </li>
                <li>
                  <div className="dots">
                    <img src="/images/dots_1.svg" alt="" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
Index.getLayout = function (page) {
  return <LayoutDashboard>{page}</LayoutDashboard>;
};
