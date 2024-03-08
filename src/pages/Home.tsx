import '../css/page-css/Pages.css';
import Button from '../components/Button';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
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
                <h4>I have experience in several programming languages, mainly including JavaScript, Java & Python!</h4>
                <Button
                    link="/webDev/#/aboutus"
                    text="About Me" 
                    isSubmit={false}
                    arrow={true}
                />
            </motion.div>
            <motion.img className="home-page-image" src='./HomePageImage.png' initial={{ opacity: 0, translateX: +100 }} whileInView={{ opacity: 1, translateX: 0 }} transition={{ duration: 1}} viewport={{ once: true }} />
        </motion.section>

    </div>
    <Footer />
    </>
);
}

export default Home;