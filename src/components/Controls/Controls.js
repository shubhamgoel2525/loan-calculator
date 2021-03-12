import React, { useState } from 'react';
import styles from './styles.module.css';

const Controls = (props) => {
    const [loanAmount, setLoanAmount] = useState(0);
    const [loanTerm, setLoanTerm] = useState(0);
    const [loanTermUnit, setLoanTermUnit] = useState('month');
    const [interestRate, setInterestRate] = useState(0);

    const calculateLoan = () => {
        let time = loanTermUnit.toLowerCase() === 'month' ? loanTerm / 12 : loanTerm;
        let totalAmount = loanAmount * Math.pow(1 + (interestRate / 100), time);
        let interest = totalAmount - loanAmount;

        let monthlyPay = 0;

        if (loanTermUnit.toLowerCase() === 'month')
            monthlyPay = totalAmount / loanTerm;
        else
            monthlyPay = totalAmount / (loanTerm * 12);

        props.setInterest(interest);
        props.setPrincipal(loanAmount);
        props.setMonthlyPay(monthlyPay);
    }

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <h1 className={styles.heading}>Loan Calculator</h1>
                <h4 className={styles.subheading}>Calculate your loans</h4>
                <div className={styles.row}>
                    <label>
                        <p className={styles.para}>Loan Amount</p>
                        <p className={styles.para}>$ <input type="number" onChange={e => setLoanAmount(e.target.value)} /></p>
                    </label>
                    <label>
                        <p>Loan Term</p>
                        <div className={styles.input}>
                            <input type="number" onChange={e => setLoanTerm(e.target.value)} />
                        </div>
                        <div className={styles.input}>
                            <div className={styles.tUnit}>
                                <button onClick={() => setLoanTermUnit('month')} className={loanTermUnit === 'year' ? styles.btn : styles.btn + ' ' + styles.selected}>Month</button>
                                <button onClick={() => setLoanTermUnit('year')} className={loanTermUnit === 'month' ? styles.btn : styles.btn + ' ' + styles.selected}>Year</button>
                            </div>
                        </div>
                    </label>
                </div>
                <div className={styles.row}>
                    <label>
                        <p>Interest rate per year</p>
                        <p>
                            <input type="number" step="any" onChange={e => setInterestRate(e.target.value)} /> %
                        </p>
                    </label>
                    <button className={styles.btn} onClick={calculateLoan}>Calculate</button>
                </div>
            </div>
        </div>
    );
}

export default Controls;