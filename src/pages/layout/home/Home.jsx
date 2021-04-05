import React from "react";

// Sass
import "./Home.scss";

// Shared/Components
import TextInfoComponent from "../../../shared/components/text-info/TextInfoComponent";
import CountComponent from "../../../shared/components/count/CountComponent";
import ScrollComponent from "../../../shared/components/scroll/ScrollComponent";
import ClockComponent from "../../../shared/components/clock/ClockComponent";
import AjaxApiComponent from "../../../shared/components/ajax-api/AjaxApiComponent";
import CustomComponent from "../../../shared/components/custom/CustomComponent";

const Home = () => {
  const title = "Welcome, React JS";
  const description =
    "React will help us create composite interactive web applications, using small and isolated pieces of code called components; React will take care of efficiently updating and rendering the correct components when the data changes.";

  return (
    <div className="home">
      <div className="home__chidl-content-top">
        <TextInfoComponent title={title} description={description}/>
      </div>

      <div className="home__hooks">
        <CountComponent title="Seguidores: " />
      </div>

      <div className="home__hooks">
        <ScrollComponent />
      </div>

      <div className="home__hooks">
        <ClockComponent />
      </div>

      <div className="home__hooks">
        <AjaxApiComponent />
      </div>

      <div className="home__hooks">
        <CustomComponent />
      </div>
    </div>
  );
};

export default Home;
