import '../css/page-css/Pages.css';
import InfoCard from '../components/InfoCard';
import Button from '../components/Button';
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion';

function Home() {
  return (
    <>
    <NavBar animate={true} />
    <div className="mainBody">
        <motion.section className="sectionBlue" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1}}>
            <img src="./NetSuiteImage.png" />
            <div className="textInfo">
                <h1 className="homePageHeader">WE ARE<br/>GOLIVE EXPERTS</h1>
                <h3 className="homePageHeader">HELPING YOU IMPLEMENT AND OPTIMISE NETSUITE TO YOUR ORGANISATIONAL NEEDS</h3>
                <Button
                    link="/webDev/#/aboutus"
                    text="ABOUT US" 
                    isSubmit={false}
                />
            </div>
        </motion.section>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1}}><hr /></motion.div>
        
        <motion.section className="sectionBlue" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1}}>
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

        </motion.section>
    </div>
    </>
);
}

export default Home;