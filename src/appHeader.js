import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import classnames from "classnames";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {
    return (
      <div
        className={classnames("navbar", {
          "navbar--hidden": !this.state.visible
        })}
      >
        {/* <div id="navbar--hidden">    */}
        <a
          href="/"
          style={{
            float: "left",
            fontFamily: "cursive",
            fontSize: "24px",
            width: "15ch",
            textShadow: "3px 5px 10px #000"
          }}
        >
          Film <span>Thickness</span>
          <span> Calculation</span>
        </a>
        {/* <nav>    

      <NavLink activeClassName="active" to="/about">        
      About
      </NavLink> */}
        {/* </nav> */}
        {/* // </div> */}
      </div>
    );
  }
}
export default Header;
