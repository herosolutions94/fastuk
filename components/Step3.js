import React, { useState } from "react";
import Link from "next/link";
import Add_new_Address from "./add-new-address";
import Popup from "./popup";
import ViaAddress from "./add-via-address";

export default function Step3() {
  // popups
  const [isAddNewAddressPopupOpen, setIsAddNewAddressPopupOpen] = useState(false);
  const [isViaAddressPopupOpen, setIsViaAddressPopupOpen] = useState(false);

  const handleOpenAddNewAddressPopup = () => {
    setIsAddNewAddressPopupOpen(true);
  };
  const handleCloseAddNewAddressPopup = () => {
    setIsAddNewAddressPopupOpen(false);
  };

  const handleOpenViaAddressPopup = () => {
    setIsViaAddressPopupOpen(true);
  };
  const handleCloseViaAddressPopup = () => {
    setIsViaAddressPopupOpen(false);
  };

  return (
    <div>
      {/* step 3 */}
      <div className="head">
        <h4>Enter Your Shipment Details Here</h4>
      </div>
      <div className="inner_bulk">
        <div className="flex step3">
          <div className="coll">
            <form>
              <div className="row">
                <h5>Source</h5>
                <div className="col-md-12">
                  <div className="txtGrp">
                    <label>Enter Your Address</label>
                    <select className="input" required>
                      <option value="">10 High Street, SW1A 1AA</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                    </select>
                    <Link
                      className="loc"
                      href="#"
                      onClick={handleOpenAddNewAddressPopup}
                    >
                      <img src="/images/loc.svg" alt="Location icon" />
                      Pick from saved addresses
                    </Link>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="txtGrp">
                    <label>Enter Your Postcode </label>
                    <input
                      type="text"
                      className="input"
                      required
                      placeholder="SW1A 1AA"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="txtGrp">
                    <label>Enter Your Name</label>
                    <input
                      type="text"
                      className="input"
                      required
                      placeholder="John"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="txtGrp">
                    <label>Phone Number</label>
                    <img className="flg" src="/images/uk.svg" alt="UK flag" />
                    <input
                      type="text"
                      className="input phone"
                      required
                      placeholder="+44"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="txtGrp">
                    <label>Enter Your City</label>
                    <input
                      type="text"
                      className="input"
                      required
                      placeholder="Birmingham"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="coll">
            <form>
              <div className="row">
                <h5>Destination</h5>
                <div className="col-md-12">
                  <div className="txtGrp">
                    <label>Enter Your Address</label>
                    <select className="input" required>
                      <option value="">10 High Street, SW1A 1AA</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                    </select>
                    <span className="loc" onClick={handleOpenAddNewAddressPopup}>
                      <img src="/images/loc.svg" alt="Location icon" />
                      Pick from saved addresses
                    </span>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="txtGrp">
                    <label>Enter Your Postcode </label>
                    <input
                      type="text"
                      className="input"
                      required
                      placeholder="SW1A 1AA"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="txtGrp">
                    <label>Enter Your Name</label>
                    <input
                      type="text"
                      className="input"
                      required
                      placeholder="John"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="txtGrp">
                    <label>Phone Number</label>
                    <img className="flg" src="/images/uk.svg" alt="UK flag" />
                    <input
                      type="text"
                      className="input phone"
                      required
                      placeholder="+44"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="txtGrp">
                    <label>Enter Your City</label>
                    <input
                      type="text"
                      className="input"
                      required
                      placeholder="Birmingham"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="btn_blk">
        <Link href="#" onClick={handleOpenViaAddressPopup} className="plus">
          <img src="/images/plus.svg" alt="Add icon" />
          Add Vias Here
        </Link>
      </div>
      {/* Popup components */}
      <Popup isOpen={isAddNewAddressPopupOpen} onClose={handleCloseAddNewAddressPopup}>
        <Add_new_Address onClose={handleCloseAddNewAddressPopup} />
      </Popup>
      <Popup isOpen={isViaAddressPopupOpen} onClose={handleCloseViaAddressPopup}>
        <ViaAddress onClose={handleCloseViaAddressPopup} />
      </Popup>
    </div>
  );
}
