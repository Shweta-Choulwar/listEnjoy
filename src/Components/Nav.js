import React, { Component } from "react";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.search = this.search.bind(this);
  }

  login() {
    console.log("Hello there!");
  }

  search() {
    console.log("Search it!");
  }

  render() {
    return (
      <header className="App-header">
        <h2>Listenjoy</h2>
        <nav className="nav">
          <ul>
            <li>Home</li>
            <li>My Podcasts</li>
            <li>Browse</li>
            <li>Community</li>
            <input type="text" className="search" placeholder="Search here"></input>
            <button className="srch-btn" onClick={this.search.bind(this)}>
              Search
            </button>
            <button className="logIn" onClick={this.login}>
              Login/Sign-up
            </button>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Nav;
