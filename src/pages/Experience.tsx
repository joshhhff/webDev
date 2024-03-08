import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../css/page-css/Pages.css';

function Services() {

    return (
        <>
        <NavBar />
            <motion.div className="mainBody" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1}}>
                <h1 className="pageHeader">EXPERIENCE</h1>
                <motion.section className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1}}>
                    <motion.div className="clickableImageContainer" whileHover={{borderRadius: "10%", scale: 0.9 }} whileTap={{scale: 0.8}}>
                        <a href="/webDev/#/experience/education"><img className="clickableImage" src="./Implementations Image.png" alt="" /></a>
                        <div className="hoverText">IMPLEMENTATIONS</div>
                    </motion.div>
                    <motion.div className="clickableImageContainer" whileHover={{borderRadius: "10%", scale: 0.9 }} whileTap={{scale: 0.8}}>
                        <a href="/webDev/#/experience/industry"><img className="clickableImage" src="./Training & Mentoring.png" alt="" /></a>  
                        <div className="hoverText">TRAINING</div>
                    </motion.div>
                </motion.section>
            </motion.div>
        <Footer />
        </>
        );
    }
    
    export default Services;