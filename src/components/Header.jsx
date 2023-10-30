import React from "react";

import investmentCalculatorLogo from "../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <div id="header">
      <img src={investmentCalculatorLogo} alt="Investment calculator logo" />
      <h1>Investment Calculator</h1>
    </div>
  );
};

export default Header;