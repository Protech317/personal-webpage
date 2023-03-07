import { useEffect } from "react";
import HeaderImage from "../../assets/header.jpg";
import data from "./data";
import CV from "../../assets/cv.pdf";
import { HiDownload } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header_pro">
          <div className="header__profile" data-aos="fade-in">
            <img src={HeaderImage} alt="Header Portait" />
          </div>
          <h3 data-aos="fade-up" style={{ textAlign: "center" }}>
            Bekzat Shamurzaev
          </h3>
        </div>
        <div className="header_info">
          <h3
            data-aos="fade-up"
            className="header_info_span"
            style={{ marginBottom: "20px" }}
          >
            Welcome to my personal webpage!
          </h3>
          <p data-aos="fade-up">
            <span className="header_span">
              As you explore my website, you will find that I am a curious
              individual who loves to learn about new things. I am always eager
              to try new experiences and to push myself out of my comfort zone.
              I believe that life is a never-ending journey of growth, and I
              hope to inspire others to embrace this mindset as well.
            </span>
            <span className="header_info_span">
              Thank you for taking the time to visit my personal webpage. If you
              have any questions or feedback, please do not hesitate to reach
              out. I would love to hear from you!
            </span>
          </p>
          <div className="header__cta" data-aos="fade-up">
            <a href="#contact" className="btn primary">
              Let's Talk
            </a>
            <a href="#portfolio" className="btn light">
              My Work
            </a>
            <a href={CV} download className="btn primary">
              Download CV <HiDownload />
            </a>
          </div>
        </div>
        {/* <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div> */}
      </div>
    </header>
  );
};

export default Header;
