import React, { useState } from "react";

const Health = () => {
  const [response, setResponse] = useState(null);
  const [display, setDisplay] = useState(true);
  const handleYes = () => {
    setResponse(true);
    setDisplay(false);
  };
  const handleNo = () => {
    setResponse(false);
    setDisplay(false);
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
        <h3 className="text-center">
          {response
            ? "You are at risk of contacting the Covid-19 virus"
            : "You are not at risk of contacting the Covid-19 virus"}
        </h3>
        <p className="text-center">
          You are advised to take these necessary Covid-19 precautions
        </p>
        {response ? (
          <ul className="list-group">
            <li>Visit a nearby testing centre to be tested</li>
          </ul>
        ) : (
          <ul className="list-group">
            <li>Always wear your face mask when outside</li>
            <li>Avoid crowded places</li>
            <li>Wash your hands and use hand sanitizers</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Health;
