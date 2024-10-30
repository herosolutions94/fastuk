import React from "react";
import Link from "next/link";

export default function Signup() {
  return (
    <div>

        <div className="contain">
          <div className="login_header">
            <div className="logon_logo">
              <Link href="/">
                <img src="/images/logo.png" alt="" />
              </Link>
            </div>
            <div className="btn_blk">
              <Link href="/login" className="">
               Already have an account? <strong>Login</strong>
              </Link>
            </div>
          </div>
        </div>

        <section id="login">
          <div className="contain">
            <div className="outer">
              <h3>Join us today</h3>
              <p>Let's get started today.</p>

              <form>
                <div className="form_blk">
                  <label>Name</label>
                  <input
                    id="frm-email"
                    type=""
                    name=""
                    autoComplete="name"
                    placeholder="Full name"
                    className="input"
                    required
                  />
                </div>
                <div className="form_blk">
                  <label>Email</label>
                  <input
                    id="frm-email"
                    type="email"
                    name="email"
                    autoComplete="name"
                    placeholder="hi@example.com"
                    className="input"
                    required
                  />
                </div>
                <div className="form_blk">
                  <label>Password</label>
                  <input
                    id="frm-password"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className="input"
                    required
                  />
                    <img class="eye" src="/images/eye.svg"></img>
                </div>
                <div className="form_blk">
                  <label>Password</label>
                  <input
                    id="frm-password"
                    type="password"
                    name="password"
                    placeholder="Confirm Password"
                    className="input"
                    required
                  />
                    <img class="eye" src="/images/eye.svg"></img>
                </div>
                <div className="have_check form_blk">
                  <div className="lbl_btn">
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">
                      By creating an account you confirm that you agree to our
                      website <a href="/terms-condition">terms of use</a> and our <a href="/privacy-policy">privacy notice</a>.
                    </label>
                  </div>
                </div>
                <div className="btn_blk">
                  <button className="site_btn block">Signup</button>
                </div>
                <div className="btn_blk">
                  <button className="site_btn white block">
                    <img src="images/google.svg"></img> Signup with Google
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
    </div>
  );
}
