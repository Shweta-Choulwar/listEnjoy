import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="App-footer">
        <h2>Listenjoy</h2>
        <nav className="footer">
          <ul className="options">
            <li>Careers</li>
            <li>About</li>
            <li>Home</li>
            <li>Partnerships</li>
          </ul>
          {/* <ul>
            <li id="insta">
              <a href="https://www.instagram.com/amodn_08">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li id="linkedin">
              <a href="https://in.linkedin.com/in/amod-nagbhidkar-53381a21b">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
            <li id="mail">
              <a href="mailto:amodnagbhidkar08@gmail.com">
                <ion-icon name="mail-outline"></ion-icon>
              </a>
            </li>
          </ul> */}
        </nav>
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
      </footer>
    );
  }
}

export default Footer;
