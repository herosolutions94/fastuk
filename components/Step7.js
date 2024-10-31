import React from "react";
import Link from "next/link";

export default function Step7() {
  return (
    <div>
      {/* step 7 */}
      <div className="head">
        <h4>Order Summary</h4>
      </div>
      <div className="step7">
        <div className="order_tbl">
          <table className="item-table">
            <thead>
              <tr>
                <th>Item Description</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>50 | 30 | 20 | 5</td>
                <td>1</td>
                <td>£150.00</td>
                <td>£150.00</td>
              </tr>
              <tr>
                <td>50 | 30 | 20 | 5</td>
                <td>1</td>
                <td>£200.00</td>
                <td>£200.00</td>
              </tr>
              <tr>
                <td>50 | 30 | 20 | 5</td>
                <td>1</td>
                <td>£100.00</td>
                <td>£100.00</td>
              </tr>
            </tbody>
          </table>

          <table className="total_bloc">
            <tbody>
              <tr className="subtotal">
                <td width="80%">Subtotal</td>
                <td width="20%">£450.00</td>
              </tr>
              <tr className="tax">
                <td width="80%">Tax (8.5%)</td>
                <td width="20%">£38.25</td>
              </tr>
              <tr className="total">
                <td width="80%">Total</td>
                <td width="20%">£488.25</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <form className="checkout-form">
        <div className="head headtop">
          <h4>Payment Method</h4>
        </div>
        <div className="checkout inner_bulk">
          <div className="head_">
            <div className="checkbox">
              <input type="radio" name="paymentMethod" id="creditCard" />
              <label htmlFor="paypal" >
                <h4>PayPal</h4>
                <p>
                  After clicking "submit" button, you will be redirected to
                  PayPal to complete your donation securely.
                </p>
              </label>
            </div>
            <div className="images paypal">
              <img src="/images/card4.svg" />
            </div>
          </div>
        </div>
        <div className="checkout inner_bulk">
          <div className="head_">
            <div className="checkbox">
              <input type="radio" name="paymentMethod" id="creditCard" />
              <label htmlFor="creditCard" className="head_card">
                <h4>Credit Card</h4>
                <p>
                  Securely Pay with Your Card – Effortless Transactions Await!
                </p>
              </label>
            </div>
            <div className="images">
              <img src="/images/card1.svg" />
              <img src="/images/card2.svg" />
              <img src="/images/card3.svg" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="txtGrp">
                <input
                  type=""
                  className="input"
                  required
                  placeholder="Card number"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="txtGrp">
                <input
                  type=""
                  className="input"
                  required
                  placeholder="Card holder name"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="txtGrp">
                <input
                  type=""
                  className="input"
                  required
                  placeholder="Expiry Date(mm/dd/yy)"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="txtGrp">
                <input type="" className="input" required placeholder="CVC?" />
              </div>
            </div>
          </div>
        </div>
        <div className="checkout inner_bulk">
          <div className="head_">
            <div className="checkbox">
              <input type="radio" name="paymentMethod" id="creditCard" />
              <label htmlFor="paypal" >
                <h4>Apple Pay</h4>
                <p>
                  Apple Pay offers a fast, secure, and private way to make
                  payments using your Apple devices.
                </p>
                <Link href="" className="apple-btn">
                  <img src="/images/apple-btn.svg" />
                </Link>
              </label>
            </div>
            <div className="images paypal">
              <img src="/images/card5.svg" />
            </div>
          </div>
        </div>
        <div className='check-flex'>
        <input type="checkbox" />
        <label>I agree to the <a href="" className="underline">Terms and Conditions</a> and <a href="" className="underline">Privacy Policy</a>.</label>
      </div>
      </form>
    </div>
  );
}
