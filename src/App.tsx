import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Landing from "./components/pages/LandingPage/Landing";
import About from "./components/pages/About/About";
import Services from "./components/pages/Services/Services";
import Dental from "./components/pages/Dental/Dental";
import Blog from "./components/pages/Blog/Blog";
import BlogSingle from "./components/pages/BlogSingle/BlogSingle";
import Appointment from "./components/pages/Appointment/Appointment";
import Page from "./components/pages/Page/Page";
import ContactUs from "./components/pages/ContactUs/ContactUs";
import MedicalExperts from "./components/pages/MedicalExperts/MedicalExperts";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
      case "/services":
        title = "";
        metaDescription = "";
        break;
      case "/dental":
        title = "";
        metaDescription = "";
        break;
      case "/blog":
        title = "";
        metaDescription = "";
        break;
      case "/blog-single":
        title = "";
        metaDescription = "";
        break;
      case "/appointment":
        title = "";
        metaDescription = "";
        break;
      case "/404-page":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/medical-experts":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/dental" element={<Dental />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog-single" element={<BlogSingle />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/404-page" element={<Page />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/medical-experts" element={<MedicalExperts />} />
    </Routes>
  );
}
export default App;
