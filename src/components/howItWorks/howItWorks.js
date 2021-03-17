import React from 'react';
import browseIcon from '../../assets/browse.png';
import raffleIcon from '../../assets/raffle.png';
import learnIcon from '../../assets/learn.png';
import styles from './howItWorks.module.css';

const HowItWorks = () => (
    <div className={styles.howItWorksWrapper}>
        <h1>HOW IT WORKS</h1>
        <hr className={styles.titleHr}/>
        <div className={styles.iconWrapper}>
            <div className={styles.browseWrapper}>
                <img src={browseIcon} alt="register" className={styles.icon}/>
                <h3>BROWSE ITEMS</h3>
                <p>Check out awesome raffle items listed below!</p>
            </div>
            <div className={styles.raffleWrapper}>
                <img src={raffleIcon} alt="browse" className={styles.icon}/>
                <h3>PURCHASE RAFFLE TICKETS</h3>
                <p>You are able to purchase as many raffle "tickets" as you want. Click below to buy raffle tickets!</p>
            </div>
            <div className={styles.learnWrapper}>
                <img src={learnIcon} alt="learn" className={styles.icon}/>
                <h3>LEARN MORE</h3>
                <p>Learn more about the businesses that donated raffle items and the non-profit organizations we will be donating to.</p>
            </div>
        </div>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfx8z1V9ezb0RvIy1XuTwvKNy8k5rhLT6NwpCPe4ai-I8WKKw/viewform?usp=sf_link" rel="noreferrer" target="_blank">
            <button className={styles.button}>CLICK HERE TO BUY TICKETS</button>
        </a>
        <hr className={styles.fullWidthHr}/>
        <div className={styles.moreInfoWrapper}>
            <div className={styles.moreInfoItem}>
                <h2>RAFFLE RULES</h2>
                <ul>
                    <li>When filling out the a raffle form, you will need to provide your full name, work email, and number of tickets you will purchase for each item</li>
                    <li>You may purchase x amount of tickets and distribute them how you want. For example, if you buy 10 tickets, you can put 5 towards one item and the other 5 towards another item</li>
                    <li>After filling out the raffle form, please Venmo Leila Choucair <span className={styles.bold}>@Leilac</span> and include the following message: <span className={styles.bold}>Chicago WLN Raffle Event 2021 - [insert name]</span></li>
                    <li>Please make sure the name you enter in the raffle form matches the name you send in your Venmo message</li>
                    <li>When the event has closed, we will randomly pick the winner for each raffle item</li>
                    <li>Winners will be contacted by email about where to send the raffle item</li>
                </ul>
            </div>
            <div className={styles.bundles}>
                <h2>RAFFLE BUNDLES</h2>
                <ul>
                    <li>Purchase 1 ticket for $3</li>
                    <li>Purchase 2 tickets for $6</li>
                    <li>Purchase 3 tickets for $9</li>
                    <li>Purchase 5 tickets for $10</li>
                    <li>Purchase 10 tickets for $20</li>
                </ul>
            </div>
        </div>
        <h2 className={styles.raffleDates}>RAFFLE EVENT OPEN FROM MARCH 22 12:00AM - MARCH 26 11:59PM</h2>
    </div>
);

export default HowItWorks;