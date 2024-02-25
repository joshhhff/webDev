import styles from '../css/page-css/Home.module.css';
import InfoCard from '../components/InfoCard';
import Button from '../components/Button';
import { ScrollReveal } from 'reveal-on-scroll-react';

function Home() {
  return (
    <div className={styles.mainBody}>
        <ScrollReveal.div animation="slide-in-bottom">
        <section className={styles.sectionBlue}>
            <img src="./NetSuiteImage.png" />
            <div className={styles.textInfo}>
                <h1>WE ARE<br/>GOLIVE EXPERTS</h1>
                <h3>HELPING YOU IMPLEMENT AND OPTIMISE NETSUITE TO YOUR ORGANISATIONAL NEEDS</h3>
                <Button
                    link="/webDev/#/aboutus"
                    text="ABOUT US" 
                    isSubmit={false}
                />
            </div>
        </section>
        </ScrollReveal.div>
        
        <ScrollReveal.div animation="slide-in-bottom">
        <section className={styles.sectionGreen}>
            <InfoCard
                title="NetSuite"
                image="./NetSuiteLogo.jpg"
                description="NetSuite is the world's #1 Cloud ERP System. Keep track of Invetory, Financials and more!"
            />
            <InfoCard
                title="Celigo"
                image="./CeligoLogo.jpg" 
                description="Offers seamless integrations between various different applications in your organisation."
            />

        </section>
        </ScrollReveal.div>
    </div>
);
}

export default Home;