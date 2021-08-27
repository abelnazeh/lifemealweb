import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Button from "./generic/Button";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import { MenuOutlined } from "@ant-design/icons";
import { LeftArrow } from "./generic/imagesSVG";
import { Link } from "react-router-dom";

class HeaderComponent extends React.Component {
  state = {
    current: "home",
  };
  //    location = useLocation();
  handleClick = (e) => {
    this.setState({ current: e.key });
  };


  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="md">
          <Navbar.Brand className="brand">
            <Nav.Link as={Link} to="/">
              <img
                src={process.env.PUBLIC_URL + "/assets/logo.svg"}
                alt="lifemeal logo"
              />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <MenuOutlined />
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              {window.location.pathname === "/" ? (
                <Nav.Link as={Link} to="">
                  <ScrollLink
                    activeClass="active"
                    to="whylifemeal"
                    spy={true}
                    smooth={true}
                    offset={100}
                    duration={500}
                  >
                    Why Lifemeal?
                  </ScrollLink>
                </Nav.Link>
              ) : (
                <Nav.Link
                  as={Link}
                  exact="true"
                  to="/"
                  activeclassname="active"
                >
                  Why Lifemeal?
                </Nav.Link>
              )}
              <Nav.Link as={Link}>
                <ScrollLink
                  activeClass="active"
                  to="howitworks"
                  spy={true}
                  smooth={true}
                  offset={150}
                  duration={500}
                >
                  How it Works
                </ScrollLink>
              </Nav.Link>
              <Nav.Link as={Link} to="/about" activeclassname="active">
                About Us
              </Nav.Link>
              {/* <Nav.Link as={Link} to="/faq" activeclassname="active">
                FAQ
              </Nav.Link> */}
              <Nav.Link as={Link} to="/contact" activeclassname="active">
                Contact Us
              </Nav.Link>
              <Nav.Link as={Link} to="/login" activeclassname="active">
                Partner Cook?
                <LeftArrow />{" "}
                <div className="navbar-button">
                  <Button></Button>
                  <Button primary>Login</Button>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default HeaderComponent;
