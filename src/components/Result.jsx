import React from "react";

const Result = ({ result }) => {
  console.log("result is in result file ", result);

  return (
    <div id="result">
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        {result.map((res) => (
          <tbody key={res.year}>
            <tr>
              <td>{res.year}</td>
              <td>{res.annualInvestment}</td>
              <td>{res.interest}</td>
              <td>{res.valueEndOfYear}</td>
              <td>{res.annualInvestment * res.interest}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Result;
