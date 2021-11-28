import React from "react";
import "./header.css";
const Header = (props) => {
  const { screens, setCurrentScreen, currentScreen } = props;
  return (
    <div className="header">
      <div className="max-width header-wrapper">
        <div className="header-logo cur-po">MS ENGAGE</div>
        <div className="navbar">
          <div
            className={`nav-item cur-po absolute-center ${
              currentScreen === screens.COMMUNITY ? "active" : ""
            }`}
            onClick={() => setCurrentScreen(screens.COMMUNITY)}
          >
            <i className="fi fi-rr-user absolute-center flaticon"></i>
            Community
          </div>

          <div
            className={`nav-item cur-po absolute-center ${
              currentScreen === screens.JOBS ? "active" : ""
            }`}
            onClick={() => setCurrentScreen(screens.JOBS)}
          >
            <i className="fi fi-rr-user absolute-center flaticon"></i>
            Jobs
          </div>

          <div
            className={`nav-item cur-po absolute-center ${
              currentScreen === screens.LIVE_SESSIONS ? "active" : ""
            }`}
            onClick={() => setCurrentScreen(screens.LIVE_SESSIONS)}
          >
            <i className="fi fi-rr-play-alt absolute-center flaticon"></i>
            Live Session
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
