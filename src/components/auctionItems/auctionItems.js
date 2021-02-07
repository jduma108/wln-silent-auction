import React from 'react';
import styles from './auctionItems.module.css';
import item from '../../assets/item.jpg';
import Fade from 'react-reveal/Fade';

const AuctionItems = () => (
    <Fade bottom cascade>
        <div className={styles.auctionItemsWrapper}>
            <h1>AUCTION ITEMS</h1>
            <hr/>
            <div className={styles.itemContainer}>
                <div className={styles.item}>
                    <img src={item} alt="item" className={styles.itemPic}/>
                    <h3>ITEM TITLE</h3>
                    <p>Item description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className={styles.item}>
                    <img src={item} alt="item" className={styles.itemPic}/>
                    <h3>ITEM TITLE</h3>
                    <p>Item description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className={styles.item}>
                    <img src={item} alt="item" className={styles.itemPic}/>
                    <h3>ITEM TITLE</h3>
                    <p>Item description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className={styles.item}>
                    <img src={item} alt="item" className={styles.itemPic}/>
                    <h3>ITEM TITLE</h3>
                    <p>Item description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className={styles.item}>
                    <img src={item} alt="item" className={styles.itemPic}/>
                    <h3>ITEM TITLE</h3>
                    <p>Item description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className={styles.item}>
                    <img src={item} alt="item" className={styles.itemPic}/>
                    <h3>ITEM TITLE</h3>
                    <p>Item description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className={styles.item}>
                    <img src={item} alt="item" className={styles.itemPic}/>
                    <h3>ITEM TITLE</h3>
                    <p>Item description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className={styles.item}>
                    <img src={item} alt="item" className={styles.itemPic}/>
                    <h3>ITEM TITLE</h3>
                    <p>Item description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    </Fade>
);

export default AuctionItems;