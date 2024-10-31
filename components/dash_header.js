import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const DashHeader = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="dash_header">
        <div className="contain">
          <div className="logo">
            <Link href="/">
              <img src="/images/logo.png" alt="" />
            </Link>
          </div>
          <nav>
            <ul id="nav">
              <li>
                <Link href="">Dashboard</Link>
              </li>
              <li>
                <Link href="">My Orders</Link>
              </li>
              <li>
                <Link href="">
                  <div className="notify">
                    <img src="/images/bell.svg" alt="User" />
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="proIco _dropDown" ref={dropdownRef}>
            <div
              className={`user_img _dropBtn ${dropdownVisible ? "active" : ""}`}
              onClick={handleDropdownToggle}>
              <div className="ico">
                <img src="/images/uj_user.png" alt="User" />
              </div>
              <div className="icon_text">
                <p>Andrew</p>
              </div>
            </div>

            {dropdownVisible && (
              <div className="proDrop _dropCnt">
                <ul className="dropLst">
                  <li>
                    <Link href="/dashboard/">
                      <span>Agent Dashboard</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard/dash-client-dashboard">
                      <span>Client Dashboard</span>
                    </Link>
                  </li>

                  <li>
                    <Link href="/dashboard/ambassador-program">
                      <span>Ambassador Program</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard/refferal-agreement">
                      <span>Refferal Agreement</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <span>Logout</span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="clearfix"></div>
        </div>
      </header>
    </>
  );
};

export default DashHeader;
