import AboutImage from "../../assets/about.jpg";
import CV from "../../assets/cv.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <h2 className="about_header">About Me</h2>
      <div className="about__container">
        <div className="about__cards">
          {data.map((item) => (
            <Card key={item.id} className="about__card">
              <span className="about__card-icon">{item.icon}</span>
              <a href={item.link}>
                <h5>{item.title}</h5>
              </a>
              <small>{item.desc}</small>
            </Card>
          ))}
        </div>
        <div className="about_footer">
          <p>
            Hi, my name is Bekzat Shamurzaev and i am experienced Front-End
            Developer with 2+ years of expertise in HTML, CSS, JavaScript, React
            and Redux. Passionate about staying up to date with web development
            trends and collaborating with designers to deliver high-quality,
            user-friendly sites and apps.
          </p>
          <p>
            I received my MBA from Lincoln University, and have since worked for
            Cargo Fleet as Front End Developer. In my free time, I enjoy
            building webpages for small businesses and communities, which allow
            me to stay up to date. If you're interested in working together or
            just want to say hello, feel free to reach out to me at{" "}
            <a href="#contact">Get In Touch</a>. Thanks for visiting my site,
            and I look forward to connecting with you!
          </p>
          <a href={CV} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
