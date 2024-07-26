import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import "../LandingPage/Landing.css";

const About: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBookAnAppointmentClick = useCallback(() => {
    navigate("/appointment");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onServicesTextClick = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  const onUitilityContainerClick = useCallback(() => {
    navigate("/404-page");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onSearchIconClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="about1">
      <div className="top-bar">
            {/* leftside content */}
            <div className="welcome-to-pharma">
              Welcome to KJS Dental Hospital.
            </div>

            <div className="main-mobile-email-tag">

            <div className="top-mobile-email-tag">
            <img className="icon7" alt="" src="/icon.svg" />
            <div className="div13">+91 9989741023</div>
            </div>

            <a href="mailto:kjsdentalhospital@gmail.com" className="top-mobile-email-tag">
            <img className="icon7" alt="" src="/icon1.svg" />
            <div className="abcgmailcom">kjsdentalhospital@gmail.com</div>
            </a>
          </div>
          </div>
          <div className="second-container">
      <div className="ham-dropdown">
            <img src="/menu.svg"/>
      </div>

            <div className="second-container-logo">
             <img className="logo-style" src="https://s3-ap-southeast-1.amazonaws.com/content-ewns/images/logoimages/5a8085658d5dbc46c047a62b.png"/>
            </div>

            <div className="second-menu-container">
            <div className="home1">Home</div>
              <div className="about" onClick={onAboutUsTextClick}>
                About
              </div>
              <div className="about" onClick={onServicesTextClick}>
                Services
              </div>
              
              <div className="about" onClick={onContactUsTextClick}>
                Contact Us
              </div>
            </div>

            <div className="search-container">
              <div className="search">
              <img className="" alt="" src="/search.svg" />
              </div>
              <div>
                <button className="appointment-btn"  onClick={onBookAnAppointmentClick}>Book Appointment</button>
              </div>
           
           
          
          
         


            </div>
    </div>
    <div className="banner">
          <img className="image-icon" alt="" src="/photo@2x.png"  />
          <div className="image-text">
            
            <div className="img-subtext-two">
            About Us
            </div>
            <div className="img-subtext-three">
            Home {'>'} About Us
            </div>
            <div>
           
            </div>
          </div>
        </div>

        <div className="heading">
          
          
          
          <div className="title1">
            <div className="feel-like-home">
            Our team helps you get your life back on track.
            </div>
           
          </div>
          <div className="our-team-of7">{`Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free health quickly and easily. We thoroughly evaluate & treat all of the contributing root factors related to your issue. Includes, but is not limit, your work and home stressors.`}</div>
         
        </div>

        <div className="banner">
          <img className="image-icon" alt="" src="/video@2x.png" />
         
        </div>

        <div className="about-us-container">
          <div className="about-us-content">
          <div className="departments">THE LEADERS</div>
          <div>We have the best Pharma & Medical</div>
          <div>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer.</div>
          <div>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate.</div>
         
          </div>
          <div className="about-image">
             <div className="about-us-content-second">
          <div className="departments">OUR STORY</div>
          <div> Our mission is to help patients live better</div>
          <div>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer.</div>
          <div>Over 400 leading hospitals and clinics.</div>
          <div>
          Trusted doctors across 20+ specialties
          </div>
          <div>Award-winning practice management</div>
          </div>
          </div>
        </div>

     
     
        <div className="schedule-img-container">
            <img className="schedule-img" src="/Group 2.svg"/>
            <div className="schedule-content">
              <div>
              Online consultations with Certified doctors
              </div>
              <div>
                <button className="schedule-btn"  onClick={onBookAnAppointmentClick}>Book Appointment</button>
                <button className="schedule-btn"  onClick={onBookAnAppointmentClick}>Call: 1-800-123-9999</button>
              </div>
              </div>
          </div>
   
      
      <div className="value">
        <div className="text18">
          <b className="our-values-that">Our values that drive success</b>
          <div className="our-team-of8">{`Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free health quickly and easily. We thoroughly evaluate & treat all of the contributing root factors related to your issue. Includes, but is not limit, your work and home stressors.`}</div>
        </div>
      </div>
     
      
      <div className="parent1">
        <div className="div20">
          <img className="icon18" alt="" src="/icon4.svg" />
          <div className="text19">
            <div className="bio-technology">Bio Technology</div>
            <div className="our-team-of9">
              Our team of highly trained professionals uses the latest healing
              technologies.
            </div>
          </div>
        </div>
        <div className="div21">
          <img className="icon18" alt="" src="/icon5.svg" />
          <div className="text19">
            <div className="bio-technology">Vaccine</div>
            <div className="our-team-of9">
              Our team of highly trained professionals uses the latest healing
              technologies.
            </div>
          </div>
        </div>
        <div className="div22">
          <img className="icon18" alt="" src="/icon6.svg" />
          <div className="text19">
            <div className="bio-technology">Expert Doctors</div>
            <div className="our-team-of11">
              Our team of highly trained professionals uses the latest healing
              technologies.
            </div>
          </div>
        </div>
        <div className="div22">
          <img className="icon18" alt="" src="/icon7.svg" />
          <div className="text19">
            <div className="bio-technology">Latest Technology</div>
            <div className="our-team-of11">
              Our team of highly trained professionals uses the latest healing
              technologies.
            </div>
          </div>
        </div>
      </div>
      <div className="content11">
        <img className="background-icon2" alt="" src="/background2.svg" />
        <div className="copyright-pharma1">
          Copyright © Pharma | Designed by EWNS
        </div>
        <div className="content12">
          <div className="div24">
            <div className="logo1">
              <div className="icon22">
                <div className="icon-inner" />
                <div className="rectangle-div" />
                <img className="intersect-icon1" alt="" src="/intersect.svg" />
              </div>
              <div className="pharma1">Pharma</div>
            </div>
            <div className="contact-details1">
              <div className="call1">
                <div className="div25">(+22) 123 - 4567 - 900</div>
                <div className="call-item" />
                <img className="vector-icon4" alt="" src="/vector1.svg" />
              </div>
              <div className="mail1">
                <div className="div25">support@doctorate.com</div>
                <div className="call-item" />
                <img className="vector-icon5" alt="" src="/vector2.svg" />
              </div>
              <div className="follow4">
                <img className="fb-icon4" alt="" src="/fb2.svg" />
                <img className="insta-icon2" alt="" src="/insta1.svg" />
                <img className="twiter-icon4" alt="" src="/twiter2.svg" />
              </div>
            </div>
          </div>
          <div className="div26">
            <div className="quotes2">
              <div className="quotes3">
                <div className="a-simple-story-container1">
                  <p className="online-consultations-with">
                    “A Simple Story About
                  </p>
                  <p className="online-consultations-with">{`The Doctorate Medical Center & Health Care Foundation`}</p>
                </div>
              </div>
            </div>
            <div className="explore2">
              <div className="explore3">Explore</div>
              <div className="home2" onClick={onHomeTextClick}>
                Home
              </div>
              <div className="home2" onClick={onAboutUsTextClick}>
                About us
              </div>
              <div className="home2" onClick={onServicesTextClick}>
                Services
              </div>
              <div className="testimonals1">Testimonals</div>
              <div className="news1">News</div>
            </div>
            <div className="uitility1" onClick={onUitilityContainerClick}>
              <div className="bio-technology">Uitility Pages</div>
              <div className="style-guide-changelog-container1">
                <p className="online-consultations-with">Style Guide</p>
                <p className="online-consultations-with">Changelog</p>
                <p className="online-consultations-with">Licenses</p>
                <p className="online-consultations-with">Protected Page</p>
                <p className="online-consultations-with">404 Page</p>
              </div>
            </div>
            <div className="appoinment1">
              <div className="text23">
                <div className="bio-technology">Book an appointment</div>
                <div className="it-is-a1">
                  It is a long established fact that a reader will be distracted
                </div>
              </div>
              <div className="button15">
                <div className="bg1" />
                <div className="your-email-address1">your email address</div>
              </div>
              <div className="button16">
                <div className="submit1">Submit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
