import React from 'react';
import styles from './auctionItems.module.css';
import auctionItemData from '../../data/auctionItems.json';
import babka from '../../assets/raffleItems/babka-baking-kit.png';
import jenis from '../../assets/raffleItems/jenis-giftcard.jpg';
import hollowLeg from '../../assets/raffleItems/hollow-leg.png';
import choppingBlock from '../../assets/raffleItems/chopping-block.png';
import urbanGeneral from '../../assets/raffleItems/ugs-giftcard.jpg';
import granola from '../../assets/raffleItems/granola.jpg';
import brewpoint from '../../assets/raffleItems/brewpoint-coffee.jpg';
import boardGame from '../../assets/raffleItems/board-game.png';
import laColombeCoffee from '../../assets/raffleItems/la-colombe-coffee.png';
import wine from '../../assets/raffleItems/wine.png';
import noImage from '../../assets/no-image.png';
import beeGift from '../../assets/raffleItems/bee-gift-set.png';
import hmlPrints from '../../assets/raffleItems/hml-prints.png';
import books from '../../assets/raffleItems/books.png';
import gatg from '../../assets/raffleItems/girl-and-the-goat.jpg';

const AuctionItems = () => (
    <div className={styles.auctionItemsWrapper}>
        <h1>RAFFLE ITEMS</h1>
        <hr/>
        <div className={styles.itemContainer}>
            {
                auctionItemData.map((item) => (
                    <div className={styles.item}>
                        <a href={item.link} target="_blank" rel="noreferrer">
                            <img src={item.itemImage} alt={item.altTag} className={styles.itemPic}/>
                        </a>
                        <h3>{item.itemTitle}</h3>
                        <p>{item.itemDescription}</p>
                        <p>{item.deliveryType}</p>
                    </div>
                ))
            }
        </div>
        <div className={styles.hiddenImages}>
            <img src={noImage} alt="item" className={styles.itemPic}/>
            <img src={babka} alt="item" className={styles.itemPic}/>
            <img src={hollowLeg} alt="item" className={styles.itemPic}/>
            <img src={choppingBlock} alt="item" className={styles.itemPic}/>
            <img src={jenis} alt="item" className={styles.itemPic}/>
            <img src={urbanGeneral} alt="item" className={styles.itemPic}/>
            <img src={granola} alt="item" className={styles.itemPic}/>
            <img src={brewpoint} alt="item" className={styles.itemPic}/>
            <img src={boardGame} alt="item" className={styles.itemPic}/>
            <img src={laColombeCoffee} alt="item" className={styles.itemPic}/>
            <img src={wine} alt="item" className={styles.itemPic}/>
            <img src={beeGift} alt="item" className={styles.itemPic}/>
            <img src={hmlPrints} alt="item" className={styles.itemPic}/>
            <img src={books} alt="item" className={styles.itemPic}/>
            <img src={gatg} alt="item" className={styles.itemPic}/>
        </div>
    </div>
);

export default AuctionItems;