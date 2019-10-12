import React from "react";

const Header: React.FC = () => {
  return (
    <nav>
      <a href="/">Homepage</a> | <a href="/courses">Courses</a> |{" "}
      <a href="/about">About</a>
    </nav>
  );
};

export default Header;
