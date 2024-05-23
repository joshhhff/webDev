import '../css/page-css/Pages.css';
import '../css/page-css/MobilePages.css'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ScrollingLogos from '../components/ScrollingLogos';
import { motion } from 'framer-motion';

function Hobbies() {

    document.title = 'Learn Programming';
    window.scrollTo({top: 0, left: 0, behavior: 'instant'});    //react-router-dom remembers scroll position so this elimantes that

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
                <motion.h1 className="pageHeader" {...revealAnimation}>HOBBIES</motion.h1>
                    <div className="hobbies">
                        <div className="hobby">
                            <h1 className="hobbiesHeader">Pool & Snooker</h1>
                            <div className="hobbyContent">
                                <p className="hobbyInfo">I enjoy playing pool & snooker several times during the week. I primarily play pool, and I tend to play at my local pub.<br/><br/>Sometimes I do also attend a sports hall where I will play snooker as well</p>
                                <img src="./Pool.jpg" alt="" style={{ width: '200px', borderRadius: '10px'}}/>
                            </div>
                        </div>
                        <div className="hobby">
                            <h1 className="hobbiesHeader">Programming</h1>
                            <div className="hobbyContent">
                                <p className="hobbyInfo">Even though it is my job, I thoroughly enjoy programming. I've always liked the idea of being able to create piece of software or design websites.<br/><br/>It first started by simply using Scatch when I was young, understanding the very simple syntax. I then went on to learn my first programming language which was Python!</p>
                                <ScrollingLogos width=""/>
                            </div>
                        </div>
                    </div>
                    <div className="hobbies">
                        <div className="hobby">
                            <h1 className="hobbiesHeader">Gaming</h1>
                            <div className="hobbyContent">
                                <p className="hobbyInfo">Though I don't game as much as I used to, I do still enjoy playing some games every now and again. I enjoy playing Grand Theft Auto, Call of Duty, and the Tom Clancy's games.<br/><br/>Fun fact, during lockdown, I re-created the popular game "Among Us" in Minecraft. Having a fully functioning game where players can complete tasks, randomly assigned roles, report bodies, vote people out all by using command blocks! (This weridly enough was probably my first experience in Game Development)</p>
                                <img src="./Gaming.png" alt="" style={{ width: '200px', borderRadius: '10px'}}/>
                            </div>
                        </div>
                        <div className="hobby">
                            <h1 className="hobbiesHeader">Exercising</h1>
                            <div className="hobbyContent">
                                <p className="hobbyInfo">I really enjoy keeping in shape, I go to the gym 5-6 days a week where I primarily take on a weightlifting style of training.<br/><br/>I also enjoy running, although I don't do this nearly as often as weightlifting. I have a sub 25 minute 5K time which I like to think is a decent time to say I primarily lift weights!</p>
                                <img src="./Gaming.png" alt="" style={{ width: '200px', borderRadius: '10px'}}/>
                            </div>
                        </div>
                    </div>
            </div>
            <Footer />
        </>
    );
}

export default Hobbies;