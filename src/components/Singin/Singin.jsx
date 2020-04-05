import React from "react";
import Logo from "../Logo/Logo";

const Signin = ({ onRouteChange }) => {
  return (
    <div className="centerItems">
      <article className="br4 w-20 shadow-5 center bg-white formMinWidth">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph3 mh0">
              <legend className="f2 fw6 ph0 mh0">{<Logo />}</legend>
              <div className="mt3 pb3 w5">
                <input
                  className="input100 input-reset purpleBorder"
                  type="email"
                  name="email-address"
                  id="email-address"
                  placeholder="Email"
                />
              </div>
              <div className="mv3 pb2">
                <input
                  className="input100 purpleBorder"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
            </fieldset>
            <div className="f8">
              <input
                onClick={() => onRouteChange("home")}
                className=" br-pill pa2 input-reset ba grow pointer white f4 dib w5 b"
                style={{ backgroundColor: "#413fa0" }}
                type="submit"
                value="SIGN IN"
              />
            </div>
            <div className="lh-copy mt3">
              <div className="">
                Don't have an acount?{" "}
                <span
                  href="#0"
                  onClick={() => {
                    onRouteChange("register");
                  }}
                  className="b link dim black pointer"
                  style={{ display: "inline" }}
                >
                  Register now
                </span>
              </div>
            </div>
          </div>
        </main>
      </article>
    </div>
  );
};

export default Signin;
