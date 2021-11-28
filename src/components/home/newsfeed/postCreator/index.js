import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ADD_POST_URL, getProfileImage } from "../../../../utils/apis";
import "./postCreator.css";
const PostCreator = () => {
  const [mediaUrl, setMediaUrl] = useState("");
  const [addMedia, setAddMedia] = useState(false);
  const [postText, setPostText] = useState("");

  const { username } = useSelector((state) => state.user) ?? "";
  const handleAddImage = () => {
    const currentState = addMedia;
    setAddMedia(!currentState);
  };

  const handleEdit = (e) => {
    setPostText(e.target.value);
    if (e.target.value === "") {
      setAddMedia(false);
    }
  };

  const handlePostSubmit = () => {
    const data = {
      username,
      media: mediaUrl,
      content: postText,
      domain: "frontend",
    };
    axios
      .post(ADD_POST_URL, data)
      .then((response) => window?.location?.reload())
      .catch(() => console.log("Not ok"));
  };
  return (
    <div className="post-creator-wrapper">
      <div className="post-creator">
        <img
          src={getProfileImage(username)}
          className="post-avatar"
          alt="User Profile"
        />

        <div className="width100">
          <input
            placeholder="Share your thoughts and questions with the community"
            className="post-input absolute-center"
            value={postText}
            onChange={(e) => handleEdit(e)}
          />
        </div>
      </div>
      {addMedia && postText && (
        <div className="width100 scale-in-center">
          <input
            value={mediaUrl}
            placeholder="Media URL"
            className="post-input absolute-center"
            onChange={(e) => setMediaUrl(e.target.value)}
          />
        </div>
      )}
      {postText && (
        <div className="pc-buttons scale-in-center">
          <div
            onClick={handleAddImage}
            className="pc-button absolute-center pc-add-btn"
          >
            <i className="fi fi-rr-picture absolute-center flaticon"></i> Add
            Image
          </div>
          <div
            className="pc-button absolute-center pc-post-btn"
            onClick={handlePostSubmit}
          >
            <i className="fi fi-rr-paper-plane flaticon absolute-center"></i>{" "}
            Post
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCreator;
