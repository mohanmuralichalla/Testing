import { FunctionComponent, useState, useCallback,useEffect } from "react";
import Frame from "../../common/misc/Frame";
import PortalPopup from "../../common/misc/PortalPopup";
import { useNavigate } from "react-router-dom";
import Component1 from "../../common/misc/Component1";
import Component from "../../common/misc/Component";
import "./Landing.css";
import { fetchDentalServices } from '../../utils/dentalserviceapi';
import  DentalService  from '../../types/dentalservicelist';


const Landing: FunctionComponent = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [dentalServices, setDentalServices] = useState<DentalService[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);   

      try {
        const   
 data = await fetchDentalServices();
        setDentalServices(data);
      } catch (error) {
        setError('Failed to fetch dental services');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  const navigate = useNavigate();

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onButtonContainerClick = useCallback(() => {
    navigate("/blog");
  }, [navigate]);

  const onContainerClick = useCallback(() => {
    navigate("/medical-experts");
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

  const onBookAppointmentTextClick = useCallback(() => {
    navigate("/appointment");
  }, [navigate]);

 

  return (
    <>
      <div className="landing">
        {/* Navbar content */}
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

          {/* <div className="bottom-main-top-bar">
          <div className="menu-wrapper">
            <div className="menu">
              <div className="home1">Home</div>
              <div className="about" onClick={onAboutUsTextClick}>
                About
              </div>
              <div className="about" onClick={onServicesTextClick}>
                Services
              </div>
              <div className="pages">Pages</div>
              <div className="dropdown">
                <div className="button5">
                  <img className="icon9" alt="" src="/icon2.svg" />
                </div>
              </div>
              <div className="about" onClick={onContactUsTextClick}>
                Contact Us
              </div>
            </div>
          </div>
         
        </div> */}
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
                <button className="appointment-btn"  onClick={onBookAppointmentTextClick}>Book Appointment</button>
              </div>
           
           
          
          
         


            </div>
    </div>

    <div className="banner">
          <img className="image-icon" alt="" src="/image@2x.png" />
         
          <div className="image-text">
            <div className="img-subtext-one">
            MEDICAL PROFESSIONALS
            </div>
            <div className="img-subtext-two">
            Makes Your Health Better<br/> Will Makes Us Better
            </div>
            <div className="img-subtext-three">
            Our team of highly trained professionals uses the latest
                  healing<br/> technologies to restore you to pain-free health
                  quickly and easily.
            </div>
            <div>
            <button className="appointment-btn"  onClick={openFrame}>Book Appointment</button>
            </div>
          </div>
        </div>

        <div className="heading">
          
            <div className="departments">departments</div>
          
          <div className="title1">
            <div className="feel-like-home">
              Feel Like Home With Best Medical Care
            </div>
          </div>
        </div>

        <div className="frame-div">
        {dentalServices.map((item, index) => (
        <div className="div14" key={index}>
          <div className="sub-content">
            <div className="sub-content">
              <div className="title10">
                <div className="angioplasty">{item.name}</div>
                <img className="title-child" alt="" src="/frame-2484.svg" />
              </div>
              <div className="our-team-of1">{item.shortBio}</div>
            </div>
            <div className="button6">
              <div className="submit">Read More</div>
              <img className="icon10" alt="" src="/3.svg" />
            </div>
          </div>
        </div>
      ))}
        </div>

        {/* <div className="About-us-pharma">
        <div className="heading1">
          
            <div className="medical-professionals">ABOUT US</div>
         
          <div className="title2">
            <div className="we-provide-a">
              We provide a best care for your health with specialist
            </div>
          </div>
        </div>
        <div className="collaboratively-administrate-e-container">
          <p className="collaboratively-administrate-e">
            <span className="collaboratively-administrate-e1">{`Collaboratively administrate empowered markets via plug-and-play networks. `}</span>
            <b className="dynamically-procrastinate-b2c">
              Dynamically procrastinate B2C
            </b>
            <span>
              {" "}
              users after installed base benefits. Dramatically visualize
              customer.
            </span>
          </p>
          <p className="collaboratively-administrate-e">&nbsp;</p>
          <p className="collaboratively-administrate-e">
            Completely synergize resource taxing relationships via premier niche
            markets. Professionally cultivate one-to-one customer service with
            robust ideas. Dynamically innovate.
          </p>
        </div>
        
        </div> */}

        <div className="about-us-container">
          <div className="about-us-content">
          <div className="departments">About Us</div>
          <div>We provide a best care for your health with specialist</div>
          <div>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer.</div>
          <div>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate.</div>
          <div className="about-us-status">
          <div className="about-status">
          <div><img src=""/></div>
          <div>20+ years of excellence</div>
          </div>
          <div className="about-status">
          <div><img src=""/></div>
          <div>20+ years of excellence</div>
          </div>
          </div>
          <div>
            <button className="about-btn">Know more</button>
          </div>
          </div>
          <div className="about-image">
          <img className="img-width" src="/image.svg"/>
          </div>
        </div>


        {/* <div className="cta">
          <div className="rectangle-parent">
            <div className="group-child" />
            <img className="mask-group-icon" alt="" src="/mask-group.svg" />
            <div className="heading2">
              <div className="title3">
                <b className="schedule-an-imperson">
                  Schedule an imperson or virtual appointment today
                </b>
                <div className="button2">
                  <div className="book-an-appointment" onClick={openFrame}>
                    Book an Appointment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

       
          <div className="schedule-img-container">
            <img className="schedule-img" src="/Group 2.svg"/>
            <div className="schedule-content">
              <div>
              Schedule an imperson or virtual appointment today
              </div>
              <div>
                <button className="schedule-btn">Book Appointment</button>
              </div>
              </div>
          </div>
        
         
          <div className="heading">
          
          <div className="departments">TESTIMONIALS</div>
        
        <div className="title1">
          <div className="feel-like-home">
          Feedbacks about our service from the bottom of heart
          </div>
        </div>
      </div>

      {/* <div className="frame-div-2">
      <div className="div14">
            <div className="profile">
              <div className="text1">
                <img className="image-icon1" alt="" src="/image1@2x.png" />
                <div className="name1">
                  <div className="dental-patient">Dental Patient</div>
                  <div className="robert-davis">Robert Davis</div>
                </div>
              </div>
              <img className="icon2" alt="" src="/icon2.svg" />
            </div>
            <div className="line" />
            <div className="text2">
              <div className="completely-synergize-resource1">
                Completely synergize resource taxing relationships via premier
                niche markets. Professionally cultivate one-to-one customer
                service with robust ideas. Dynamically innovate.
              </div>
              <div className="star">
                <img className="star-child" alt="" src="/star-1.svg" />
                <img className="star-child" alt="" src="/star-2.svg" />
                <img className="star-child" alt="" src="/star-3.svg" />
                <img className="star-child" alt="" src="/star-4.svg" />
                <img className="star-child" alt="" src="/star-5.svg" />
              </div>
            </div>
          </div>
          <div className="div14">
            <div className="profile">
              <div className="text1">
                <img className="image-icon1" alt="" src="/image1@2x.png" />
                <div className="name1">
                  <div className="dental-patient">Dental Patient</div>
                  <div className="robert-davis">Robert Davis</div>
                </div>
              </div>
              <img className="icon2" alt="" src="/icon2.svg" />
            </div>
            <div className="line" />
            <div className="text2">
              <div className="completely-synergize-resource1">
                Completely synergize resource taxing relationships via premier
                niche markets. Professionally cultivate one-to-one customer
                service with robust ideas. Dynamically innovate.
              </div>
              <div className="star">
                <img className="star-child" alt="" src="/star-1.svg" />
                <img className="star-child" alt="" src="/star-2.svg" />
                <img className="star-child" alt="" src="/star-3.svg" />
                <img className="star-child" alt="" src="/star-4.svg" />
                <img className="star-child" alt="" src="/star-5.svg" />
              </div>
            </div>
          </div>
          <div className="div14">
            <div className="profile">
              <div className="text1">
                <img className="image-icon1" alt="" src="/image1@2x.png" />
                <div className="name1">
                  <div className="dental-patient">Dental Patient</div>
                  <div className="robert-davis">Robert Davis</div>
                </div>
              </div>
              <img className="icon2" alt="" src="/icon2.svg" />
            </div>
            <div className="line" />
            <div className="text2">
              <div className="completely-synergize-resource1">
                Completely synergize resource taxing relationships via premier
                niche markets. Professionally cultivate one-to-one customer
                service with robust ideas. Dynamically innovate.
              </div>
              <div className="star">
                <img className="star-child" alt="" src="/star-1.svg" />
                <img className="star-child" alt="" src="/star-2.svg" />
                <img className="star-child" alt="" src="/star-3.svg" />
                <img className="star-child" alt="" src="/star-4.svg" />
                <img className="star-child" alt="" src="/star-5.svg" />
              </div>
            </div>
          </div>
          <div className="div14">
            <div className="profile">
              <div className="text1">
                <img className="image-icon1" alt="" src="/image1@2x.png" />
                <div className="name1">
                  <div className="dental-patient">Dental Patient</div>
                  <div className="robert-davis">Robert Davis</div>
                </div>
              </div>
              <img className="icon2" alt="" src="/icon2.svg" />
            </div>
            <div className="line" />
            <div className="text2">
              <div className="completely-synergize-resource1">
                Completely synergize resource taxing relationships via premier
                niche markets. Professionally cultivate one-to-one customer
                service with robust ideas. Dynamically innovate.
              </div>
              <div className="star">
                <img className="star-child" alt="" src="/star-1.svg" />
                <img className="star-child" alt="" src="/star-2.svg" />
                <img className="star-child" alt="" src="/star-3.svg" />
                <img className="star-child" alt="" src="/star-4.svg" />
                <img className="star-child" alt="" src="/star-5.svg" />
              </div>
            </div>
          </div>
          </div> */}
<div className="team-container">
          
           
              
                <div className="text9">
                  <div className="heading3">
                    
                      <div className="medical-experts">{`MEDICAL EXPERTs `}</div>
                    
                    <div className="title2">
                      <div className="the-professional-doctors">
                        The Professional Doctors
                      </div>
                    </div>
                  </div>
                </div>
             
              <div className="team-content">
                <div className="team-card" onClick={onContainerClick}>
                  <div className="image1">
                    <img className="image-icon5" alt="" src="/image5@2x.png" />
                  </div>
                  <div className="text10">
                    <div className="dr-helen-wilmore">Vanseena Adams</div>
                    <div className="dental-patient4">Dental Patient</div>
                  </div>
                  <div className="follow">
                    <img className="insta-icon" alt="" src="/insta.svg" />
                    <img className="fb-icon" alt="" src="/fb.svg" />
                    <img className="twiter-icon" alt="" src="/twiter.svg" />
                  </div>
                </div>
                <div className="team-card">
                  <div className="image1">
                    <img className="image-icon5" alt="" src="/image6@2x.png" />
                  </div>
                  <div className="text10">
                    <div className="dr-helen-wilmore">Dr. Helen Wilmore</div>
                    <div className="dental-patient4">Dental Patient</div>
                  </div>
                  <div className="follow">
                  <img className="insta-icon" alt="" src="/insta.svg" />
                    <img className="fb-icon" alt="" src="/fb1.svg" />
                    <img className="twiter-icon" alt="" src="/twiter1.svg" />
                  </div>
                </div>
                <div className="team-card">
                  <img className="image-icon5" alt="" src="/image7@2x.png" />
                  <div className="text10">
                    <div className="dr-helen-wilmore">Dr. Kate Winslot</div>
                    <div className="dental-patient4">Dental Patient</div>
                  </div>
                  <div className="follow">
                  <img className="insta-icon" alt="" src="/insta.svg" />
                    <img className="fb-icon" alt="" src="/fb1.svg" />
                    <img className="twiter-icon" alt="" src="/twiter1.svg" />
                  </div>
                </div>
              </div>
            
           
              <div className="line4" />


              <div className="counter-content">
                <Component1 prop="25" years="Years " experience="Experience" />
                <Component1
                  prop="893"
                  years="Medicament"
                  experience=" Invented
"
                  propWidth="161.9px"
                />
                <Component1
                  prop="75"
                  years="Awards"
                  experience="Winned"
                  propWidth="116.4px"
                />
                <Component1
                  prop="673 k"
                  years="Happy"
                  experience=" Clients"
                  propWidth="118.5px"
                />
                <Component1
                  prop="751"
                  years="Pharmacies"
                  experience=" Partners"
                  propWidth="160.4px"
                />
              </div>
            
          
        </div>

        <div className="layout-4">
          
        <div className="departments">NEWSLETTER</div>

        <div className="title1">
            <div className="feel-like-home">
            JOIN US
            </div>
          </div>

         
                <div className="subscribe">
                  <div className="input-group">
                    <input type="text" className="form-control-input-style-1"/>
                     
                    
                    <div className="input-group-append">
                      <div className="btn">
                        <div className="input-group-text">Subscribe</div>
                      </div>
                    </div>
                  </div>
                </div>
             
                 
        </div>
<div className="image-relative">
<img className="background-icon" alt="" src="/background.svg" />
<div className="bottom-content">
         
        
      <div className="bottom-content-1">

        <div className="bottom-subcontent-1">
          <div><img className="pharma" alt="" src="/pharma.svg" /></div>
          <div className="bottom-pharma">Pharma</div>
        </div>


        <div className="bottom-subcontent-2">
        <div className="bottom-subcontent-1">
        <div className="bottom-vector-icon"> <img className="call-icon"  alt="" src="/vector1.svg" /></div>
        <div className="call-number">5236 65376</div>
        </div>
        <div className="bottom-subcontent-1">
        <div className="bottom-vector-icon"> <img className="call-icon" alt="" src="/vector1.svg" /></div>
        <div className="call-number">(+22) 5236 65376</div>
        </div>
        <div className="bottom-subcontent-icon">
        
                 <img className="" alt="" src="/fb2.svg" />
                 <img className="" alt="" src="/insta1.svg" />
                 <img className="" alt="" src="/twiter2.svg" />
              
               </div>
        </div>
      </div>

      <div className="bottom-content-2">
        <div className="bottom-title">
        “A Simple Story About
The Doctorate Medical Center & Health Care Foundation
        </div>
        <div className="bottom-appointment-content">
           <div className="bottom-explore">
        <div className="whitespace"><b>Explore</b></div>
        <div>Home</div>
        <div>Services</div>
        <div>About Us</div>
        <div>Testimonials</div>
        <div>News</div>
        </div>
        <div className="bottom-explore">
        <div className="whitespace"><b>Utility Pages</b></div>
        <div>Home</div>
        <div>Services</div>
        <div>About Us</div>
        <div>Testimonials</div>
        <div>News</div>
        </div>
        <div className="bottom-explore">
        <div className="whitespace"><b>Book An Appointment</b></div>
        <div className="bottom-appointment-text">It is a long established fact that a reader will be distracted</div>
        <div>
          <input type="text" className="appointment-input"/>
        </div>
        <div>
          <button className="sb-btn">Submit</button>
        </div>
       
        </div>
        </div>
       
      </div>




       </div>
</div>
       
        
      </div>
     
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default Landing;
