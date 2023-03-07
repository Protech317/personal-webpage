import Card from "../../components/Card";
import data from "./data";
import "./services.css";

const Skills = () => {
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <p>
        Welcome to my Skills page! Here, you can learn more about the different
        skills and abilities I've developed throughout my career.
      </p>
      <div className="container services__container" data-aos="fade-up">
        {data.map((item) => (
          <Card key={item.id} className="service light">
            <div className="service__icon">{item.icon}</div>
            <div className="service__details">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
