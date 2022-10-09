import React from "react";

import "./podcast.scss";

const Podcast = ({ img, title, subtitle }) => {
  return (
    <div className="podcast-item">
      <div className="image-wrapper">
        <img src={img || ""} alt="" />
      </div>
      <div className="content">
        <h5>{title}</h5>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Podcast;
