import Link from "next/link"
import { useRouter} from 'next/router'
import React,{useState} from 'react'

export default function Header() {
    const[toggle,setToggle] = useState(false);
    const ToggleAction = () =>{
      setToggle(!toggle);
    }
    const[userDrop,setUserDrop] = useState(false);
    const ToggleUserDrop = () => {
      setUserDrop(!userDrop);
    }
    return (
      <header>
        <div className="contain">
          <div className="logo">
              <Link href="/">
                  <img src="/images/logo.png" alt="" />
              </Link>
          </div>
          <div className={toggle ? "toggle active" : "toggle"} onClick={ToggleAction}><span></span></div>
          {/* <nav id="nav" className={toggle ? "active" : ""}>
            <ul>
              <li><Link href="/" onClick={ToggleAction}>Leave a Review</Link></li>
              <li><Link href="/contact" onClick={ToggleAction}>Contact Us</Link></li>
            </ul>
          </nav> */}
          {/* =========user no login====== */}
          <div className="login_btns">
            <ul>
            <li><Link href="/">For Business</Link></li>
              <li><Link href="/login">Login</Link></li>
              <li className="btn_blk"><Link href="/signup" className="site_btn">SignUp</Link></li>
            </ul>
          </div>
         
          <div className="clearfix"></div>
        </div>
      </header>
    )
  }