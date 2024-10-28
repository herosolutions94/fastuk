import React from "react";

export default function Business_form() {
  return (
    <div>
      <main>
        <section id="business_form">
          <div className="contain">
            <div className="content_center">
              <div className="title">Join Us</div>
              <h2>Become a Rider: Courier Application Form</h2>
            </div>
            <form>
              <div className="bulk outer">
                <div className="row">
                  <div className="head">
                    <h4>Rider Information:</h4>
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

                  <div className="col-md-6">
                    <div className="txtGrp">
                      <label>Date of Birth</label>
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
                      <label>Residential Address</label>
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
                      <label>City </label>
                      <input
                        type=""
                        className="input"
                        required
                        placeholder="Manchester"
                      />
                    </div>
                  </div>
                  <div className="head mt">
                    <h4>Vehicle Information:</h4>
                  </div>
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <label>Do You Own a Vehicle?</label>
                      <div className="flx lbl">
                        <div className="radio-group">
                          <input
                            type="radio"
                            id="option1"
                            name="options"
                            value="option1"
                            className="input"
                            required
                          />
                          <label htmlFor="option1">Yes</label>
                        </div>
                        <div className="radio-group">
                          <input
                            type="radio"
                            id="option2"
                            name="options"
                            value="option2"
                            className="input"
                            required
                          />
                          <label htmlFor="option2">No</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <label>Type of Vehicle</label>
                      <select className="input" required>
                        <option value="">Van</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <label>Vehicle Registration Number</label>
                      <input
                        type=""
                        className="input"
                        required
                        placeholder="454545453434"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <label>Driving License Number </label>
                      <input
                        type=""
                        className="input"
                        required
                        placeholder="54656562323989"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="txtGrp">
                      <div className="input upload">
                        <div className=" uploadbtn">
                        <img src="/images/upload.svg" />
                        <span>Upload Driving License</span>
                        </div>
                        <input
                          id="file-upload"
                          type="file"
                          accept="image/*"
                          style={{display:'none'}}
                        />
                      </div>
                      <div className="upload_image">
                        <img src="/images/license.png" />
                      </div>
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
