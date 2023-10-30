import React from "react";

const UserInput = () => {
  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initial-investment">INITIAL INVESTMENT</label>
          <input id="initial-investment" type="number" />
        </div>
        <div>
          <label htmlFor="anuual-investment">ANNUAL INVESTMENT</label>
          <input id="anuual-investment" type="number" />
        </div>
        <div>
          <label htmlFor="expected-return">EXPECTED RETURN</label>
          <input id="expected-return" type="number" />
        </div>
        <div>
          <label htmlFor="duration">DURATION</label>
          <input id="duration" type="number" />
        </div>
      </div>
    </section>
  );
};

export default UserInput;
