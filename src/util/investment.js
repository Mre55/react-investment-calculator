// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * expectedReturn;
    investmentValue += interestEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      annualInvestment: annualInvestment, // investment added in this year
    });
  }

  console.log('annual data in investment.js is ', annualData)

  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});


// // Input values
// const initialInvestment = 10000;
// const annualInvestment = 1200;
// const expectedReturn = 0.06;
// const duration = 10;

// // Calculate investment results
// const results = calculateInvestmentResults({
//   initialInvestment,
//   annualInvestment,
//   expectedReturn,
//   duration,
// });

// // Function to display the results for a specific year
// function displayResultsForYear(year) {
//   if (year <= results.length) {
//     const result = results[year - 1];
//     const curResult = results[year - 2];
//     console.log(
//       `Year ${year} | Investment Value = ${formatter.format(
//         result.valueEndOfYear
//       )} | Interest (Year) = ${formatter.format(
//         result.interest
//       )} | Total Interest = ${
//         curResult
//           ? formatter.format(result.interest + curResult.interest)
//           : formatter.format(result.interest)
//       } | Invested Capital = ${formatter.format(
//         result.valueEndOfYear - result.interest
//       )}`
//     );
//   } else {
//     console.log(`Year ${year} | Data not available`);
//   }
// }

// // Display the results for year 1
// displayResultsForYear(1);

// // Display the results for year 2
// displayResultsForYear(2);
