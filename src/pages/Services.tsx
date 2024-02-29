import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import '../css/page-css/Pages.css';

function Services() {
  return (
    <>
    <NavBar animate={false} />
    <div className="background">
        <div className="mainBody">
        <h1 className="pageHeader">SERVICES</h1>
        <motion.section className="sectionBlue" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1}}>
            <motion.div className="clickableImageContainer" whileHover={{borderRadius: "3%"}} whileTap={{scale: 0.9}}>
                <a href="/webDev/#/services/implementations"><img className="clickableImage" src="./Implementations Image.png" alt="" /></a>       
            </motion.div>
            <motion.div className="clickableImageContainer" whileHover={{borderRadius: "3%"}} whileTap={{scale: 0.9}}>
                <a href="/webDev/#/services/trainingandmentoring"><img className="clickableImage" src="./Training & Mentoring.png" alt="" /></a>  
            </motion.div>
        </motion.section>
        </div>
    </div>
    </>
    );
}

export default Services;