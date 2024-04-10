import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import WeatherAPICall from '../components/WeatherAPICall';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../css/page-css/Pages.css';

function Services() {
    const [vw, setVw] = useState(document.documentElement.clientWidth);
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'instant'});    //react-router-dom remembers scroll position so this elimantes that
        document.title = 'Experience';
        const handleResize = () => {
            const viewportWidth = document.documentElement.clientWidth;
            setVw(viewportWidth);
            viewportWidth <= 680 ? setVisible1(true) : setVisible1(false);
            viewportWidth <= 680 ? setVisible2(true) : setVisible2(false);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

    }, []);

    const viewportWidth = document.documentElement.clientWidth;

    let revealAnimation = {
        initial: viewportWidth <= 680 ? { opacity: 0, translateX: +100 } : { opacity: 0, translateY: +100 },
        whileInView: viewportWidth <= 680 ? { opacity: 1, translateX: 0} : { opacity: 1, translateY: 0},
        viewport: { once: true },
    }

    return (
        <>
            <NavBar />
            <div className="mainBody">
                <motion.h1 className="pageHeader" {...revealAnimation}>EXPERIENCE</motion.h1>
                <div className="clickableImages">
                    <motion.section className="section image-link-block" initial={{ opacity: 0, translateX: -100 }} whileInView={{ opacity: 1, translateX: 0 }} viewport={{ once: true }}>
                        {visible1 && (<motion.div className="hoverText" initial={{ translateY: +100 }} animate={{ translateY: 0 }} transition={{ ease: 'easeInOut' }} viewport={{ once: true }}>EDUCATION</motion.div>)}
                        {!visible1 && (<div className="hoverText invisible">&nbsp;</div>)}
                        <motion.div className="clickableImageContainer" whileHover={{borderRadius: "10%" }} whileTap={{ scale: 0.8 }} onTapStart={() => setVisible1(false)} onTapCancel={() => setVisible1(true)} onHoverStart={vw > 680 ? () => setVisible1(true) : undefined} onHoverEnd={vw > 680 ? () => setVisible1(false) : undefined}>
                            <a href="/webDev/#/experience/education"><img className="clickableImage" src="./Education.jpg" alt="" /></a>
                        </motion.div>
                    </motion.section>
                    <motion.section className="section image-link-block" initial={{ opacity: 0, translateX: +100 }} whileInView={{ opacity: 1, translateX: 0 }} viewport={{ once: true }}>
                        {visible2 && (<motion.div className="hoverText" initial={{ translateY: +100 }} animate={{ translateY: 0 }} transition={{ ease: 'easeInOut' }} viewport={{ once: true }}>INDUSTRY</motion.div>)}
                        {!visible2 && (<div className="hoverText invisible">&nbsp;</div>)}
                        <motion.div className="clickableImageContainer" whileHover={{borderRadius: "10%" }} whileTap={{scale: 0.8}} onTapStart={() => setVisible2(false)} onTapCancel={() => setVisible2(true)} onHoverStart={vw > 680 ? () => setVisible2(true) : undefined} onHoverEnd={vw > 680 ? () => setVisible2(false) : undefined}>
                            <a href="/webDev/#/experience/industry"><img className="clickableImage" src="./Industry.jpg" alt="" /></a>  
                        </motion.div>
                    </ motion.section>
                </div>
                <section className='section2'>
                <motion.h1 {...revealAnimation} className="subPageHeader">Programming Languages</motion.h1>
                    <motion.table className='programmingProgress' {...revealAnimation}>
                        <motion.tr {...revealAnimation}>
                            <td><img src="./JavaScript-logo.png" alt="" /></td>
                            <td><progress id="file" value="75" max="100" /></td>
                            <td>JavaScript</td>
                        </motion.tr>
                        <motion.tr {...revealAnimation}>
                            <td><img src="./HTML-Logo.jpg" alt="" /></td>
                            <td><progress id="file" value="75" max="100" /></td>
                            <td>HTML</td>
                        </motion.tr>
                        <motion.tr {...revealAnimation}>
                            <td><img src="./CSS-logo.jpg" alt="" /></td>
                            <td><progress id="file" value="75" max="100" /></td>
                            <td>CSS</td>
                        </motion.tr>
                        <motion.tr {...revealAnimation}>
                            <td><img src="./TypeScript-logo.png" alt="" /></td>
                            <td><progress id="file" value="65" max="100" /></td>
                            <td>TypeScript</td>
                        </motion.tr>
                        <motion.tr {...revealAnimation}>
                            <td><img src="./Python-logo.png" alt="" /></td>
                            <td><progress id="file" value="60" max="100" /></td>
                            <td>Python</td>
                        </motion.tr>
                        <motion.tr {...revealAnimation}>
                            <td><img src="./Java-logo.png" alt="" /></td>
                            <td><progress id="file" value="40" max="100" /></td>
                            <td>Java</td>
                        </motion.tr>
                        <motion.tr {...revealAnimation}>
                            <td><img src="./Csharp-logo.jpg" alt="" /></td>
                            <td><progress id="file" value="35" max="100" /></td>
                            <td>C#</td>
                        </motion.tr>
                        <motion.tr {...revealAnimation}>
                            <td><img src="./Cplusplus-logo.jpg" alt="" /></td>
                            <td><progress id="file" value="10" max="100" /></td>
                            <td>C++</td>
                        </motion.tr>
                    </motion.table>
                </section>
                <section className='section3'>
                    <motion.h1 {...revealAnimation} className="subPageHeader">Skills</motion.h1>
                    <WeatherAPICall />
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Services;
