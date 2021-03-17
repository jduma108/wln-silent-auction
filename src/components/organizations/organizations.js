import React from 'react';
import styles from './organizations.module.css';
import adLogo from '../../assets/logos/ad-logo.png';
import cfwLogo from '../../assets/logos/cfw-logo.png';
import vfpLogo from '../../assets/logos/vfp-logo.jpg';

const Organizations = () => (
    <div className={styles.organizationsWrapper}>
        <h1>ABOUT THE NON-PROFIT ORGANZATIONS</h1>
        <hr/>
        <p>Click on each logo to learn more about the non-profit organzations we will be donating to!</p>
        <div className={styles.organizationsContainer}>
            <div className={styles.organization}>
                <a href="https://www.cfw.org/" target="_blank" rel="noreferrer">
                    <img src={cfwLogo} alt="cfw-logo" className={styles.logo}/>
                </a>
            </div>
            <div className={styles.organization}>
                <a href="https://www.assatasdaughters.org/" target="_blank" rel="noreferrer">
                    <img src={adLogo} alt="ad-logo" className={styles.logo}/>
                </a>
            </div>
            <div className={styles.organization}>
                <a href="https://voicesandfaces.org/" target="_blank" rel="noreferrer">
                    <img src={vfpLogo} alt="vfp-logo" className={styles.logo}/>
                </a>
            </div>
        </div>
    </div>
);

export default Organizations;