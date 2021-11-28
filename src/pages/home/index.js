import React from "react";
import Communities from "../../components/home/communities";
import Newsfeed from "../../components/home/newsfeed";
import ProfileLayout from "../../components/home/profileLayout";
import "./home.css";

const HomePage = () => {
  return (
    <div className="max-width home-wrapper">
      <Communities />

      <div className="home-newsfeed-wrapper">
        <Newsfeed />
      </div>
      <ProfileLayout />
    </div>
  );
};

export default HomePage;
