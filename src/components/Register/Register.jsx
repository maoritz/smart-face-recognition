import React from "react";
import Logo from "../Logo/Logo";

const Register = ({ onRouteChange }) => {
  return (
    <div className="centerItems formBackround">
      {/* ba dark-gray b--black-10 mv6 w-100 w-25-l mw6 */}
      <article className="br4 w-20 shadow-5 center bg-white formMinWidth">
        <main className="pa4 black-80">
          <div className="measure ">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f2 fw6 ph0 mh0">{<Logo />}</legend>
              <div className="mt3 pb3 w5">
                <input
                  className="input-reset inputForm purpleBorder"
                  type="email"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div className="mt3 pb3">
                <input
                  className="input-reset inputForm purpleBorder"
                  type="email"
                  name="email-address"
                  id="email-address"
                  placeholder="Email"
                />
              </div>
              <div className="mv3 pb3">
                <input
                  className="input-reset inputForm purpleBorder"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={() => onRouteChange("home")}
                className="br-pill pa2 input-reset ba grow pointer white dib w-100 b"
                type="submit"
                style={{ backgroundColor: "#413fa0" }}
                value="CREATE ACCOUNT"
              />
            </div>
            <div className="lh-copy mt3 rubikRegular">
              Already have an acount?{" "}
              <span
                href="#0"
                onClick={() => {
                  onRouteChange("signin");
                }}
                className="b link dim black pointer"
                style={{ display: "inline" }}
              >
                Log in
              </span>
            </div>
          </div>
        </main>
      </article>
    </div>
  );
};

export default Register;
