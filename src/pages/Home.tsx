import styles from '../css/page-css/Home.module.css';
import InfoCard from '../components/InfoCard';
import Button from '../components/Button';

function Home() {
  return (
    <div className={styles.mainBody}>
        <section className={styles.sectionBlue}>
            <img src="src/assets/NetSuiteImage.png" />
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
        
        <section className={styles.sectionGreen}>
            <InfoCard
                title="NetSuite"
                image="src/assets/NetSuiteLogo.jpg"
                description="NetSuite is the world's #1 Cloud ERP System. Keep track of Invetory, Financials and more!"
            />
            <InfoCard
                title="Celigo"
                image="src/assets/CeligoLogo.jpg" 
                description="Offers seamless integrations between various different applications in your organisation."
            />

        </section>
    </div>
);
}

export default Home;