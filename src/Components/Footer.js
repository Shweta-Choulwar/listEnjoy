import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="App-footer">
        <nav className="navbar bg-dark">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Only for project purposes.
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    );
  }
}

export default Footer;
