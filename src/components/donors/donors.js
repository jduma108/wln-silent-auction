import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './donors.module.css';
import jenis from '../../assets/jenis.png';
import urbanGeneralStore from '../../assets/urban-general-store.png';
import Fade from 'react-reveal/Fade';

const Donors = () => (
    <Fade bottom cascade>
        <div className={styles.donorsWrapper}>
            <h1>THANK YOU TO OUR DONORS</h1>
            <hr/>
            <Carousel className={styles.carouselWrapper}>
                <Carousel.Item>
                    <img
                        src={jenis}
                        alt="Jeni's Ice Cream"
                        className={styles.itemImg}
                    />
                    <div className={`${styles.itemDescription} ${styles.jenis}`}>
                        <h3><a href="https://jenis.com/" target="_blank" rel="noreferrer">Jeni's Spendid Ice Creams</a></h3>
                        <p>Jeni Britton Bauer founded Jeni's Splendid Ice Cream in 2002. Her ahead-of-the-trend vision—using whole ingredients and dairy from grass-pastured cows, rather than synthetic flavorings and commodity ice cream mix—coupled with inspired flavors sparked the artisan ice cream movement more than a decade before it would become a top food trend.</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={urbanGeneralStore}
                        alt="Urban General Store"
                        className={styles.imgBackground}
                    />
                    <div className={`${styles.itemDescription} ${styles.urbanStore}`}>
                        <h3><a href="https://urbangeneralstore.com/" target="_blank" rel="noreferrer">Urban General Store</a></h3>
                        <p>Rebecca Wood is the founder/owner of ENJOY, AN URBAN GENERAL STORE. Launched in 2008, Urban General Store is a nod to general stores of the past but updated to meet the needs of today's modern shopper. The site carries a wide variety of fun, functional, inspirational and well-designed items so that all your gift buying can be accomplished at one website.</p>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    </Fade>
);

export default Donors;