import React from "react";
import "./Signin.css";

const Signin = ({ onRouteChange }) => {
  return (
    <article className="br3 ba dark-gray b--black-10 mv6 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white fontSigali">
      <main className="pa4 black-80">
        <div className="measure ">
          <fieldset id="sign_up" className="ba b--transparent ph3 mh0">
            <legend className="f2 fw6 ph0 mh0">Welcome</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-white hover-black w-100"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="pa2 input-reset ba bg-white hover-black w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div className="f8">
            <input
              onClick={() => onRouteChange("home")}
              className="linearGradient br-pill pa2 input-reset ba grow pointer f4 dib w-90"
              type="submit"
              value="SIGN IN"
            />
          </div>
          <div className="lh-copy mt3">
            <div>
              Don't have an acount?{" "}
              <span
                href="#0"
                onClick={() => {
                  onRouteChange("register");
                }}
                className="fw9 link dim black db pointer"
                style={{ display: "inline" }}
              >
                Register now
              </span>
            </div>
          </div>
        </div>
      </main>
    </article>
  );
};

export default Signin;
