import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SubNavBar from '../components/SubNavBar';
import BlueCard from '../components/WhiteCard';
import { motion } from 'framer-motion';
import '../css/page-css/Pages.css';

function Industry() {
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
      <SubNavBar 
        numOfTabs={2}
        tabTitles='EDUCATION,INDUSTRY'
        links='/experience/education,/experience/industry'
      />
      <div className="background">
            <div className="mainBody" style={{ paddingTop: '70px'}}>
                <h1 className="pageHeader">INDUSTRY</h1>
                <section className="section">
                    <motion.div className="educationList" {...revealAnimation}>
                        <li><span className="listHeader">GoLive Experts (2023 - )</span><br/>Junior NetSuite Developer</li>
                        <li><span className="listHeader">Experienced in using APIs</span><br/>I have experience in using many APIs, including REST APIs & GraphQL APIs</li>
                    </motion.div>
                    <motion.div className="img cropped" {...revealAnimation}>
                    <img src="./Industry.png" />
                    </motion.div>
                </section>
                <section className="horizontalCards">
                    <BlueCard title="Education" description="Click here to learn about my education" hasButton={true} buttonHasArrow={true} link="/webDev/#/experience/education"/>
                    <BlueCard title="REST APIs" description="Experienced in using this type of API for GET, POST, PUT, DELETE methods" buttonHasArrow={false} hasButton={false} link=""/>
                    <BlueCard title="GraphQL APIs" description="Experienced in using this type of API for Queries and Mutations" hasButton={false} buttonHasArrow={false} link=""/>
                </section>
            </div>
        </div>
    <Footer />
    </>
    );
}

export default Industry;