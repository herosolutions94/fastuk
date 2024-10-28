import React from "react";

export default function Business_form() {
  return (
    <div>
      <main>
        <section id="business_form">
          <div className="contain">
            <div className="content_center">
              <div className="title">Join Us</div>
              <h2>Partner with Us: Business Courier Service Registration</h2>
            </div>
            <form>
              <div className="bulk outer">
                <div className="row">
                  <div className="head">
                    <h4>Business Information:</h4>
                  </div>
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <label>Business Name</label>
                      <input
                        type=""
                        className="input"
                        required
                        placeholder="John"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <label>Business Type</label>
                      <select className="input" required>
                        <option value="">E-commerce</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="txtGrp">
                      <label>Business Address</label>
                      <input
                        type=""
                        className="input"
                        required
                        placeholder="59 Acorn Boulevard, Sheffield, S1 0 KK"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <label>City</label>
                      <input
                        type=""
                        className="input"
                        required
                        placeholder="Manchester"
                      />
                    </div>
                  </div>
                  <div className="head mt">
                    <h4>Contact Person Details:</h4>
                  </div>
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <label>Full Name</label>
                      <input
                        type=""
                        className="input"
                        required
                        placeholder="John"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <label>Designation</label>
                      <input
                        type=""
                        className="input"
                        required
                        placeholder="Director"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <label>Email Address</label>
                      <input
                        type=""
                        className="input"
                        required
                        placeholder="Manchester"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <label>Phone Number</label>
                      <img className="flg" src="/images/uk.svg" />
                      <input
                        type=""
                        className="input phone"
                        required
                        placeholder="+ 44"
                      />
                    </div>
                  </div>
                  <div className="head mt">
                    <h4>Courier Service Requirements::</h4>
                  </div>
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <label>Type of Parcels</label>
                      <select className="input" required>
                        <option value="">Document</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <label>Average Parcel Weight/Size</label>
                      <input
                        type=""
                        className="input"
                        required
                        placeholder="24 | 12 | 10 | 30"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <label>Expected Monthly Shipment Volume</label>
                      <input
                        type=""
                        className="input"
                        required
                        placeholder="500 Parcels"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <label>Preferred Delivery Speed</label>
                      <select className="input" required>
                        <option value="">Same Day</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                      </select>
                    </div>
                  </div>
                  <div className="btn_blk">
                  <button className="site_btn color">Submit</button>
                </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
