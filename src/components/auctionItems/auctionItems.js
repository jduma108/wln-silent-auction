import React from 'react';
import styles from './auctionItems.module.css';
import Fade from 'react-reveal/Fade';
import auctionItemData from '../../data/auctionItems.json';

const AuctionItems = () => (
    <Fade bottom cascade>
        <div className={styles.auctionItemsWrapper}>
            <h1>AUCTION ITEMS</h1>
            <hr/>
            <div className={styles.itemContainer}>
                {
                    auctionItemData.map((item) => (
                        <div className={styles.item}>
                            <img src={item.itemImage} alt="item" className={styles.itemPic}/>
                            <h3>{item.itemTitle}</h3>
                            <p>{item.itemDescription}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </Fade>
);

export default AuctionItems;