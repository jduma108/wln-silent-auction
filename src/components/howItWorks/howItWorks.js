import React from 'react';
import registerIcon from '../../assets/register.png';
import browseIcon from '../../assets/browse.png';
import bidIcon from '../../assets/bid.png';
import learnIcon from '../../assets/learn.png';
import styles from './howItWorks.module.css';

const HowItWorks = () => (
    <div className={styles.howItWorksWrapper}>
        <h1>HOW IT WORKS</h1>
        <hr/>
        <div className={styles.iconWrapper}>
            <div className={styles.registerWrapper}>
                <img src={registerIcon} alt="register" className={styles.icon}/>
                <h3>REGISTER</h3>
                <p>Click <a href="#">HERE</a> to register for the silent auction. You will use you Lion Login ID as your bid number.</p>
            </div>
            <div className={styles.browseWrapper}>
                <img src={browseIcon} alt="browse" className={styles.icon}/>
                <h3>BROWSE ITEMS</h3>
                <p>Browse the auction items that are listed below.</p>
            </div>
            <div className={styles.bidWrapper}>
                <img src={bidIcon} alt="bid" className={styles.icon}/>
                <h3>MAKE A BID</h3>
                <p>Each auction item has its own bid form. You are able to view the current bids and bid as many times as you want.</p>
            </div>
            <div className={styles.learnWrapper}>
                <img src={learnIcon} alt="learn" className={styles.icon}/>
                <h3>LEARN MORE</h3>
                <p>Learn more about the businesses that donated auction items and the non-profit organizations we will be donating to.</p>
            </div>
        </div>
        <p>Once the silent auction has closed, the person with the higest bid will be contacted with instructions on how to proceed with payment and where to send the item they won.</p>
    </div>
);

export default HowItWorks;