import React, { useState } from "react";
import Navbar from "./Navbar";
import Main from "./Forms/Main";

const SelfAssessment = () => {
  const [display, setDisplay] = useState(true);
  const handleClick = () => {
    setDisplay(!display);
  };
  const styles = {
    borderRadius: 5,
  };
  return (
    <div>
      <Navbar />
      <div
        style={display ? { display: "block" } : { display: "none" }}
        className="container mt-3"
      >
        <h1 className="text-center">Self Assessment</h1>
        <p className="text-center">
          The purpose of the self assessment is to help you make decisions about
          seeking appropriate medical care. This system is not intended for the
          diagnosis or treatment of the coronavirus.
        </p>
        <p className="text-center">
          You are going to be asked some few questions. Your answers would be
          used to give advice on the level of medical care you should seek.
          <br />
          During the assessment, you can refresh the page if you need to start
          again.
          <br />
          If you are ready, you can click on the Begin button below.
        </p>
        <div className="flex-center">
          <button
            onClick={handleClick}
            className="btn btn-primary btn-md"
            style={styles}
          >
            Begin
          </button>
        </div>
      </div>
      <Main display={display} />
    </div>
  );
};

export default SelfAssessment;
