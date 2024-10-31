import React from "react";
import Link from "next/link";


export default function Step1() {
  return (
    <div>
      {/* step 1 */}
      <div className="head">
        <h4>Enter Your Parcel Details Here</h4>
      </div>
      <div className="inner_bulk">
        <form>
          <div className="row step1">
          <div className="col-md-2">
              <div className="txtGrp">
                <label>Parcel Number </label>
               <span>FU#564589</span>
              </div>
            </div>
            <div className="col-md-2">
              <div className="txtGrp">
                <label>Parcel Type</label>
                <select className="input" required>
                  <option value="">Document</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </select>
              </div>
            </div>
            <div className="col-md-2">
              <div className="txtGrp">
                <label>Length </label>
                <input type="" className="input" required placeholder="" />
                <span className="cm">cm</span>
              </div>
            </div>
            <div className="col-md-2">
              <div className="txtGrp">
                <label>Width </label>
                <input type="" className="input" required placeholder="" />
                <span className="cm">cm</span>
              </div>
            </div>
            <div className="col-md-2">
              <div className="txtGrp">
                <label>Height </label>
                <input type="" className="input" required placeholder="" />
                <span className="cm">cm</span>
              </div>
            </div>
            <div className="col-md-2">
              <div className="txtGrp">
                <label>Weight </label>
                <input type="" className="input" required placeholder="" />
                <span className="cm">kg</span>
              </div>
            </div>
            <div className="btn_blk">
                  <Link href="" className="site_btn blank">
                 Add More Parcel
                  </Link>
                </div>
          </div>
        </form>
      </div>
    </div>
  );
}
