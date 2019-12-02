import React from "react";

import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <div>
      
        <p class="navbar-header"> Sunglass Chic </p>

        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link" href="/#">
              {" "}
              Home{" "}
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/#">
              {" "}
              Our Shades{" "}
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/#">
              {" "}
              Meet the Squad{" "}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
