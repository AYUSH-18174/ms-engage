import React from "react";
import { jobsData } from "../../../../data/jobs";
import SavedCard from "../../../common/cards/saved-card";
import "./savedJobs.css";

const SavedJobs = () => {
  const jobs = jobsData.slice(0, 5);
  return (
    <div>
      <div className="sj-title">Saved Jobs</div>
      <div className="saved-jobs-wrapper">
        {jobs.map((job) => (
          <SavedCard company={job} />
        ))}
      </div>
    </div>
  );
};

export default SavedJobs;
