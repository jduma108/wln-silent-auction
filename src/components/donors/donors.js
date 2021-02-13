import React from 'react';
import styles from './donors.module.css';
import jenis from '../../assets/jenis.png';
import urbanGeneralStore from '../../assets/urban-general-store.png';
import laColombe from '../../assets/laColombe-logo.png';
import sinTitulo from '../../assets/sinTitulo-logo.png';
import Fade from 'react-reveal/Fade';

const Donors = () => (
    <Fade bottom cascade>
        <div className={styles.donorsWrapper}>
            <h1>THANK YOU TO OUR DONORS</h1>
            <hr/>
            <div className={styles.itemWrapper}>
                <div className={styles.item}>
                    <img
                        src={jenis}
                        alt="Jeni's Ice Cream"
                        className={styles.itemImg}
                    />  
                    <div className={styles.itemDescriptionL}>
                        <h3><a href="https://jenis.com/" target="_blank" rel="noreferrer">Jeni's Spendid Ice Creams</a></h3>
                        <p>Founded by Jeni Britton Bauer, Jeni's Splendid Ice Cream ahead-of-the-trend vision—using whole ingredients and dairy from grass-pastured cows mix—coupled with inspired flavors sparked the artisan ice cream movement more than a decade before it would become a top food trend.</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.itemDescriptionR}>
                        <h3><a href="https://urbangeneralstore.com/" target="_blank" rel="noreferrer">Urban General Store</a></h3>
                        <p>Founded by Rebecca Wood, Urban General Store is a nod to general stores of the past but updated to meet the needs of today's modern shopper. The site carries a wide variety of fun, functional, inspirational and well-designed items so that all your gift buying can be accomplished at one website.</p>
                    </div>
                    <img
                        src={urbanGeneralStore}
                        alt="Urban Genral Store"
                        className={styles.itemImg}
                    />  
                </div>
                <div className={styles.item}>
                    <img
                        src={sinTitulo}
                        alt="Sin Titulo"
                        className={styles.itemImg}
                    />  
                    <div className={styles.itemDescriptionL}>
                        <h3><a href="https://www.sintituloshop.com/" target="_blank" rel="noreferrer">Sin Titulo</a></h3>
                        <p>Need to add</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.itemDescriptionR}>
                        <h3><a href="https://www.lacolombe.com/" target="_blank" rel="noreferrer">La Colombe</a></h3>
                        <p>Need to add</p>
                    </div>
                    <img
                        src={laColombe}
                        alt="La Colombe"
                        className={styles.itemImg}
                    />  
                </div>
            </div>
        </div>
    </Fade>
);

export default Donors;