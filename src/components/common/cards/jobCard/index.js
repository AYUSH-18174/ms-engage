import React from "react";
import "./jobCard.css";
const JobCard = ({ job }) => {
  return (
    <div className="job-card-wrapper">
      <div className="absolute-center">
        <img src={job.companyLogo} className="jc-logo" alt={job.name} />
      </div>
      <div className="">
        <div className="jc-title absolute-center">{job.companyName}</div>
        <div className="jc-location absolute-center">
          <i className="fi fi-rr-marker absolute-center flaticon"></i>
          {job.companyLocation}
        </div>
        <div className=" absolute-center">
          <div className="jc-domain">{job.domain[0]}</div>
        </div>
      </div>
      <div className="jc-buttons">
        <div className="jc-btn jc-width40 absolute-center">
          <i class="fi fi-rr-bookmark absolute-center flaticon"></i>
          Save
        </div>
        <div className="jc-width40">
          <a
            href={job.companyWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute-center width100"
          >
            <div className="jc-btn  absolute-center width100">
              <i class="fi fi-rr-globe absolute-center flaticon"></i> Visit
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
