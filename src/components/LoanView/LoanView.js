import React from 'react';
import styles from './styles.module.css';

const LoanView = (props) => {
    return ( 
        <div className={styles.container}>
            <div className={styles.mainCard}>
                <h4>Loan Amount</h4>
                <h1>{parseFloat(props.monthlyPay).toFixed(3)}</h1>
            </div>
            <div className={styles.bottomCard}>
                <div className={styles.row}><p>Principal</p> <p>{parseFloat(props.principal).toFixed(3)}</p></div>
                <div className={styles.row}><p>Interest</p> <p>{parseFloat(props.interest).toFixed(3)}</p></div>
            </div>
        </div>
    );
}
 
export default LoanView;