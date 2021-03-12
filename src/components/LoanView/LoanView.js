import React from 'react';
import styles from './styles.module.css';

const LoanView = (props) => {
    return ( 
        <div className={styles.container}>
            <div>
                <p>Loan Amount: {props.monthlyPay}</p>
            </div>
            <p>Principal: {props.principal}</p>
            <p>Interest: {props.interest}</p>
        </div>
    );
}
 
export default LoanView;