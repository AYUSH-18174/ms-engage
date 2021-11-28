import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../store/actions";
import { getProfileImage } from "../../../utils/apis";
import "./profileLayout.css";
import SavedJobs from "./savedJobs";

const ProfileLayout = () => {
  const { username } = useSelector((state) => state.user) ?? "";

  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.setItem("username", JSON.stringify(""));
    dispatch(loginUser(""));
  };
  return (
    <div className="profile-layout">
      <div className="profile-card">
        <img
          alt="User Cover"
          src="https://s3.ap-south-1.amazonaws.com/feed-resources-dev/2bb61344-e882-4091-bb73-14948c406700/cover/image/9a60bcfa-fb9e-4e1b-b89f-d28dc263b08d.png"
          className="pl-cover"
        />
        <img
          src={getProfileImage(username)}
          className="pl-avatar"
          alt="User Profile"
        />
        <div className="pl-details">
          <div className="pl-username">{username}</div>
          <div className="pl-data-field">
            <i className="fi fi-rr-graduation-cap flaticon absolute-center pl-data-icon"></i>
            Army Insitute of Technology
          </div>
          <div className="pl-data-field">
            <i className="fi fi-rr-briefcase absolute-center flaticon pl-data-icon"></i>
            Frontend Developer
          </div>
          <div
            className="pl-logout cur-po absolute-center"
            onClick={handleLogout}
          >
            Logout
          </div>
        </div>
      </div>
      <SavedJobs />
    </div>
  );
};

export default ProfileLayout;
