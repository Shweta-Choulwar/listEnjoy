import React, { Component } from "react";

class Body extends Component {
  render() {
    return (
      <div>
        <div className="main-content">Discover your Podcasts!</div>
        <div className="cards">
          <div className="polaroid">
            <p className="heading">Listen</p>
            <p>
              Listen to your fav podcasts and learn the skill you always wanted
              to!!
            </p>
            <button>Browse</button>
          </div>
          <div className="polaroid">
            <p className="heading">Enjoy</p>
            <p>Enjoy every moment of listening to your fav podcasts!!</p>
            <button>Browse</button>
          </div>
        </div>
        <div className="review">
          <p className="heading">Anndddd....REVIEW!!</p>
          <p>
            Share your reviews! Help others to find out the most suitable
            podcast for them!!
          </p>
          <button>Review</button>
        </div>
      </div>
    );
  }
}

export default Body;
