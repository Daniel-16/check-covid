import React, { useState } from "react";

const Question2 = ({ nextStep, prevStep }) => {
  //State
  const [value, setValue] = useState("");
  const [toggle, setToggle] = useState(true);
  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
    console.log(`The button clicked was ${value}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handlePrev = (e) => {
    e.preventDefault();
    prevStep();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  //Handle Change
  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
    setToggle(false);
  };
  const styles = {
    borderRadius: 5,
  };
  return (
    <div className="container">
      <h2 className="text-center h2-responsive">What is your age?</h2>
      <div className="flex-center">
        <label htmlFor="18to29" className="w-100 mb-3">
          <div className="card shadow-0 border">
            <div className="card-body">
              <input
                type="radio"
                className=""
                id="18to29"
                name="age"
                value="18to29"
                onChange={handleChange}
              />
              <span className="ml-4">18-29</span>
            </div>
          </div>
        </label>
      </div>
      <div className="flex-center">
        <label htmlFor="30-39" className="w-100 mb-3">
          <div className="card shadow-0 border">
            <div className="card-body">
              <input
                type="radio"
                className=""
                id="30-39"
                name="age"
                value="30-39"
                onChange={handleChange}
              />
              <span className="ml-4">30-39</span>
            </div>
          </div>
        </label>
      </div>
      <div className="flex-center">
        <label htmlFor="40-49" className="w-100 mb-3">
          <div className="card shadow-0 border">
            <div className="card-body">
              <input
                type="radio"
                className=""
                id="40-49"
                name="age"
                value="40-49"
                onChange={handleChange}
              />
              <span className="ml-4">40-49</span>
            </div>
          </div>
        </label>
      </div>
      <div className="flex-center">
        <label htmlFor="50-59" className="w-100 mb-3">
          <div className="card shadow-0 border">
            <div className="card-body">
              <input
                type="radio"
                className=""
                id="50-59"
                name="age"
                value="50-59"
                onChange={handleChange}
              />
              <span className="ml-4">50-59</span>
            </div>
          </div>
        </label>
      </div>
      <div className="flex-center">
        <label htmlFor="60-64" className="w-100 mb-3">
          <div className="card shadow-0 border">
            <div className="card-body">
              <input
                type="radio"
                className=""
                id="60-64"
                name="age"
                value="60-64"
                onChange={handleChange}
              />
              <span className="ml-4">60-64</span>
            </div>
          </div>
        </label>
      </div>
      <div className="flex-center">
        <label htmlFor="65-69" className="w-100 mb-3">
          <div className="card shadow-0 border">
            <div className="card-body">
              <input
                type="radio"
                className=""
                id="65-69"
                name="age"
                value="65-69"
                onChange={handleChange}
              />
              <span className="ml-4">65-69</span>
            </div>
          </div>
        </label>
      </div>
      <div className="flex-center">
        <label htmlFor="70-79" className="w-100 mb-3">
          <div className="card shadow-0 border">
            <div className="card-body">
              <input
                type="radio"
                className=""
                id="70-79"
                name="age"
                value="70-79"
                onChange={handleChange}
              />
              <span className="ml-4">70-79</span>
            </div>
          </div>
        </label>
      </div>
      <div className="flex-center">
        <label htmlFor="80+" className="w-100 mb-3">
          <div className="card shadow-0 border">
            <div className="card-body">
              <input
                type="radio"
                className=""
                id="80+"
                name="age"
                value="80+"
                onChange={handleChange}
              />
              <span className="ml-4">80+</span>
            </div>
          </div>
        </label>
      </div>
      <button
        onClick={handlePrev}
        className="btn btn-primary btn-md"
        style={styles}
      >
        Back
      </button>
      <button
        onClick={handleNext}
        className="btn btn-primary btn-md float-right"
        disabled={toggle}
        style={styles}
      >
        Next
      </button>
    </div>
  );
};

export default Question2;
