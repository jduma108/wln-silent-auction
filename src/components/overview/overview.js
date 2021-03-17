import React from 'react';
import styles from './overview.module.css';
import Fade from 'react-reveal/Fade';

const Overview = () => (
    <Fade bottom cascade>
        <div className={styles.overviewWrapper}>
            <h1>OVERVIEW</h1>
            <hr/>
            <p>To celebrate Women's History Month, the Women's Leadership Network Chicago chapter will be hosting a raffle! Raffle items have been donated by women-owned and/or Chicago-based businesses and employees from Publicis Sapient. All proceeds from the raffle ticket purchases will be distrbuted evenly to the Chicago Foundation for Women, Assata's Daughters, and The Voice and Faces Project. The purpose of this fundraising event is to raise awareness for women-owned, Chicago-based businesses and raise money for non-profit organizations that focus on supporting and empowering women.</p>
            <p>Please reachout to Claire Zhang at claire.zhang@publicissapient.com for any questions!</p>
        </div>
    </Fade>
    
);

export default Overview;