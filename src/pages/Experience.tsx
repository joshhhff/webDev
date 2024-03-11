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
                <motion.section className="section education-block" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1}}>
                    <motion.div className="clickableImageContainer" whileHover={{borderRadius: "10%", scale: 0.9 }} whileTap={{scale: 0.8}}>
                        <a href="/webDev/#/experience/education"><img className="clickableImage" src="./Education.jpg" alt="" /></a>
                        <div className="hoverText">EDUCATION</div>
                    </motion.div>
                    Click here to learn about what courses I have completed in my journey, from GCSEs to University level qualifications
                </motion.section>
                <motion.section className="section industry-block" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1}}>
                    Click here to see what work I have done within the industry and what industry level skills I have used
                    <motion.div className="clickableImageContainer" whileHover={{borderRadius: "10%", scale: 0.9 }} whileTap={{scale: 0.8}}>
                        <a href="/webDev/#/experience/industry"><img className="clickableImage" src="./Industry.jpg" alt="" /></a>  
                        <div className="hoverText">INDUSTRY</div>
                    </motion.div>
                </ motion.section>
            </motion.div>
        <Footer />
        </>
        );
    }
    
    export default Services;