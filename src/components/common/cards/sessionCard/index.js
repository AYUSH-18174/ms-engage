import moment from "moment";
import React from "react";
import { getDomainIcon } from "../../../../utils/apis";
import "./sessionCard.css";

const SessionCard = ({ session }) => {
  return (
    <div className="session-card-wrapper">
      <div className="absolute-center">
        <div className=" sc-logo">{getDomainIcon(session.domain[0])}</div>
      </div>
      <div className="">
        <div className="sc-title absolute-center">{session.sessionName}</div>
        <div className="sc-location absolute-center">
          <i className="fi fi-rr-clock flaticon absolute-center"></i>
          {moment(session.createdAt).fromNow()}
        </div>
        <div className=" absolute-center">
          <div className="sc-domain">{session.domain[0]}</div>
        </div>
      </div>
      <div className="sc-buttons absolute-center">
        <a
          href={session.sessionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="width100 absolute-center"
        >
          <div className="sc-btn absolute-center">
            <i class="fi fi-rr-play-alt absolute-center flaticon"></i>
            JOIN
          </div>
        </a>
      </div>
    </div>
  );
};

export default SessionCard;
