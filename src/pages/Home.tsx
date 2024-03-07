import '../css/page-css/Pages.css';
import Button from '../components/Button';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import InfoCard from '../components/InfoCard';
import { motion } from 'framer-motion';

function Home() {
  return (
    <>
    <NavBar />
    <div className="mainBody">
        <motion.section className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1}} viewport={{ once: true }}>
            <motion.div className="textInfo" initial={{ opacity: 0, translateX: -100 }} whileInView={{ opacity: 1, translateX: 0 }} transition={{ duration: 1}} viewport={{ once: true }}>
                <h1 className="homePageHeader">Hi, I'm Josh!</h1>
                <h3 className="homePageHeader">First year Computer Science student - Software Developer</h3>
                <Button
                    link="/webDev/#/aboutus"
                    text="About Me" 
                    isSubmit={false}
                />
            </motion.div>
            <motion.img className="home-page-image" src='./HomePageImage.png' initial={{ opacity: 0, translateX: +100 }} whileInView={{ opacity: 1, translateX: 0 }} transition={{ duration: 1}} viewport={{ once: true }} />
        </motion.section>

        <motion.hr initial={{ opacity: 0, translateX: -500 }} whileInView={{ opacity: 1, translateX: 0}} transition={{ duration: 1}} viewport={{ once: true }}/>

        <motion.section className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1}} viewport={{ once: true }}>
            <motion.div className="programming-languages" initial={{ opacity: 0, translateY: +500 }} whileInView={{ opacity: 1, translateY: 0}} transition={{ duration: 1}} viewport={{ once: true }}>
                <InfoCard
                    title='JavaScript'
                    image='./JavaScript-logo.png'
                />
                <InfoCard
                    title='TypeScript'
                    image='./TypeScript-logo.png'
                />
                <InfoCard
                    title='JavaScript'
                    image='./JavaScript-logo.png'
                />
            </motion.div>
        </motion.section>
    </div>
    <Footer />
    </>
);
}

export default Home;