import React from "react";

const Result = () => {
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
        <tbody>
          <tr>
            <td>1</td>
            <td>$10,850</td>
            <td>$550</td>
            <td>$550</td>
            <td>$10,300</td>
          </tr>
          <tr>
            <td>2</td>
            <td>$11,747</td>
            <td>$597</td>
            <td>$1,147</td>
            <td>$10,600</td>
          </tr>
          <tr>
            <td>3</td>
            <td>$12,693</td>
            <td>$646</td>
            <td>$1,147</td>
            <td>$10,900</td>
          </tr>
          <tr>
            <td>4</td>
            <td>$13,691</td>
            <td>$698</td>
            <td>$2,491</td>
            <td>$11,200</td>
          </tr>
          <tr>
            <td>5</td>
            <td>$14,744</td>
            <td>$753</td>
            <td>$3,244</td>
            <td>$11,500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Result;
