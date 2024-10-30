import React from "react";

export default function Step1() {
  return (
    <div>
      {/* step 1 */}
      <div className="head">
        <h4>Enter Your Parcel Details Here</h4>
      </div>
      <div className="inner_bulk">
        <form>
          <div className="row">
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
              </div>
            </div>
            <div className="col-md-2">
              <div className="txtGrp">
                <label>Width </label>
                <input type="" className="input" required placeholder="" />
              </div>
            </div>
            <div className="col-md-2">
              <div className="txtGrp">
                <label>Height </label>
                <input type="" className="input" required placeholder="" />
              </div>
            </div>
            <div className="col-md-2">
              <div className="txtGrp">
                <label>Weight </label>
                <input type="" className="input" required placeholder="" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
