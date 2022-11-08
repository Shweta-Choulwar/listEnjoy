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
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg p-3 mb-5 rounded">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Listenjoy
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Active
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Link
                </a>
              </li>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-danger" type="submit">
                  Search
                </button>
              </form>
              <li class="nav-item">
                {/* Button trigger modal  */}
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#signIn"
                >
                  Sign-in
                </button>

                {/* <!-- Modal --> */}
                <div
                  class="modal fade"
                  id="signIn"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="SignIn">
                          Sign-in
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <div class="mb-3">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            id="email"
                            placeholder="name@example.com"
                          />
                          <div class="mb-3">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              class="form-control"
                              id="password"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                {/* Button trigger modal  */}
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#signIn"
                >
                  Sign-in
                </button>

                {/* <!-- Modal --> */}
                <div
                  class="modal fade"
                  id="signIn"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="SignIn">
                          Sign-in
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <div class="mb-3">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            id="email"
                            placeholder="name@example.com"
                          />
                          <div class="mb-3">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              class="form-control"
                              id="password"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
