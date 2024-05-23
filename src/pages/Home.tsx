import '../css/page-css/Pages.css';
import '../css/page-css/MobilePages.css'
import Button from '../components/Button';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import InfoCard from '../components/InfoCard';
import BlueCard from '../components/WhiteCard';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function Home() {
    const url = window.location.href;

    const [typedTitle, setTypedTitle] = useState('');
    const [visibleButton, setVisibleButton] = useState(false);

    //typingTimer and i set outside of useEffect hook - i is compared against text length
    let typingTimer: number;
    let i: number;

    function typeText(text: string, setState: React.Dispatch<React.SetStateAction<string>>, speed: number, isTitle: boolean, isMessage: boolean) {
        const title = document.getElementById('title');

        if (i < text.length) {
            if (!url.includes('localhost')) {
                i === 1 ? setState(prevText => prevText + text.charAt(1)) : null;   //for some unknown reason prod skips second index of strings
            }
            setState(prevText => prevText + text.charAt(i));
            i++;
            typingTimer = setTimeout(() => typeText(text, setState, speed, isTitle, isMessage), speed); //call the function again if all of text has not been "typed"
        } else {
            title && isTitle ? title.style.borderRight = 'none' : null; //remove border from main title
            i = 0; // Reset the index for next typing
            setVisibleButton(true)
        }
    }

    useEffect(() => {
        document.title = 'Home';
        window.scrollTo({top: 0, left: 0, behavior: 'instant'});    //react-router-dom remembers scroll position so this elimantes that
        const title = "Hi, I'm Josh!";
    
        i = 0;
        typeText(title, setTypedTitle, 100, true, false);   //pass in title string, typedTitle state, type speed, isTitle = true, isMessage = false
    
        // Cleanup function
        return () => {
            clearTimeout(typingTimer);
        };
    }, []);

    return (
        <>
        <NavBar />
        <div className="mainBody">
            <motion.section className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1}} viewport={{ once: true }}>
                <div className="homePageContent">
                    <div className="textInfo">
                        <h1 className="homePageHeader" id="title">{typedTitle}</h1>
                        <h3 className="homePageHeader" id="message"><Typewriter options={{ strings: [ "Computer Science student", "Junior Software Developer", "Junior NetSuite Developer", "Experienced in JavaScript", "Experienced in TypeScript", "Partial experience in Java", "Partial experience in C# & C++"], autoStart: true, delay: 50, loop: true, deleteSpeed: 50}}/></h3>
                    </div>
                    {visibleButton && (
                        <motion.div className="" initial={{ opacity: 0, translateY: -100 }} whileInView={{ opacity: 1, translateY: 0 }} viewport={{ once: true }}>
                            <Button
                            link="/webDev/#/experience"
                            text="About Me" 
                            isSubmit={false}
                            arrow={true}
                            />
                        </motion.div>
                    )} 
                </div>
                <div>
                    <motion.img className="home-page-image" src='./Monitor (Tilted3D1).png' title="© Copyright Josh Ford 2024" initial={{ opacity: 0, translateX: +100 }} whileInView={{ opacity: 1, translateX: 0 }} viewport={{ once: true }} />
                </div>
            </motion.section>
            <motion.section className="section2">
                    <div className='cards'>
                        <div className="projects" style={{ width: '60%'}}>
                            <motion.h4 initial={{ opacity: 0, translateY: +100 }} whileInView={{ opacity: 1, translateY: 0 }} viewport={{ once: true }} style={{ textAlign: 'center'}}>RECENT PROJECTS</motion.h4>
                            <div className="projectCards" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                                <InfoCard title="Weather App" image="./WeatherProject.png"/>
                                <InfoCard title="System Integrations" image="./System Integration.jpg"/>
                                <InfoCard title="WMS Customisations" image="./WMS.png"/>
                            </div>
                        </div>
                        <div style={{ alignContent: 'center'}}><BlueCard title="My Hobbies" description="Learn more about me and what I like doing in my spare time" hasButton={true} link="/webDev/#/hobbies" buttonHasArrow={true} /></div>
                    </div>
            </motion.section>
        </div>
        <Footer />
        </>
    );
}

export default Home;