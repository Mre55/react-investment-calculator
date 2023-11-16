// App.jsx
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const handleCalculateInvestment = (inputValues) => {
    const res = calculateInvestmentResults(inputValues);
    console.log('res in App.js file is ', res)
  };

  return (
    <>
      <Header />
      <UserInput calculateInvestment={handleCalculateInvestment} />
      <Result />
    </>
  );
}

export default App;
