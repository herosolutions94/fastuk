import React from "react";
import LayoutDashboard from "../../../components/layoutdashboard";

const Index = () => {
  return (
    <>
      <main>
        <section className="main_dashboard_cols">
          <div className="contain">
            <div className="flex">
              <div className="cols">
                <div className="inner">
                  <div className="content">
                    <p>Current Orders</p>
                    <h4>03</h4>
                  </div>
                  <div className="images">
                    <img src="/images/uj_dash_box1.svg" alt="" />
                  </div>
                </div>
              </div>
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
