import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

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

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <Container>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">React</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {router.map((element, index) => {
                return (
                  <NavItem key={index}>
                    <Link to={element.url} className="nav-link">
                      {element.name}
                    </Link>
                  </NavItem>
                );
              })}
            </Nav>
          </Collapse>
        </Navbar>

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
      </Container>
    </Router>
  );
}

export default App;
