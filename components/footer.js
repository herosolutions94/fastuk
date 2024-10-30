import Link from "next/link"
import React from 'react'

export default function Footer() {
  const data = {
    list_02: [
   
      {
        id: 1,
        text: "About Us",
        link: "/about",
      },
      {
        id: 2,
        text: "For Rider",
        link: "/rider",
     
      },
      {
        id: 3,
        text: "For Business",
        link: "/business",
      }
    ],
    list_03: [
      {
        id: 1,
        text: "Help & Support",
        link: "/help-support",
      },
      {
        id: 2,
        text: "Login",
        link: "/login",
      },
      {
        id: 3,
        text: "Contact Us",
        link: "/",
      }
    
    ],
    
  }
    return (
      <footer>
          <div className="contain">
            <div className="flex_row main_row row">
              <div className="col-lg">
                <div className="in_col">
                  <ul className="lst contact_lst">
                  <li>
                        <Link href="tel:347-919-5222"><img src="/images/pin.svg" alt=""/><span>401 New Mexico 195, Elephant Butte
                        New York, 87935</span></Link>
                    </li>
                    <li>
                        <Link href="tel:347-919-5222"><img src="/images/Phone.svg" alt=""/><span>(540) 229-6647</span></Link>
                    </li>
                    <li>
                        <Link href="mailto:contact@info.com"><img src="/images/envelope.svg" alt=""/><span>info.fastuk@gmail.com</span></Link>
                    </li>
                  </ul>
                  <div className="social_logon">
                    <Link href="/" target="_blank" rel="noreferrer">
                      <img src="/images/f1.svg" alt="" />
                    </Link>
                    <Link href="/" target="_blank" rel="noreferrer">
                      <img src="/images/f2.svg" alt="" />
                    </Link>
                    <Link href="/" target="_blank" rel="noreferrer">
                      <img src="/images/f3.svg" alt="" />
                    </Link>
                    <Link href="/" target="_blank" rel="noreferrer">
                      <img src="/images/f4.svg" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg mid_col">
                <div className="in_col">
                  <h4>
                  Quick Links
                  </h4>
                  <ul className="list">
                    {data.list_02.map((val) => {
                      return (
                        <li key={val.id}>
                          <Link href={val.link}>{val.text}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-lg mid_col">
                <div className="in_col">
                  <h4>
                  Company
                  </h4>
                  <ul className="list">
                    {data.list_03.map((val) => {
                      return (
                        <li key={val.id}>
                          <Link href={val.link}>{val.text}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="in_col">
                  <h4>
                  Signup for Newsletters
                  </h4>
                  <div className="subscribe">
                    <p>Stay up to date with the latest news and deals!</p>
                    <form>
                      <input type="text" className="input" name="" placeholder={"Enter your email address"}/>
                      <button type="submit">
                        <img src="/images/send-2.svg"/>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="copyright">
              <p className="text-center">
              Copyright © 2024, All Rights  FastUK
              </p>
            </div>
          </div>
        </footer>
    )
  }