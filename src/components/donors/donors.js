import React from 'react';
import styles from './donors.module.css';
import jenis from '../../assets/logos/jenis-logo.png';
import urbanGeneralStore from '../../assets/logos/urban-general-store-logo.png';
import laColombe from '../../assets/logos/laColombe-logo.png';
import sinTitulo from '../../assets/logos/sinTitulo-logo.png';
import brewpoint from '../../assets/logos/brewpoint-logo.png';
import girlAndTheGoat from '../../assets/logos/girl-and-the-goat-logo.jpg';
import harebrained from '../../assets/logos/harebrained-logo.png';
import hml from '../../assets/logos/hml-design-logo.png';
import hollowLeg from '../../assets/logos/hollow-leg-logo.png';
import masaMadre from '../../assets/logos/masa-madre-logo.png';
import niloofar from '../../assets/logos/niloofar-logo.png';
import outsideVoices from '../../assets/logos/outside-voices-logo.png';
import choppingBlock from '../../assets/logos/the-chopping-block-logo.png';
import alveole from '../../assets/logos/alveole-logo.jpg';

const Donors = () => (
    <div className={styles.donorsWrapper}>
        <h1>THANK YOU TO OUR DONORS & SUPPORTERS</h1>
        <hr/>
        <h2>Click on the name of each business to learn more about what they do!</h2>
        <div className={styles.itemWrapper}>
            <div id="masaMadre" className={styles.item}>
                <img
                    src={masaMadre}
                    alt="Masa Madre Logo"
                    className={styles.itemImg}
                />  
                <div className={styles.itemDescriptionL}>
                    <h3><a href="https://hellomasamadre.com/" target="_blank" rel="noreferrer">Masa Madre</a></h3>
                    <p>Founded by Tamar and Elena, passionate bakers (and longtime friends) from Mexico City, Masa Madre is an artisanal bakery that blends their Mexican and Jewish heritage with quality ingredients, as well as the most eco-friendly materials for thier packaging.</p>
                </div>
            </div>
            <div id="hollowLeg" className={styles.item}>
                <div className={styles.itemDescriptionR}>
                    <h3><a href="https://hollowleg.com/" target="_blank" rel="noreferrer">Hollow Leg</a></h3>
                    <p>Founded by Devin Kider, Hollow Leg offers cocktail classes for folks who are interested in the art and science behind mixology. Her classes are real life test kitchens where class-goers make customized cocktails tailored to their palate and guided on how to make cocktails with handcrafted bitters/tinctures, and use local, seasonal ingredients we source from local farmers.</p>
                </div>
                <img
                    src={hollowLeg}
                    alt="Hollow Leg Logo"
                    className={styles.itemImg}
                />  
            </div>
            <div id="sinTitulo" className={styles.item}>
                <img
                    src={sinTitulo}
                    alt="Sin Titulo Logo"
                    className={styles.itemImg}
                />  
                <div className={styles.itemDescriptionL}>
                    <h3><a href="https://www.sintituloshop.com/" target="_blank" rel="noreferrer">Sin Titulo</a></h3>
                    <p>Need to add</p>
                </div>
            </div>
            <div id="jenis" className={styles.item}>
                <div className={styles.itemDescriptionR}>
                    <h3><a href="https://jenis.com/" target="_blank" rel="noreferrer">Jeni's Spendid Ice Creams</a></h3>
                    <p>Founded by Jeni Britton Bauer, Jeni's Splendid Ice Cream ahead-of-the-trend vision—using whole ingredients and dairy from grass-pastured cows mix—coupled with inspired flavors sparked the artisan ice cream movement more than a decade before it would become a top food trend.</p>
                </div>
                <img
                    src={jenis}
                    alt="Jeni's Ice Cream Logo"
                    className={styles.itemImg}
                />  
            </div>
            <div id="laColombe" className={styles.item}>
                <img
                    src={laColombe}
                    alt="La Colombe Logo"
                    className={styles.itemImg}
                />  
                <div className={styles.itemDescriptionL}>
                    <h3><a href="https://www.lacolombe.com/" target="_blank" rel="noreferrer">La Colombe</a></h3>
                    <p>Founders Todd Carmichael and J.P. Iberti built La Colombe on a simple but ambitious mission: to make the world better through coffee. What started out as a vision for serving the best coffee to the country, became an opportunity to influence meaningful change around the world. This is how we plan to make a difference.</p>
                </div>
            </div>
            <div id="theChoppingBlock" className={styles.item}>
                <div className={styles.itemDescriptionR}>
                    <h3><a href="https://www.thechoppingblock.com/" target="_blank" rel="noreferrer">The Chopping Block</a></h3>
                    <p>Founded by Shelly Young, The Chopping Block is a recreational cooking school that combines education and entertainment, as thier staff provides each guest “The Chopping Block Experience.” The company is founded on building communities around food and on providing opportunities and education that support her employees and her customers in living their dreams.</p>
                </div>
                <img
                    src={choppingBlock}
                    alt="The Chopping Block Logo"
                    className={styles.itemImg}
                />  
            </div>
            <div id="girlAndTheGoat" className={styles.item}>
                <img
                    src={girlAndTheGoat}
                    alt="Girl and the Goat Logo"
                    className={styles.itemImg}
                />  
                <div className={styles.itemDescriptionL}>
                    <h3><a href="https://girlandthegoat.com/" target="_blank" rel="noreferrer">Girl & The Goat</a></h3>
                    <p>Chicago native Stephanie Izard, founded Girl & The Goat in summer of 2010 with the goal of serving a family style menu of tasty, bold flavored foods with global influence in a fun and lively setting that makes our guests feel at home from the moment they walk in the door. </p>
                </div>
            </div>
            <div id="hml" className={styles.item}>
                <div className={styles.itemDescriptionR}>
                    <h3><a href="https://www.hml.design/" target="_blank" rel="noreferrer">HML</a></h3>
                    <p>Hailey Losselyong is a self taught visual artist currently based in Chicago.  While her work is displayed on a variety of "canvases", its purpose is to highlight strength and beauty through abstract female portraiture.</p>
                </div>
                <img
                    src={hml}
                    alt="HML Logo"
                    className={styles.itemImg}
                />  
            </div>
            <div id="ugs" className={styles.item}>
                <img
                    src={urbanGeneralStore}
                    alt="Urban Genral Store Logo"
                    className={styles.itemImg}
                />
                <div className={styles.itemDescriptionL}>
                    <h3><a href="https://urbangeneralstore.com/" target="_blank" rel="noreferrer">Urban General Store</a></h3>
                    <p>Founded by Rebecca Wood, Urban General Store is a nod to general stores of the past but updated to meet the needs of today's modern shopper. The site carries a wide variety of fun, functional, inspirational and well-designed items so that all your gift buying can be accomplished at one website.</p>
                </div>
            </div>
            <div id="harebrained" className={styles.item}>
                <div className={styles.itemDescriptionR}>
                    <h3><a href="https://www.harebraineddesign.com/" target="_blank" rel="noreferrer">Harebrained</a></h3>
                    <p>Founded by illustrator/designer Anthony Hall in 2008, Harebrained has grown into a Chicago team dedicated to making anything and everything awesome. They are best known for their line of menstrual themed Period Panties, and have recently developed men's and women's "Pundies". In 2017, Harebrained also expanded into the tabletop game market with a NSFW trivia game called Shit For Brains.</p>
                </div>
                <img
                    src={harebrained}
                    alt="Harebrained Logo"
                    className={styles.itemImg}
                />  
            </div>
            <div id="brewpoint" className={styles.item}>
                <img
                    src={brewpoint}
                    alt="Brewpoint Coffee Logo"
                    className={styles.itemImg}
                />
                <div className={styles.itemDescriptionL}>
                    <h3><a href="https://brewpointcoffee.com" target="_blank" rel="noreferrer">Brewpoint Coffee</a></h3>
                    <p>Founded by Melissa Villanueva, Brewpoint is a coffee company that is building a better world through authentic community spaces. They have three shops in Elmhurst, IL, a growing wholesale company and event spaces - all dedicated to empowering other cafes to make their own community spaces in their neighborhoods.</p>
                </div>
            </div>
            <div id="outsideVoices" className={styles.item}>
                <div className={styles.itemDescriptionR}>
                    <h3><a href="https://www.outsidevoiceswine.com/" target="_blank" rel="noreferrer">Outside Voices</a></h3>
                    <p>Run by Davis Sayer and Katie Hire, Outside Voices is an eclectic Logan Square wine spot from the team behind Scofflaw, Slippery Slope, The Heavy Feather, and The Moonlighter. Outside Voices offers a cozy indoor space clad with ornate woodwork from Threefold, modern touches, and playful art by Nate Otto.</p>
                </div>
                <img
                    src={outsideVoices}
                    alt="Outside Voices Logo"
                    className={styles.itemImg}
                />  
            </div>
            <div id="niloofar" className={styles.item}>
                <img
                    src={niloofar}
                    alt="Niloofar Logo"
                    className={styles.itemImg}
                />
                <div className={styles.itemDescriptionL}>
                    <h3><a href="https://www.niloofarmix.com/" target="_blank" rel="noreferrer">Niloofar</a></h3>
                    <p>Niloofar, founder of her company by the same name, grew up with an Iranian father who loved to cook. Niloofar realized that Persian food was difficult to find in grocery stores and made it her mission to change this, and together with her dad, set out to recreate their family recipes under the brand Niloofar. The company is passionate about bringing Persian cuisine to your home.</p>
                </div>
            </div>
            <div id="alveole" className={styles.item}>
                <div className={styles.itemDescriptionR}>
                    <h3><a href="https://www.alveole.buzz/" target="_blank" rel="noreferrer">Alvéole</a></h3>
                    <p>At Alvéole, they help businesses, schools, and various organizations meet their engagement and sustainability goals by bringing bees to their building. They provide both a turnkey educational service and an exceptional, meaningful experience. Their goal is to make people fall in love with bees, build ecological awareness, and in time, more sustainable cities and food systems.</p>
                </div>
                <img
                    src={alveole}
                    alt="Outside Voices Logo"
                    className={styles.itemImg}
                />  
            </div>
        </div>
    </div>
);

export default Donors;