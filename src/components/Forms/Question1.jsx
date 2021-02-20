import React, { useState } from "react";

const Question1 = ({ nextStep }) => {
  //State
  const [value, setValue] = useState("");
  const [toggle, setToggle] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(`The button clicked was ${value}`);
    nextStep();
  };

  //Handle Change
  const handleChange = (e) => {
    setToggle(false);
    setValue(e.target.value);
    console.log(e.target.value);
  };
  const styles = {
    borderRadius: 5,
  };
  return (
    <div className="">
      <h2 className="text-center h2-responsive">
        Are you answering for yourself or someone else?
      </h2>
      <div className="flex-center">
        <label htmlFor="radio" className="w-100 mb-3">
          <div className="card shadow-0 border">
            <div className="card-body">
              <input
                type="radio"
                className=""
                id="radio"
                name="personal"
                value="myself"
                onChange={handleChange}
              />
              <span className="ml-4">Myself</span>
            </div>
          </div>
        </label>
      </div>
      <div className="flex-center">
        <label htmlFor="radio2" className="w-100">
          <div className="card shadow-0 border">
            <div className="card-body">
              <input
                type="radio"
                className=""
                id="radio2"
                name="personal"
                value="someone else"
                onChange={handleChange}
              />
              <span className="ml-4">Someone else</span>
            </div>
          </div>
        </label>
      </div>
      <div className="flex-center">
        <button
          onClick={handleClick}
          type="button"
          className="btn btn-primary btn-md"
          disabled={toggle}
          style={styles}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Question1;
