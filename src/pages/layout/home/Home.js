import React from "react";

// Sass
import "./Home.scss";

// Shared/Components
import TextInfo from "../../../shared/components/TextInfo";
import CountHooks from "../../../shared/components/CountHooks";
import ScrollHooks from "../../../shared/components/ScrollHooks";
import ClockHooks from "../../../shared/components/ClockHooks";

const Home = () => {
  const title = "Welcome, React JS";
  const description =
    "React will help us create composite interactive web applications, using small and isolated pieces of code called components; React will take care of efficiently updating and rendering the correct components when the data changes.";

  return (
    <div className="home">
      <div className="home__chidl-content-top">
        <TextInfo title={title} description={description}/>
      </div>

      <div className="home__hooks">
        <CountHooks title="Seguidores: " />
      </div>

      <div className="home__hooks">
        <ScrollHooks />
      </div>

      <div className="home__hooks">
        <ClockHooks />
      </div>
    </div>
  );
};

export default Home;
