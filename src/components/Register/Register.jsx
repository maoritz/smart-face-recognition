import React from "react";

const Register = ({ onRouteChange }) => {
  return (
    <article className="br3 ba dark-gray b--black-10 mv6 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white fontSigali">
      <main className="pa4 black-80">
        <div className="measure ">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Name
              </label>
              <input
                className="pa2 input-reset ba bg-white hover-bg-white hover-black w-100"
                type="email"
                id="name"
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-white hover-bg-white hover-black w-100"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" for="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-white hover-bg-white hover-black w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div className="">
            <input
              onClick={() => onRouteChange("home")}
              className="linearGradient br-pill pa2 input-reset ba grow pointer f4 dib w-100"
              type="submit"
              value="CREATE ACCOUNT"
            />
          </div>
          <div className="lh-copy mt3">
            Already have an acount?{" "}
            <span
              href="#0"
              onClick={() => {
                onRouteChange("signin");
              }}
              className="fw9 link dim black db pointer"
              style={{ display: "inline" }}
            >
              Log in
            </span>
          </div>
        </div>
      </main>
    </article>
  );
};

export default Register;
