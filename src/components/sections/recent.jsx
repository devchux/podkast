import React from "react";
import Podcast from "../podcast";
import Title from "../typography/Title";

import "./recent.scss";

const Recent = () => {
  const data = [
    {
      title: "Podcast show",
      subtitle: "Susie Rolland",
      img: "/assets/images/podcast-one.png",
    },
    {
      title: "We are Podcast",
      subtitle: "Susie Rolland",
      img: "/assets/images/podcast-two.png",
    },
    {
      title: "RBL Talk",
      subtitle: "Justin Croser",
      img: "/assets/images/podcast-three.png",
    },
    {
      title: "The Green Renaissance",
      subtitle: "Joseph Kooper",
      img: "/assets/images/podcast-four.png",
    },
    {
      title: "Howl Open Mic",
      subtitle: "Wade Warren",
      img: "/assets/images/podcast-five.png",
    },
  ];
  return (
    <div className="recent">
      <div className="top">
        <Title>Continue listening</Title>
        <p className="see-more-link">See more</p>
      </div>
      <div className="podcast-overall">
        <div className="podcast-list">
          {data.map((item, i) => (
            <Podcast key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recent;
