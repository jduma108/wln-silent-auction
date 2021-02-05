import React from 'react';
import styles from './organizations.module.css';
import adLogo from '../../assets/ad-logo.png';
import cfwLogo from '../../assets/cfw-logo.png';
import vfpLogo from '../../assets/vfp-logo.jpg';


const Organizations = () => (
    <div className={styles.organizationsWrapper}>
        <h1>ABOUT THE NON-PROFIT ORGANZATIONS</h1>
        <hr/>
        <p>Learn more about the non-profit organzations we will be donating too!</p>
        <div className={styles.organizationsContainer}>
            <div className={styles.organization}>
                <img src={cfwLogo} alt="cfw-logo" className={styles.logo}/>
                <h3>Chicago Foudation for Women</h3>
            </div>
            <div className={styles.organization}>
                <img src={adLogo} alt="ad-logo" className={styles.logo}/>
                <h3>Assata's Daughters</h3>
            </div>
            <div className={styles.organization}>
                <img src={vfpLogo} alt="vfp-logo" className={styles.logo}/>
                <h3>The Voices and Faces Project</h3>
            </div>
        </div>
    </div>
);

export default Organizations;