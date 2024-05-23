import NavBar from '../components/NavBar';
import ContactForm from '../components/ContactForm';
import ClickableInfoCard from '../components/ClickableInfoCard';
import Map from '../components/Map';
import Footer from '../components/Footer';
import '../css/page-css/Pages.css';
import { motion } from 'framer-motion';

function ContactMe() {
  	document.title = 'Contact Me';
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
      <div className="background">
        <div className="mainBody">
          <motion.h1 className="pageHeader" {...revealAnimation}>CONTACT ME</motion.h1>
          <section className="section">
            <ContactForm />
          </section>
          <section className='section2'>
			<h3>Socials</h3>
            <div className='cards'>
	            <ClickableInfoCard image="./LinkedInLogo.jpg" title="LinkedIn" link="https://uk.linkedin.com/in/josh-ford-1112a925b?trk=people-guest_people_search-card"/>
	            <ClickableInfoCard image="./GithubLogo.png" title="GitHub" link="https://github.com/joshhhff"/>
            </div>
          </section>
          <section className='section'>
            <Map />
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ContactMe;