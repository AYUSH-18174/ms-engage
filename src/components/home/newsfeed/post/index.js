import moment from "moment";
import React, { useState } from "react";
import { getProfileImage } from "../../../../utils/apis";
import "./post.css";

const Post = ({ post }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isVote, setIsVote] = useState(false);
  return (
    <div className="post-card">
      <div className="post-info">
        <img
          src={getProfileImage(post.username)}
          alt="Post Username"
          className="post-avatar"
        />
        <div>
          <div className="post-username">{post.username}</div>
          <div className="post-time">{moment(post.createdAt).fromNow()}</div>
        </div>
      </div>
      <div className="post-text">{post.content}</div>
      {post.media !== "" && (
        <div className="absolute-center">
          <img src={post.media} className="post-media" alt="post-media" />
        </div>
      )}
      <div className="post-actions width100">
        {isVote ? (
          <div
            className="post-action-button cur-po scale-in-center"
            onClick={() => setIsVote(!isVote)}
            key="upvoted"
          >
            <i className="fi fi-sr-thumbs-up flaticon absolute-center "></i>
            Upvoted
          </div>
        ) : (
          <div
            className="post-action-button cur-po  scale-in-center"
            onClick={() => setIsVote(!isVote)}
            key="upvote"
          >
            <i className="fi fi-rr-thumbs-up flaticon absolute-center"></i>
            Upvote
          </div>
        )}

        {isSaved ? (
          <div
            className="post-action-button cur-po scale-in-center"
            onClick={() => setIsSaved(!isSaved)}
            key="saved"
          >
            <i className="fi fi-sr-bookmark flaticon absolute-center "></i>
            Unsave
          </div>
        ) : (
          <div
            className="post-action-button cur-po  scale-in-center"
            onClick={() => setIsSaved(!isSaved)}
            key="save"
          >
            <i className="fi fi-rr-bookmark flaticon absolute-center"></i>
            Save
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
