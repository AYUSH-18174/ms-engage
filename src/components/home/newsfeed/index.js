import axios from "axios";
import React, { useEffect, useState } from "react";
import { GET_POST_URL } from "../../../utils/apis";
import Loader from "../../common/loader";
import "./newsfeed.css";
import Post from "./post";
import PostCreator from "./postCreator";
const Newsfeed = () => {
  const [postList, setPostList] = useState();
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  const getPostList = () => {
    setIsPostsLoading(true);
    axios
      .get(GET_POST_URL)
      .then((response) => {
        setPostList(response.data.posts);
        setIsPostsLoading(false);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getPostList();
  }, []);
  return (
    <div className="newsfeed-wrapper">
      <PostCreator />
      {isPostsLoading ? (
        <Loader />
      ) : (
        <div className="newsfeed-posts">
          {postList?.map((post) => {
            return <Post post={post} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Newsfeed;
