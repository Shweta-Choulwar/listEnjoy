import React, { Component } from "react";
import { Link } from "react-router-dom";

class Body extends Component {
  render() {
    return (
      <div>
        <div className="card text-bg-dark shadow-lg p-3 mb-5 rounded">
          <div className="card-body">
            <h3 className="card-title">Listen!</h3>
            <p className="card-text">Listen to you favourite podcasts!</p>
            <Link
              to="/Listen"
              className="btn btn-danger btn-lg"
              id="browse"
            >
              Listen
            </Link>
          </div>
        </div>
        <div className="card text-bg-dark shadow-lg p-3 mb-5 rounded">
          <div className="card-body">
            <h3 className="card-title">Review!</h3>
            <p className="card-text">
              Your review matters! So help people find what's best for them!
            </p>
            <Link to="/Review" className="btn btn-danger btn-lg" id="browse">
              Review
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
