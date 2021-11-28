import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "./components/common/header";
import AuthPage from "./pages/auth";
import HomePage from "./pages/home";
import JobsPage from "./pages/jobs";
import LIveSessionsPage from "./pages/liveSessions";

const SCREENS = {
  COMMUNITY: "COMMUNITY",
  JOBS: "JOBS",
  LIVE_SESSIONS: "LIVE_SESSIONS",
};

const App = () => {
  const [currentScreen, setCurrentScreen] = useState(SCREENS.COMMUNITY);

  const { username } = useSelector((state) => state.user);

  const getCurrentScreen = () => {
    switch (currentScreen) {
      case SCREENS.COMMUNITY:
        return <HomePage />;
      case SCREENS.JOBS:
        return <JobsPage />;
      default:
        return <LIveSessionsPage />;
    }
  };

  return username ? (
    <>
      <Header
        screens={SCREENS}
        setCurrentScreen={setCurrentScreen}
        currentScreen={currentScreen}
      />
      {getCurrentScreen()}
    </>
  ) : (
    <AuthPage />
  );
};

export default App;
