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
                  <img src="/images/van 1.svg" />
                </div>
                <h4>Truck</h4>
              </div>
            </div>
            <div className="coll">
              <div className="inner selected">
                <div className="icon">
                  <img src="/images/tick.svg" />
                </div>
                <h4>Selected Car</h4>
              </div>
            </div>
            <div className="coll">
              <div className="inner">
                <div className="icon">
                  <img src="/images/pickup-truck.svg" />
                </div>
                <h4>Van</h4>
              </div>
            </div>
            <div className="coll">
              <div className="inner">
                <div className="icon">
                  <img src="/images/farm-vehicle.svg" />
                </div>
                <h4>Tractor</h4>
              </div>
            </div>
            <div className="coll">
              <div className="inner">
                <div className="icon">
                  <img src="/images/bycicle.svg" />
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
