import styles from '../css/page-css/Services.module.css';

function Services() {
  return (
    <div className={styles.background}>
        <div className={styles.mainBody}>
        <h1>SERVICES</h1>
        <section className={styles.sectionBlue}>
            <div className={styles.clickableImageContainer}>
                <a href="/services/implementations"><img className={styles.clickableImage} src="../src/assets/Implementations Image.png" alt="" /></a>       
            </div>
            <div className={styles.clickableImageContainer}>
                <a href="/services/trainingandmentoring"><img className={styles.clickableImage} src="../src/assets/Training & Mentoring.png" alt="" /></a>  
            </div>
        </section>
        </div>
    </div>
    );
}

export default Services;