import axios from "axios";
import React, { useEffect, useState } from "react";
import JobCard from "../../components/common/cards/jobCard";
import Loader from "../../components/common/loader";
import { jobsData } from "../../data/jobs";
import { JOB_URL } from "../../utils/apis";
import "./jobs.css";

const JobsPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [cName, setCName] = useState();
  const [cLogo, setCLogo] = useState();
  const [cLocation, setCLocation] = useState();
  const [cDomain, setCDomain] = useState();
  const [cUrl, setCUrl] = useState();
  const [jobsList, setJobsList] = useState();
  const [jobPosted, setJobPosted] = useState(false);
  const [isJobLoading, setIsJobLoading] = useState(false);

  useEffect(() => {
    setIsJobLoading(true);
    axios
      .get(JOB_URL)
      .then((res) => {
        setJobsList(res.data.jobs);
        setIsJobLoading(false);
      })
      .catch((e) => console.log(e));
  }, [jobPosted]);
  const handlePostSubmit = () => {
    const data = {
      companyLogo: cLogo,
      companyName: cName,
      companyWebsite: cUrl,
      companyLocation: cLocation,
      domain: cDomain,
    };
    axios
      .post(JOB_URL, data)
      .then((response) => {
        setCDomain();
        setCLocation();
        setCName();
        setCLogo();
        setCUrl();
        setJobPosted(!jobPosted);
        setIsFormOpen(!isFormOpen);
      })
      .catch((e) => console.error(e));
  };
  return (
    <div className="max-width">
      <div className="page-title-btn">
        <div className="jobs-title absolute-center">Jobs by Community</div>
        <div
          className="add-btn absolute-center cur-po"
          onClick={() => setIsFormOpen(!isFormOpen)}
        >
          <i class="fi fi-rr-add flaticon absolute-center"></i> Add
        </div>
      </div>
      {isFormOpen && (
        <div className="form-wrapper scale-in-center">
          <div className="form-input-row">
            <input
              placeholder="Company Name"
              className="add-btn-input"
              value={cName}
              onChange={(e) => setCName(e.target.value)}
            />
            <input
              placeholder="Company Logo"
              className="add-btn-input"
              value={cLogo}
              onChange={(e) => setCLogo(e.target.value)}
            />
          </div>
          <div className="form-input-row">
            <input
              placeholder="Location"
              className="add-btn-input"
              value={cLocation}
              onChange={(e) => setCLocation(e.target.value)}
            />
            <input
              placeholder="Domain"
              className="add-btn-input"
              value={cDomain}
              onChange={(e) => setCDomain(e.target.value)}
            />
          </div>
          <div className="form-input-row">
            <input
              placeholder="Job URL"
              className="add-btn-input"
              value={cUrl}
              onChange={(e) => setCUrl(e.target.value)}
            />
            <div
              className="absolute-center cur-po form-btn"
              onClick={handlePostSubmit}
            >
              <i class="fi fi-rr-paper-plane flaticon absolute-center"></i> Post
              Job
            </div>
          </div>
        </div>
      )}
      {isJobLoading ? (
        <Loader />
      ) : (
        <div className="jobs-container">
          {jobsList &&
            jobsList.map((job) => {
              return <JobCard job={job} />;
            })}
        </div>
      )}
    </div>
  );
};

export default JobsPage;
