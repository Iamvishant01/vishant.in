import React from "react";

export default function Home({ scrollToBlogs }) {
  return (
    <div className="main">
      <div className="header">
        <h2 id="lifeisunfair">
          “Just live—because life is unfair, but that’s what makes it worth living.”
        </h2>
        <button type="button" className="btn btn-light" onClick={scrollToBlogs}>
          Dive In
        </button>
      </div>
    </div>
  );
}