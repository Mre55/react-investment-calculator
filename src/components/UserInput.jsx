// UserInput.jsx
import React, { useState } from "react";

const UserInput = ({ calculateInvestment }) => {
  const [inputValues, setInputValues] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });

    calculateInvestment(inputValues);
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initial-investment">INITIAL INVESTMENT</label>
          <input
            id="initial-investment"
            name="initialInvestment"
            type="number"
            value={inputValues.initialInvestment}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="annual-investment">ANNUAL INVESTMENT</label>
          <input
            id="annual-investment"
            name="annualInvestment"
            type="number"
            value={inputValues.annualInvestment}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="expected-return">EXPECTED RETURN</label>
          <input
            id="expected-return"
            name="expectedReturn"
            type="number"
            value={inputValues.expectedReturn}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="duration">DURATION</label>
          <input
            id="duration"
            name="duration"
            type="number"
            value={inputValues.duration}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </section>
  );
};

export default UserInput;
