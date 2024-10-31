import React from "react";

export default function Step2() {
  return (
    <div>
      {/* step 2*/}
      <div>
        {/* step 1 */}
        <div className="head">
          <h4>Select Your Vehicle Here</h4>
        </div>
        <div className="inner_bulk step2">
          <div className="flex">
            <div className="coll">
              <div className="inner">
                <div className="icon">
                  <img src="/images/st4.png" />
                </div>
                <h4>Truck</h4>
              </div>
            </div>
            <div className="coll">
              <div className="inner selected">
                <div className="icon">
                  <img src="/images/check.png" />
                </div>
                <h4>Selected Car</h4>
              </div>
            </div>
            <div className="coll">
              <div className="inner">
                <div className="icon">
                  <img src="/images/st2.png" />
                </div>
                <h4>Van</h4>
              </div>
            </div>
            <div className="coll">
              <div className="inner">
                <div className="icon">
                  <img src="/images/st1.png" />
                </div>
                <h4>Tractor</h4>
              </div>
            </div>
            <div className="coll">
              <div className="inner">
                <div className="icon">
                  <img src="/images/st3.png" />
                </div>
                <h4>Bike</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
