import React from "react";
import Link from "next/link";

export default function Login() {
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
              <Link href="" className="">
                Don’t have an account? <strong>Get started today</strong>
              </Link>
            </div>
          </div>
        </div>

        <section id="login">
          <div className="contain">
            <div className="outer">
              <h3>Welcome back!</h3>
              <p>Let's get you some health tips today.</p>

              <form>
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
                <div className="form_blk blk_link">
                  <Link className="link" href="/forgot-password">
                    Forgot Password?
                  </Link>
                </div>
                <div className="btn_blk">
                  <button className="site_btn block">Login</button>
                </div>
                <div className="btn_blk">
                  <button className="site_btn white block">
                    <img src="/images/google.svg"></img> Continue with Google
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
    </div>
  );
}
