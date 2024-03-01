import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../css/page-css/Pages.css';
import styles from '../css/page-css/Pages.module.css' //fixing background color on services page to be white on top of background colour. create css file for all pages like these to share (instead of seperate files)

function Services() {

    return (
        <>
        <NavBar />
        <div className="background">
            <motion.div className={styles.mainBody} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1}}>
                <h1 className={styles.pageHeader}>SERVICES</h1>
                <motion.section className="sectionBlue" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1}}>
                    <motion.div className="clickableImageContainer" whileHover={{borderRadius: "20%"}} whileTap={{scale: 0.9}}>
                        <a href="/webDev/#/services/implementations"><img className="clickableImage" src="./Implementations Image.png" alt="" /></a>
                        <div className="hoverText">IMPLEMENTATIONS</div>
                    </motion.div>
                    <motion.div className="clickableImageContainer" whileHover={{borderRadius: "20%"}} whileTap={{scale: 0.9}}>
                        <a href="/webDev/#/services/trainingandmentoring"><img className="clickableImage" src="./Training & Mentoring.png" alt="" /></a>  
                    </motion.div>
                </motion.section>
            </motion.div>
        </div>
        <Footer />
        </>
        );
    }
    
    export default Services;