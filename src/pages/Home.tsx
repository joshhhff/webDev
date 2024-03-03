import '../css/page-css/Pages.css';
import InfoCard from '../components/InfoCard';
import Button from '../components/Button';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

function Home() {
  return (
    <>
    <NavBar />
    <div className="mainBody">
        <motion.section className="sectionBlue" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1}} viewport={{ once: true }}>
            <motion.img src="./NetSuiteImage.png"  initial={{ opacity: 0, translateX: -100}} whileInView={{ opacity: 1, translateX: 0}} transition={{ duration: 1 }} viewport={{ once: true }} />
            <motion.div className="textInfo" initial={{ opacity: 0, translateX: +100 }} whileInView={{ opacity: 1, translateX: 0 }} transition={{ duration: 1}} viewport={{ once: true }}>
                <h1 className="homePageHeader">WE ARE<br/>GOLIVE EXPERTS</h1>
                <h3 className="homePageHeader">HELPING YOU IMPLEMENT AND OPTIMISE NETSUITE TO YOUR ORGANISATIONAL NEEDS</h3>
                <Button
                    link="/webDev/#/aboutus"
                    text="ABOUT US" 
                    isSubmit={false}
                />
            </motion.div>
        </motion.section>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1}} viewport={{ once: true }}><hr /></motion.div>
        
        <motion.section className="sectionBlue" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1}} viewport={{ once: true }}>
            <motion.div initial={{ opacity: 0, translateX: -100}} whileInView={{ opacity: 1, translateX: 0}} transition={{ duration: 1}} viewport={{ once: true }}>
                <InfoCard
                    title="NetSuite"
                    image="./NetSuiteLogo.jpg"
                    description="NetSuite is the world's #1 Cloud ERP System. Keep track of Invetory, Financials and more!"
                />
            </motion.div>
            <motion.div initial={{ opacity: 0, translateX: +100}} whileInView={{ opacity: 1, translateX: 0}} transition={{ duration: 1}} viewport={{ once: true }}>
                <InfoCard
                    title="Celigo"
                    image="./CeligoLogo.jpg" 
                    description="Offers seamless integrations between various different applications in your organisation."
                />
            </motion.div>

        </motion.section>
    </div>
    <Footer />
    </>
);
}

export default Home;