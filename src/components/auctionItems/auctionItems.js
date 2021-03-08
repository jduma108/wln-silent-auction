import React from 'react';
import styles from './auctionItems.module.css';
import Fade from 'react-reveal/Fade';
import auctionItemData from '../../data/auctionItems.json';
import itemPic from '../../assets/item.jpg';
import babka from '../../assets/babka-baking-kit.png';
import jenis from '../../assets/jenis-ice-cream.jpg';

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
            <div className={styles.hiddenImages}>
                <img src={itemPic} alt="item" className={styles.itemPic}/>
                <img src={babka} alt="item" className={styles.itemPic}/>
                <img src={jenis} alt="item" className={styles.itemPic}/>
            </div>
        </div>
    </Fade>
);

export default AuctionItems;