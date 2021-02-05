import React from 'react';
import styles from './landing.module.css';
import wlnLogo from '../../assets/wln-logo-colored.png';

const Landing = () => (
    <div className={styles.landingWrapper}>
        <img className={styles.logo} src={wlnLogo} alt="wln-logo"/>
        <h2>Women's History Month</h2>
        <h1>SILENT AUCTION</h1>
    </div>
);

export default Landing;