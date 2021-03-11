import React from 'react';
import styles from './auctionItems.module.css';
import Fade from 'react-reveal/Fade';
import auctionItemData from '../../data/auctionItems.json';
import itemPic from '../../assets/item.jpg';
import babka from '../../assets/babka-baking-kit.png';
import jenis from '../../assets/jenis-ice-cream.jpg';
import hollowLeg from '../../assets/hollow-leg.png';
import choppingBlock from '../../assets/chopping-block.png';
import urbanGeneral from '../../assets/urban-general-store.jpg';

const AuctionItems = () => (
    <Fade bottom cascade>
        <div className={styles.auctionItemsWrapper}>
            <h1>RAFFLE ITEMS</h1>
            <hr/>
            <div className={styles.itemContainer}>
                {
                    auctionItemData.map((item) => (
                        <div className={styles.item}>
                            <img src={item.itemImage} alt="item" className={styles.itemPic}/>
                            <h3>{item.itemTitle}</h3>
                            <p>{item.itemDescription}</p>
                            <p>{item.deliveryType}</p>
                        </div>
                    ))
                }
            </div>
            
            <div className={styles.hiddenImages}>
                <img src={itemPic} alt="item" className={styles.itemPic}/>
                <img src={babka} alt="item" className={styles.itemPic}/>
                <img src={jenis} alt="item" className={styles.itemPic}/>
                <img src={hollowLeg} alt="item" className={styles.itemPic}/>
                <img src={choppingBlock} alt="item" className={styles.itemPic}/>
                <img src={urbanGeneral} alt="item" className={styles.itemPic}/>
            </div>
        </div>
    </Fade>
);

export default AuctionItems;