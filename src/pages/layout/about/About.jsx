import React from "react";

// Sass
import "./About.scss";

// Shared/Components
import TextInfoComponent from "../../../shared/components/TextInfoComponent";

const About = () => {
  const title = "About";
  const description =
    "'Who we are', 'About us', 'Our company', 'About us' ... On the websites of all companies there is a space dedicated to allowing visitors (whether they are customers or suppliers) to learn a little more about them .";

  return (
    <div className="about">
      <div className="about__chidl-content-top">
        <TextInfoComponent title={title} description={description} />
      </div>
    </div>
  );
};

export default About;
