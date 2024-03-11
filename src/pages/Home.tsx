import '../css/page-css/Pages.css';
import '../css/page-css/MobilePages.css'
import Button from '../components/Button';
import InfoCard from '../components/InfoCard';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

function Home() {
    const viewportWidth = document.documentElement.clientWidth;

    let revealAnimation = {
        initial: viewportWidth <= 680 ? { opacity: 0, translateX: +100 } : { opacity: 0, translateY: +100 },
        whileInView: viewportWidth <= 680 ? { opacity: 1, translateX: 0} : { opacity: 1, translateY: 0},
        transition: { duration: 1},
        viewport: { once: true },
    }

    return (
        <>
        <NavBar />
        <div className="mainBody">
            <motion.section className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1}} viewport={{ once: true }}>
                <motion.div className="textInfo" initial={{ opacity: 0, translateX: -100 }} whileInView={{ opacity: 1, translateX: 0 }} transition={{ duration: 1}} viewport={{ once: true }}>
                    <h1 className="homePageHeader">Hi, I'm Josh!</h1>
                    <h3 className="homePageHeader">Computer Science student - Software Developer</h3>
                    <h4 className="homePageHeader">I have experience in several programming languages, mainly including JavaScript, Java & Python!</h4>
                    <Button
                        link="/webDev/#/aboutus"
                        text="About Me" 
                        isSubmit={false}
                        arrow={true}
                    />
                </motion.div>
                <motion.img className="home-page-image" src='./HomePageImage.png' initial={{ opacity: 0, translateX: +100 }} whileInView={{ opacity: 1, translateX: 0 }} transition={{ duration: 1}} viewport={{ once: true }} />
            </motion.section>

            <hr />

            <motion.h1 {...revealAnimation} className="subPageHeader">Programming Languages</motion.h1>
            <section className="section">
                <motion.div className="programming-languages" {...viewportWidth > 680 ? revealAnimation : ''}>
                    <motion.div className="programming-languages" {...viewportWidth <= 680 ? revealAnimation : ''}>
                        <InfoCard
                            title='JavaScript'
                            image='./JavaScript-logo.png'
                        />
                    </motion.div>
                    <motion.div className="programming-languages" {...viewportWidth <= 680 ? revealAnimation : ''}>
                        <InfoCard
                            title='TypeScript'
                            image='./TypeScript-logo.png'
                        />
                    </motion.div>
                    <motion.div className="programming-languages" {...viewportWidth <= 680 ? revealAnimation : ''}>
                        <InfoCard
                            title='Java'
                            image='./Java-logo.png'
                        />
                    </motion.div>
                </motion.div>
            </section>
        </div>
        <Footer />
        </>
    );
}

export default Home;