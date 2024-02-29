import NavBar from '../components/NavBar';
import styles from '../css/page-css/ContactUs.module.css';

function ContactUs() {

    return (
        <>
        <NavBar animate={false} />
        <div className={styles.background}>
            <div className={styles.mainBody}>
            <h1>CONTACT US</h1>
            <section className={styles.sectionBlue}>
            </section>
            </div>
        </div>
        </>
    )
}

export default ContactUs;