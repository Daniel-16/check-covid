import React from "react";
import { MDBInput } from "mdbreact";

//Destructured form properties
const Form = ({
  handleNameChange,
  handleLastNameChange,
  handleAgeChange,
  handleGenderChange,
  nextStep,
}) => {
  //Next step
  const next = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <form>
      <h2 className="text-center">Self Assessment</h2>
      <label htmlFor="" className="m-2">
        Firstname
      </label>
      <input
        type="text"
        className="form-control shadow-none"
        placeholder="Firstname"
        onChange={handleNameChange}
      />
      <label htmlFor="" className="m-2">
        Lastname
      </label>
      <input
        type="text"
        className="form-control shadow-none"
        placeholder="Lastname"
        onChange={handleLastNameChange}
      />
      <label className="m-2">What is your age?</label>
      <select
        name="age"
        className="form-control w-100 shadow-none"
        onChange={handleAgeChange}
        required
      >
        <option value="">Please select an age</option>
        <option value="13-17">13-17</option>
        <option value="18-29">18-29</option>
        <option value="30-39">30-39</option>
        <option value="40-49">40-49</option>
        <option value="50-59">50-59</option>
        <option value="60-64">60-64</option>
        <option value="65-69">65-69</option>
        <option value="70-79">70-79</option>
        <option value="80+">80+</option>
      </select>
      <label htmlFor="" className="m-2">
        What is your gender?
      </label>
      <select className="form-control" onChange={handleGenderChange} required>
        <option value="">Please select a gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <button className="btn btn-primary btn-md" onClick={next}>
        Next
      </button>
    </form>
  );
};

export default Form;
