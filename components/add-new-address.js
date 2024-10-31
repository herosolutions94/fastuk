import React from "react";
import Link from "next/link";

export default function Add_new_Address() {
  return (
    <div className="address">
      <h3>Pick Your Address</h3>
      <form>
        <div className="radio-item">
          <input type="radio" id="radio-1" name="contact" />
          <label htmlFor="radio-1">
            <div className="item-details">
              <div className="coll">
                {" "}
                <h4> Name</h4> <p>Sahil Munir</p>
              </div>
              <div className="coll">
                {" "}
                <h4>Address</h4> <p>123 Main Street, London, UK</p>
              </div>
              <div className="coll">
                <h4>Post Code</h4> <p>Wx456</p>
              </div>
              <div className="coll">
                <h4>Phone Number</h4> <p>0151 234 5678</p>
              </div>
            </div>
          </label>
        </div>
        <div className="radio-item">
          <input type="radio" id="radio-1" name="contact" />
          <label htmlFor="radio-1">
            <div className="item-details">
              <div className="coll">
                {" "}
                <h4> Name</h4> <p>Sahil Munir</p>
              </div>
              <div className="coll">
                {" "}
                <h4>Address</h4> <p>123 Main Street, London, UK</p>
              </div>
              <div className="coll">
                <h4>Post Code</h4> <p>Wx456</p>
              </div>
              <div className="coll">
                <h4>Phone Number</h4> <p>0151 234 5678</p>
              </div>
            </div>
          </label>
        </div>

        <div className="radio-item">
          <input type="radio" id="radio-1" name="contact" />
          <label htmlFor="radio-1">
            <div className="item-details">
              <div className="coll">
                {" "}
                <h4> Name</h4> <p>Sahil Munir</p>
              </div>
              <div className="coll">
                {" "}
                <h4>Address</h4> <p>123 Main Street, London, UK</p>
              </div>
              <div className="coll">
                <h4>Post Code</h4> <p>Wx456</p>
              </div>
              <div className="coll">
                <h4>Phone Number</h4> <p>0151 234 5678</p>
              </div>
            </div>
          </label>
        </div>

        <div className="btn_blk">
          <button type="submit" className="site_btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
