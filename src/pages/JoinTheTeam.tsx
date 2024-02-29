import NavBar from '../components/NavBar';
import styles from '../css/page-css/JoinTheTeam.module.css';

function JoinTheTeam() {

    return (
        <>
        <NavBar animate={false} />
        <div className={styles.background}>
            <div className={styles.mainBody}>
            <h1>JOIN THE TEAM</h1>
            <section className={styles.sectionBlue}>
                Test
            </section>
            </div>
        </div>
        </>
    )
}

export default JoinTheTeam;