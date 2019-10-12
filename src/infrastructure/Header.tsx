import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  const activeStyle = { color: "orange" };

  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact={true}>
        Homepage
      </NavLink>{" "}
      |{" "}
      <NavLink to="/courses" activeStyle={activeStyle}>
        Courses
      </NavLink>{" "}
      |{" "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </nav>
  );
};

export default Header;
