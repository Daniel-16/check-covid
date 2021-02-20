import React, { useState } from "react";
import logo from "../../image/warning-17.svg";
import results from "../../image/results.png";
import { Link } from "react-router-dom";

const Health = () => {
  const [response, setResponse] = useState(null);
  const [display, setDisplay] = useState(true);
  const handleYes = () => {
    setResponse(true);
    setDisplay(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleNo = () => {
    setResponse(false);
    setDisplay(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="container">
      <div style={display ? { display: "block" } : { display: "none" }}>
        <h2 className="text-center mb-3 h2-responsive">
          Do you have any of these life threatening symptoms?
        </h2>
        <ul className="list-group mt-2 ml-3">
          <li>Bluish lips or face</li>
          <li>Severe and constant pains or pressure in the chest</li>
          <li>
            Extreme difficulty breathing (such as gasping for air, being unable
            to talk without catching your breathe, severe weezing, nostrils
            flaring)
          </li>
          <li>New disorientation (acting confused)</li>
          <li>Unconscious or very difficult to wake up</li>
          <li>Slurred speach or difficulty speaking(new or worsening)</li>
          <li>New or worsening seizure</li>
          <li>
            Signs of low blood pressure (too weak to stand, dizziness,
            lightheaded, feeling cold, pale clammy skin)
          </li>
          <li>
            Dehyrdation (dry lips and mouth, not urinating much, sunken eyes)
          </li>
        </ul>
        <button
          style={{ borderRadius: 5 }}
          className="btn btn-primary btn-md"
          onClick={handleYes}
        >
          Yes
        </button>
        <button
          className="btn btn-primary btn-md float-right"
          style={{ borderRadius: 5 }}
          onClick={handleNo}
        >
          No
        </button>
      </div>
      <div style={display ? { display: "none" } : { display: "block" }}>
        {response ? (
          <div>
            <div className="flex-center">
              <img
                src={logo}
                className="img-fluid"
                alt="warning"
                style={{ width: 30, height: 30 }}
              />
            </div>
            <h1 className="text-center h1-responsive">
              Urgent Medical Attention may be needed. Please you are advised to
              go to a an Emergency Department
            </h1>
            <p className="text-center">
              Based on your (their) symptoms, you may need urgent medical care.
              Please call any of the emergency helplines around your location
              that you can find.
              <br />
              Tell the emergency staff if you have had contact with someone with
              COVID-19.
            </p>
            <h5 className="text-center">Emergency Contacts</h5>
            <hr />
            <h5>WHO</h5>
            <p>
              WHO headquarters in Geneva
              <br />
              Telephone: <a href="tel:+4122791211">+41-22-791211</a>
              <br />
              <a href="https://www.who.int" target="_blank" rel="noreferrer">
                Visit the WHO website
              </a>
            </p>
            <h5>CDC</h5>
            <p>
              CDC, 1600 Clifton Road, Atlanta, GA 30329 USA 800-CDC-INFO |
              (800-232-4636)
              <br />
              <a href="https://www.cdc.gov" target="_blank" rel="noreferrer">
                Visit the CDC website
              </a>
            </p>
            <h5>NCDC</h5>
            <p>
              NCDC Plot 801, Ebitu Ukiwe Street, Jabi, Abuja, Nigeria
              <br />
              0800 970000 10 (Toll-Free Call Center)
              <br />
              <a
                href="https://www.ncdc.gov.ng"
                target="_blank"
                rel="noreferrer"
              >
                Visit the NCDC website
              </a>
            </p>
            <h5>Africa CDC</h5>
            <p>
              Africa CDC, African Union Commission, Roosevelt Street (Old
              Airport Area), Addis Ababa. Telephone:{" "}
              <a href="tel:+251115517700">+251 11 551 7700</a>
              <br />
              <a
                href="https://www.africacdc.org"
                target="_blank"
                rel="noreferrer"
              >
                Visit the Africa CDC website
              </a>
            </p>
            <Link
              to="/"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <i className="fa fa-arrow-left mr-2"></i>Back to Home
            </Link>
            <br />
            <small className="text-center text-muted mt-4">
              For informational purposes only. Consult your local medical
              authority for advice
            </small>
          </div>
        ) : (
          <div>
            <div className="flex-center">
              <img
                src={results}
                className="img-fluid"
                alt="Tests"
                style={{ width: "20rem", height: "20rem" }}
              />
            </div>
            <ul className="list-group">
              <li className="mb-3">
                <b>Sounds like you (they) are feeling ok.</b>
                <br />
                Learn more about the COVID-19 and what you (they) can do to stay
                safe.
              </li>
              <li className="mb-3">
                <b>Monitor for symptoms.</b>
                <br />
                Watch for the COVID-19 symptoms. If you (they) develop symptoms,
                call your (their) medical provider, clinician advice line, or
                telemedicine provider.
              </li>
              <li className="mb-3">
                <b>No COVID-19 testing needed at this time.</b>
                <br />
                Based on the answer given, you (they) do not need to get tested
                unless recommended or required by your (their) healthcare
                provider, employer, or public health official.
              </li>
            </ul>

            <Link
              to="/"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <i className="fa fa-arrow-left mr-2"></i>Back to Home
            </Link>
            <br />
            <small className="text-center text-muted mt-4">
              For informational purposes only. Consult your local medical
              authority for advice
            </small>
          </div>
        )}
      </div>
    </div>
  );
};

export default Health;
