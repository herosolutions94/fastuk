import React from "react";
import Link from "next/link";

export default function Step4() {
  return (
    <div>
      {/* step 4 */}
      <div className="head">
        <h4>Here is your Via’s Detail</h4>
      </div>
      <div className="parcel-items">
        <div className="coll">
          <h5>Parcels</h5>
          <p>FU #564589</p>
          <p className="small">12 x 24 x 10 x 15</p>
        </div>
        <div className="coll">
          <div className="arrows pick">
            <img src="/images/pick.svg" />
          </div>
          <h5>Source</h5>
          <select className="input" required>
            <option value="">10 High Street, SW1A 1AA</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
          <div className="arrows drop">
            <img src="/images/drop.svg" />
          </div>
        </div>
        <div className="coll">
          <h5>Destination</h5>
          <select className="input" required>
            <option value="">10 High Street, SW1A 1AA</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
      </div>
      <div className="parcel-items">
        <div className="coll">
          <h5>Parcels</h5>
          <p>FU #564589</p>
          <p className="small">12 x 24 x 10 x 15</p>
        </div>
        <div className="coll">
          <div className="arrows pick">
            <img src="/images/pick.svg" />
          </div>
          <h5>Source</h5>
          <select className="input" required>
            <option value="">10 High Street, SW1A 1AA</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
          <div className="arrows drop">
            <img src="/images/drop.svg" />
          </div>
        </div>
        <div className="coll">
          <h5>Destination</h5>
          <select className="input" required>
            <option value="">10 High Street, SW1A 1AA</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
      </div>
      <div className="parcel-items">
        <div className="coll">
          <h5>Parcels</h5>
          <p>FU #564589</p>
          <p className="small">12 x 24 x 10 x 15</p>
        </div>
        <div className="coll">
          <div className="arrows pick">
            <img src="/images/pick.svg" />
          </div>
          <h5>Source</h5>
          <select className="input" required>
            <option value="">10 High Street, SW1A 1AA</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
          <div className="arrows drop">
            <img src="/images/drop.svg" />
          </div>
        </div>
        <div className="coll">
          <h5>Destination</h5>
          <select className="input" required>
            <option value="">10 High Street, SW1A 1AA</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
      </div>
      <div className="parcel-items">
        <div className="coll">
          <h5>Parcels</h5>
          <p>FU #564589</p>
          <p className="small">12 x 24 x 10 x 15</p>
        </div>
        <div className="coll">
          <div className="arrows pick">
            <img src="/images/pick.svg" />
          </div>
          <h5>Source</h5>
          <select className="input" required>
            <option value="">10 High Street, SW1A 1AA</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
          <div className="arrows drop">
            <img src="/images/drop.svg" />
          </div>
        </div>
        <div className="coll">
          <h5>Destination</h5>
          <select className="input" required>
            <option value="">10 High Street, SW1A 1AA</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
      </div>
    </div>
  );
}
