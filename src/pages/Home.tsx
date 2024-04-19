import '../css/page-css/Pages.css';
import '../css/page-css/MobilePages.css'
import Button from '../components/Button';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import InfoCard from '../components/InfoCard';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function Home() {

    const [typedTitle, setTypedTitle] = useState('');
    const [typedMessage, setTypedMessage] = useState('');
    const [visibleButton, setVisibleButton] = useState(false);

    //typingTimer and i set outside of useEffect hook - i is compared against text length
    let typingTimer: number;
    let i: number;

    function typeText(text: string, setState: React.Dispatch<React.SetStateAction<string>>, speed: number, isTitle: boolean, isMessage: boolean) {
        const title = document.getElementById('title');
        const message = document.getElementById('message');

        console.log(text)
        if (i < text.length) {
            console.log('current i value', i)
            console.log('adding character', text.charAt(i))

            i === 1 ? setState(prevText => prevText + text.charAt(1)) : null;

            setState(prevText => prevText + text.charAt(i));
            
            console.log(title)
            i++;
            typingTimer = setTimeout(() => typeText(text, setState, speed, isTitle, isMessage), speed); //call the function again if all of text has not been "typed"
        } else {
            title && isTitle ? title.style.borderRight = 'none' : null; //remove border from main title
            if (message && isMessage) {
                message.style.borderRight = 'none';
                message.style.width = '42vw';  //change the fit-content which allows border to follow letters
                flashingCursor();
            }
            i = 0; // Reset the index for next typing
        }
    }

    function flashingCursor() {
        let visible = true;
        setVisibleButton(true);

        setInterval(() => {
            if (visible) {
                setTypedMessage(typedMessage => typedMessage + '|');
            } else {
                setTypedMessage(typedMessage => typedMessage.slice(0, -1));
            }
            visible = !visible;
        }, 500)
    }

    useEffect(() => {
        document.title = 'Home';
        const title = "Hi, I'm Josh!";
        const message = "Computer Science student - Software Developer";
    
        i = 0;
        typeText(title, setTypedTitle, 150, true, false);   //pass in title string, typedTitle state, type speed, isTitle = true, isMessage = false
    
        setTimeout(() => {
            clearTimeout(typingTimer); // Clear the title timer before starting the message
            i = 0; // Reset i for typing message
            typeText(message, setTypedMessage, 40, false, true);    //pass in message string, typedMessage state, type speed, isTitle = false, isMessage = true
        }, (title.length + 5) * 150);
    
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
                        <h3 className="homePageHeader" id="message">{typedMessage}</h3>
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
                <motion.h4 initial={{ opacity: 0, translateY: +100 }} whileInView={{ opacity: 1, translateY: 0 }} viewport={{ once: true }}>RECENT PROJECTS</motion.h4>
                    <div className='cards'>
                        <InfoCard title="Weather App" image="./WeatherProject.png"/>
                        <InfoCard title="System Integrations" image="./System Integration.jpg"/>
                        <InfoCard title="WMS Customisations" image="./WMS.png"/>
                    </div>
            </motion.section>
        </div>
        <Footer />
        </>
    );
}

export default Home;