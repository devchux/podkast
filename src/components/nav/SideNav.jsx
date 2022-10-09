import React from "react";
import { NAV_CONSTANTS } from "../../constants";

import "./side-nav.scss";

const SideNav = () => {
  return (
    <div className="side-nav">
      {NAV_CONSTANTS.map((item, i) => (
        <div className="nav-section" key={i}>
          <h5>{item.title}</h5>
          <div className="links">
            {item.children.map(({ icon: Icon, title }, key) => (
              <div
                className={`link${title === 'Home' ? " active" : ""}`}
                key={key}
              >
                <Icon />
                <p>{title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideNav;
