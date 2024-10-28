import React from "react";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

export default function Testimonials() {
  const testiSlider = {
    autoplay: true,
    loop: true,
    dots: true,
    nav: false,
    navText: [
      '<img src="/images/arrow-left.svg" />',
      '<img src="/images/arrow-right.svg" />',
    ],
    smartSpeed: 1000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      580: {
        items: 1,
      },
      991: {
        items: 2,
      },
      1200: {
        items: 3,
      },
      1600: {
        items: 3,
      },
    },
  };

  return (
    <>
      <section id="testimonial">
        <div className="contain">
          <div className="content_center">
            <div className="title">TESTIMONIALS</div>
            <h2>What Our Clients Say</h2>
            <p>Meet the agents who will assist you</p>
          </div>
        
      <OwlCarousel {...testiSlider}>
        <div className="item">
          <div className="inner">
            <div className="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p>
              .. followed by some bogus content. Aenean commodo ligula egget
              dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus.
            </p>
            <div className="profile">
              <div className="image">
                <img src="images/p1.svg" alt="" />
              </div>
              <div className="text">
                <h5>Jack Albert</h5>
                <h6>CEO SoftTechit</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="inner">
            <div className="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p>
              .. followed by some bogus content. Aenean commodo ligula egget
              dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus.
            </p>
            <div className="profile">
              <div className="image">
                <img src="images/p1.svg" alt="" />
              </div>
              <div className="text">
                <h5>Jack Albert</h5>
                <h6>CEO SoftTechit</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="inner">
            <div className="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p>
              .. followed by some bogus content. Aenean commodo ligula egget
              dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus.
            </p>
            <div className="profile">
              <div className="image">
                <img src="images/p1.svg" alt="" />
              </div>
              <div className="text">
                <h5>Jack Albert</h5>
                <h6>CEO SoftTechit</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="inner">
            <div className="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p>
              .. followed by some bogus content. Aenean commodo ligula egget
              dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus.
            </p>
            <div className="profile">
              <div className="image">
                <img src="images/p1.svg" alt="" />
              </div>
              <div className="text">
                <h5>Jack Albert</h5>
                <h6>CEO SoftTechit</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="inner">
            <div className="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p>
              .. followed by some bogus content. Aenean commodo ligula egget
              dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus.
            </p>
            <div className="profile">
              <div className="image">
                <img src="images/p1.svg" alt="" />
              </div>
              <div className="text">
                <h5>Jack Albert</h5>
                <h6>CEO SoftTechit</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="inner">
            <div className="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p>
              .. followed by some bogus content. Aenean commodo ligula egget
              dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus.
            </p>
            <div className="profile">
              <div className="image">
                <img src="images/p1.svg" alt="" />
              </div>
              <div className="text">
                <h5>Jack Albert</h5>
                <h6>CEO SoftTechit</h6>
              </div>
            </div>
          </div>
        </div>
    
      </OwlCarousel>

      </div>
        </section>
    </>
  );
}
