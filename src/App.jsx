// App.jsx
import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [result, setResult] = useState([])

  const handleCalculateInvestment = (inputValues) => {
    const res = calculateInvestmentResults(inputValues);
    setResult(res)
  };

  return (
    <>
      <Header />
      <UserInput calculateInvestment={handleCalculateInvestment} />
      <Result result={result} />
    </>
  );
}

export default App;
