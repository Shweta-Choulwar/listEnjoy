import React, { Component } from "react";

class Body extends Component {
  render() {
    return (
      <div>
        <div class="card text-bg-dark shadow-lg p-3 mb-5 rounded">
          <div class="card-body">
            <h3 class="card-title">Listen!</h3>
            <p class="card-text">
              Listen to you favourite podcasts!
            </p>
            <a href="/" class="btn btn-danger btn-lg" id="browse">
              Browse
            </a>
          </div>
        </div>
        <div class="card text-bg-dark shadow-lg p-3 mb-5 rounded">
          <div class="card-body">
            <h3 class="card-title">Review!</h3>
            <p class="card-text">
              Your review matters! So help people find what's best for them!
            </p>
            <a href="/" class="btn btn-danger btn-lg" id="browse">
              Review
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
