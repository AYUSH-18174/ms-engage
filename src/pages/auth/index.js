import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, signUpUser } from "../../store/actions";
import { LOGIN_URL, SIGNUP_URL } from "../../utils/apis";
import "./auth.css";

const MODE = {
  LOGIN: "LOGIN",
  SIGNUP: "SIGNUP",
};
const AuthPage = () => {
  const [mode, setMode] = useState(MODE.LOGIN);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [username, setUsername] = useState("");
  const [domain, setDomain] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    axios
      .post(LOGIN_URL, {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem(
          "username",
          JSON.stringify(response.data.user.username)
        );
        dispatch(loginUser(response.data.user.username));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleSignUp = () => {
    const data = {
      email,
      password,
      username,
      college,
      domain,
      name,
    };

    axios
      .post(SIGNUP_URL, {
        email,
        password,
        username,
        college,
        domain,
        name,
      })
      .then((response) => {
        localStorage.setItem("username", JSON.stringify(username));
        dispatch(signUpUser(data.username));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getLoginUI = () => {
    return (
      <div className="auth-wrapper-modal">
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="auth-inputBox"
        />
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="auth-inputBox"
          type="password"
        />
        <div className="absolute-center">
          <div className="auth-btns">
            <div
              className="auth-btn cur-po absolute-center"
              onClick={handleLogin}
            >
              LOGIN
            </div>
            <div
              className="auth-btn cur-po absolute-center"
              onClick={() => setMode(MODE.SIGNUP)}
            >
              SIGNUP
            </div>
          </div>
        </div>
      </div>
    );
  };

  const getSignUpUI = () => {
    return (
      <div className="auth-wrapper-modal">
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="auth-inputBox"
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="auth-inputBox"
        />
        <input
          placeholder="College"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          className="auth-inputBox"
        />
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="auth-inputBox"
        />
        <input
          placeholder="Domain"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          className="auth-inputBox"
        />
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="auth-inputBox"
          type="password"
        />
        <div className="auth-btns">
          <div
            className="auth-btn cur-po absolute-center"
            onClick={handleSignUp}
          >
            SIGNUP
          </div>
          <div
            className="auth-btn cur-po absolute-center"
            onClick={() => setMode(MODE.LOGIN)}
          >
            LOGIN
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="auth-wrapper max-width absolute-center">
      <div className="auth-logo">MS Engage Community</div>
      {mode === MODE.LOGIN ? getLoginUI() : getSignUpUI()}
    </div>
  );
};

export default AuthPage;
