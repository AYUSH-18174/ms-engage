import React from "react";

import styles from "./saved-card.css";

function SavedCard({ company, addToSave, saved, deleteFromSave }) {
  // const isSaved = saved.includes(company);

  // const handleBookmark = () => {
  //   isSaved ? deleteFromSave(company) : addToSave(company);
  // };
  return (
    <div className="card">
      <div>
        <img src={company.logo} className="card_logo" alt="company logo" />
      </div>
      <div className="info">
        <label className="name">{company.name}</label>
        <div className="location">
          <i className="fi-rr-marker"></i>
          <label>{company.location}</label>
        </div>
      </div>
      <div className="cardRight">
        <div className="options">
          <div className="bookmarkIcon">
            <i className="fi-rr-bookmark"></i>
          </div>
          <a href={company.website} target="_blank" rel="noopener noreferrer">
            <div className="visit">
              <i className="fi-rr-globe"></i>Visit
            </div>
          </a>
        </div>
        <div className="domain">{company.domain}</div>
      </div>
    </div>
  );
}

export default SavedCard;
