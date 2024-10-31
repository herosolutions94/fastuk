import React from "react";
import Link from "next/link";

export default function ViaAddress() {
  return (
    <div className="address">
      <h3>Add Via Address</h3>
      <form>
        <div className="row">
          <div className="col-md-12">
            <div className="txtGrp">
              <input
                type=""
                className="input"
                required
                placeholder="Full Name"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="txtGrp">
              <img className="flg wl" src="/images/uk.svg" />
              <input
                type=""
                className="input phone"
                required
                placeholder="+ 44"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="txtGrp">
              <input
                type=""
                className="input"
                required
                placeholder="Post Code"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="txtGrp">
              <input type="" className="input" required placeholder="Address" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="txtGrp">
              <input type="" className="input" required placeholder="City" />
            </div>
          </div>  
        <div className="btn_blk">
          <button type="submit" className="site_btn">
            Submit
          </button>
        </div>
        </div>
      </form>
    </div>
  );
}
