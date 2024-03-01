import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import styles from '../css/page-css/Pages.module.css';

function ContactUs() {

    return (
        <>
        <NavBar />
        <div className="background">
            <div className={styles.mainBody}>
            <h1 className={styles.pageHeader}>CONTACT US</h1>
            <section className="sectionBlue">
            </section>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default ContactUs;