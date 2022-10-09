import React from "react";
import { LogoIcon, NotificationIcon } from "../../assets/svg";

import "./top-nav.scss";

const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="logo-wrapper">
        <LogoIcon />
      </div>
      <div className="media-wrapper">
        <div className="audio-wrapper"></div>
        <div className="notify-profile">
          <NotificationIcon />
          <div className="profile">
            <div className="picture">
              <img src="/assets/images/profile-pics.png" alt="" />
            </div>
            <div className="text">
              <h5>Joseph</h5>
              <p>active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
