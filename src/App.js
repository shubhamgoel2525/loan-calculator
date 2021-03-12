import { useState } from 'react';
import './App.css';
import Controls from './components/Controls/Controls';
import LoanView from './components/LoanView/LoanView';

function App() {
  const [monthlyPay, setMonthlyPay] = useState(0);
  const [principal, setPrincipal] = useState(0);
  const [interest, setInterest] = useState(0);

  return (
    <div className="App">
      <Controls
        setMonthlyPay={setMonthlyPay}
        setPrincipal={setPrincipal}
        setInterest={setInterest} />

      <LoanView
        monthlyPay={monthlyPay}
        principal={principal}
        interest={interest} />
    </div>
  );
}

export default App;
