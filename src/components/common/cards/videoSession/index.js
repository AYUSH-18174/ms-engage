import moment from "moment";
import React from "react";
import { getDomainIcon } from "../../../../utils/apis";
import "./videoSesison.css";
const VideoSession = ({ session }) => {
  return (
    <a href={session.sessionUrl} target="_blank" rel="noopener noreferrer">
      <div className="vs-card cur-po">
        <div className="vs-card-icon">{getDomainIcon(session.domain[0])}</div>
        <div className="vs-card-info">
          <div className="vs-card-title">{session.sessionName}</div>
          <div className="vs-card-count absolute-center">
            <i className="fi fi-rr-clock flaticon absolute-center"></i>

            {moment(session.createdAt).fromNow()}
          </div>
        </div>
      </div>
    </a>
  );
};

export default VideoSession;
