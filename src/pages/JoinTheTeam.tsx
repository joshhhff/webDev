import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../css/page-css/Pages.css'
import styles from '../css/page-css/Pages.module.css';

function JoinTheTeam() {

    return (
        <>
        <NavBar />
        <div className="background">
            <div className={styles.mainBody}>
            <h1 className={styles.pageHeader}>JOIN THE TEAM</h1>
            <section className="sectionBlue">
                Test
            </section>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default JoinTheTeam;