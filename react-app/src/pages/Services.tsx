import Button from '../components/Button';
import styles from '../css/page-css/Services.module.css';

function Services() {
  return (
    <div className={styles.background}>
        <div className={styles.mainBody}>
        <h1>SERVICES</h1>
        <section className={styles.sectionBlue}>
            <Button
            link="/services/implementations"
            text="Implementations"
            isSubmit={false}
            />
        </section>
        </div>
    </div>
    );
}

export default Services;