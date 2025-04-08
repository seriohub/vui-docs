import React from 'react';
import styles from './openSourceTip.module.css';

export default function OpenSourceTipCustomTip({ children }) {
    return (
        <div className={styles.customTip}>
            <h3 className={styles.customTipTitle}>THIS PROJECT IS OPEN SOURCE!</h3>
            <div>{children}</div>
        </div>
    );
}
