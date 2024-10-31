import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        phone: '',
        subject: '',
        message: ''
      });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (API call or other logic)
        console.log('Form Data Submitted: ', formData);
      };
  return (
  <>
  <main>

    <section className="contact-form">
      <div className="contain">
        <div className="content_center">
          <div className="title">CONTACT</div>
          <h2>Let’s Start a Conversation</h2>
        </div>
        <div className="flex">
          <div className="col col1">
            <h3>Ask How can We Help You</h3>
            <ul className="info-listing">
              <li>
                <div className="data">
                  <h5>Seek our platform in action</h5>
                  <p>Our company provides a full range of services for the construction of private houses and cottages since 199</p>
                </div>
              </li>
              <li>
                <div className="data">
                  <h5>Seek our platform in action</h5>
                  <p>Our company provides a full range of services for the construction of private houses and cottages since 199</p>
                </div>
              </li>
              <li>
                <div className="data">
                  <h5>Seek our platform in action</h5>
                  <p>Our company provides a full range of services for the construction of private houses and cottages since 199</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col col2">
            <div className="inner">
              <div className="sec_heading">
                <h3>Let's Start</h3>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <input
                        type="email"
                        className="input"
                        required
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <input
                        type="password"
                        className="input"
                        required
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <img className="flg wl" src="/images/uk.svg" />
                      <input
                        type=""
                        className="input phone"
                        required
                        placeholder="+ 44"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <input
                        type="text"
                        className="input"
                        required
                        placeholder="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="txtGrp">
                      <textarea
                        className="txtArea"
                        rows="4"
                        required
                        placeholder="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="btn-box text-center btn_blk">
                      <button className="site_btn color" type="submit">Submit</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact_sec">
      <div className="contain">
        <div className="flex">
          <div className="col">
            <div className="inner">
              <div className="image">
                <img src="/images/pin.svg" alt="Map Location" />
              </div>
              <div className="cntnt">
                <h5>Address</h5>
                <p>Lorance Road 542B, Tailstoi Town 5248 MT, Country</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="inner">
              <div className="image">
                <img src="/images/envelope.svg" alt="Email Icon"  />
              </div>
              <div className="cntnt">
                <h5>Email</h5>
                <a href="mailto:abcinfo@gmail.com">abcinfo@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="inner">
              <div className="image">
                <img src="/images/Phone.svg" alt="Phone Icon" />
              </div>
              <div className="cntnt">
                <h5>Phone</h5>
                <a href="tel:(734) 219-86796">(734) 219-86796</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  </>
  )
}
