import React from 'react';
import registerIcon from '../../assets/register.png';
import raffleIcon from '../../assets/raffle.png';
import bidIcon from '../../assets/bid.png';
import learnIcon from '../../assets/learn.png';
import styles from './howItWorks.module.css';
import Fade from 'react-reveal/Fade';

const HowItWorks = () => (
    <Fade bottom cascade>
        <div className={styles.howItWorksWrapper}>
            <h1>HOW IT WORKS</h1>
            <hr/>
            <div className={styles.iconWrapper}>
                <div className={styles.registerWrapper}>
                    <img src={registerIcon} alt="register" className={styles.icon}/>
                    <h3>REGISTER</h3>
                    <p>Click <a href="https://docs.google.com/forms/d/e/1FAIpQLSfx8z1V9ezb0RvIy1XuTwvKNy8k5rhLT6NwpCPe4ai-I8WKKw/viewform?usp=sf_link" target="_blank" rel="noreferrer">HERE</a> to register for the auction and raffle. Items listed below are a mix of raffle and auction items.</p>
                </div>
                <div className={styles.bidWrapper}>
                    <img src={bidIcon} alt="bid" className={styles.icon}/>
                    <h3>MAKE A BID</h3>
                    <p>You are able to view current bids and bid as many times as you want.</p>
                </div>
                <div className={styles.raffleWrapper}>
                    <img src={raffleIcon} alt="browse" className={styles.icon}/>
                    <h3>ENTER RAFFLE</h3>
                    <p>You are able to purchase as many raffle "tickets" as you want.</p>
                </div>
                <div className={styles.learnWrapper}>
                    <img src={learnIcon} alt="learn" className={styles.icon}/>
                    <h3>LEARN MORE</h3>
                    <p>Learn more about the businesses that donated auction items and the non-profit organizations we will be donating to.</p>
                </div>
            </div>
            <div className={styles.moreInfoWrapper}>
                <hr/>
                <h2>MORE AUCTION INFO</h2>
                <ul>
                    <li>When bidding on items, please use you Lion Login username as your bid number</li>
                    <li>After the event has closed, the person with the highest bid will win that auction item</li>
                    <li>Winners will be contacted with instructions on how to proceed with payment and where to send the auction item</li>
                </ul>
                <hr/>
                <h2>MORE RAFFLE INFO</h2>
                <ul>
                    <li>When purchasing a raffle ticket for an item, we will use your Lion Login username as your raffle number (i.e. if you purchase 3 raffle tickets, your Lion Login username will be added three times to the raffle pool)</li>
                    <li>After filling out the raffle form for a speicfic item, please venmo [INSERT VENMO]</li>
                    <li>When the event has closed, we will randomly pick the winner for each raffle item</li>
                    <li>Winners will be contacted about where to sent the raffle item</li>
                </ul>
                <h3>Raffle Bundles</h3>
                <ul>
                    <li>Purchase two tickets for $5</li>
                    <li>Purchase two tickets for $5</li>
                    <li>Purchase two tickets for $5</li>
                </ul>
            </div>
        </div>
    </Fade>
);

export default HowItWorks;