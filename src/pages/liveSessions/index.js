import axios from "axios";
import React, { useEffect, useState } from "react";
import SessionCard from "../../components/common/cards/sessionCard";
import Loader from "../../components/common/loader";
import { sessionsData } from "../../data/sessions";
import { SESSION_URL } from "../../utils/apis";
import "./liveSessions.css";

const sessions = sessionsData;
const LIveSessionsPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [sName, setSName] = useState();
  const [sUrl, setSUrl] = useState();
  const [domain, setDomain] = useState();
  const [sessionPosted, setSessionPosted] = useState(false);
  const [sessionList, setSessionList] = useState();
  const [isSessionLoading, setIsSessionLoading] = useState(false);

  useEffect(() => {
    setIsSessionLoading(true);
    axios
      .get(SESSION_URL)
      .then((res) => {
        setSessionList(res.data.sessions);
        setIsSessionLoading(false);
      })
      .catch((e) => console.log(e));
  }, [sessionPosted]);

  const handleSessionSubmit = () => {
    const data = {
      sessionName: sName,
      sessionUrl: sUrl,
      domain,
    };

    axios
      .post(SESSION_URL, data)
      .then((res) => {
        setSName();
        setDomain();
        setSUrl();
        setSessionPosted(!sessionPosted);
        setIsFormOpen(!isFormOpen);
      })
      .catch((e) => console.error(e));
  };
  return (
    <div className="max-width">
      <div className="page-title-btn">
        <div className="ls-title absolute-center">Join Live Sessions </div>
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
              placeholder="Session Name"
              className="add-btn-input"
              value={sName}
              onChange={(e) => setSName(e.target.value)}
            />
            <input
              placeholder="Session Link"
              className="add-btn-input"
              value={sUrl}
              onChange={(e) => setSUrl(e.target.value)}
            />
          </div>
          <div className="form-input-row">
            <input
              placeholder="Domain"
              className="add-btn-input"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
            />
            <div
              className="absolute-center cur-po form-btn"
              onClick={handleSessionSubmit}
            >
              <i class="fi fi-rr-paper-plane flaticon absolute-center"></i> Post
              Job
            </div>
          </div>
        </div>
      )}

      {isSessionLoading ? (
        <Loader />
      ) : (
        <div className="ls-container">
          {sessionList &&
            sessionList.map((session) => {
              return <SessionCard session={session} />;
            })}
        </div>
      )}
    </div>
  );
};

export default LIveSessionsPage;
