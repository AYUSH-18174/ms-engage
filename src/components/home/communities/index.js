import axios from "axios";
import React, { useEffect, useState } from "react";
import { sessionsData } from "../../../data/sessions";
import { SESSION_URL } from "../../../utils/apis";
import VideoSession from "../../common/cards/videoSession";
import "./communities.css";
const sessions = sessionsData.slice(0, 5);

const Communities = () => {
  const [sessionList, setSessionList] = useState();
  useEffect(() => {
    axios
      .get(SESSION_URL)
      .then((res) => setSessionList(res.data.sessions))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      <div>
        <div className="com-section-title">Current Live Sessions</div>
        <div className="com-scrollbar">
          {sessionList &&
            sessionList.map((item) => {
              return <VideoSession session={item} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Communities;
