import React, { useState } from "react";
import Health from "./Health";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";

const Main = ({ display }) => {
  //State using hooks
  const [step, setStep] = useState(1);
  //Next step
  const nextStep = () => {
    setStep(step + 1);
  };
  //Previous step
  const prevStep = () => {
    setStep(step - 1);
  };
  //Show Step
  const showStep = () => {
    if (step === 1) {
      return <Question1 nextStep={nextStep} />;
    }
    if (step === 2) {
      return <Question2 nextStep={nextStep} prevStep={prevStep} />;
    }
    if (step === 3) {
      return <Health nextStep={nextStep} prevStep={prevStep} />;
    }
    if (step === 4) {
      return <Question3 nextStep={nextStep} prevStep={prevStep} />;
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div
        className="card shadow-0 border"
        style={display ? { display: "none" } : { display: "block" }}
      >
        <div className="card-body">{showStep()}</div>
      </div>
    </div>
  );
};

export default Main;
