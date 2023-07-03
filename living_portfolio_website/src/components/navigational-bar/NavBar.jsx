import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          I'm from the navbar
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="*">No Page</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;