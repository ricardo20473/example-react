import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Page
import Home from "./pages/layout/home/Home";
import About from "./pages/layout/about/About";
import Contact from "./pages/layout/contact/Contact";

function App() {
  const router = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            React
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              {router.map((element, index) => {
                return (
                  <li className="nav-item active" key={index}>
                    <Link to={element.url} className="nav-link">
                      {element.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
