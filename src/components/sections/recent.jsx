import React from "react";
import Title from "../typography/Title";

import "./recent.scss";

const Recent = () => {
  return (
    <div className="recent">
      <div className="top">
        <Title>Continue listening</Title>
        <p className="see-more-link">See more</p>
      </div>
    </div>
  );
};

export default Recent;
