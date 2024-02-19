import SubNavBar from '../components/SubNavBar';
import BlueCard from '../components/BlueCard';
import styles from '../css/page-css/Services.module.css';   //local css

function ServicesImplementations() {
    return (
        <>
        <SubNavBar 
            numOfTabs={2}
            tabTitles='IMPLEMENTATION,TRAINING & MENTORING'
            links='/services/implementations,/services/trainingandmentoring'
        />

        <div className={styles.background}>
            <div className={styles.mainBody}>
                <h1>IMPLEMENTATION</h1>
                <section className={styles.sectionBlue}>
                    <div className={styles.img}>
                    <img src="../src/assets/Implementation.png" />
                    </div>
                    <div>
                        <p>At GoLive Experts, there are many different stages of Implementation. These could include:</p>
                        <li>Installation</li>
                        <li>Configuration</li>
                        <li>Screen & Print Layouts, Searches & Reports</li>
                        <li>Training</li>
                        <li>User Acceptance Training (UAT)</li>
                        <li>Go-Live</li>
                    </div>
                </section>

                <hr />
                
                <div className={styles.cards}>
                    <BlueCard 
                        title="INSTALLATION"
                        description="In general, so software installation is needed, as NetSuite is a cloud based service"
                        hasButton={false}
                        link=""
                    />
                    <BlueCard 
                        title="CONFIGURATION"
                        description="Configuring for your organisational needs. Setting up users, roles, systems and more"
                        hasButton={true}
                        link=""
                    />
                    <BlueCard 
                        title="OPTIMISATION"
                        description="Setting up your dashboard, setting up custom PDF documents, creating saved searches and reports"
                        hasButton={true}
                        link=""
                    />
                </div>
                <div className={styles.cards}>
                    <BlueCard 
                        title="TRAINING"
                        description="Training your team on best practices, how to use systems and how to manage your tasks in NetSuite"
                        hasButton={true}
                        link="/services/trainingandmentoring"
                    />
                    <BlueCard 
                        title="UAT"
                        description="After training, we hand the system over to you and your team for testing to ensure it is fit for purpose"
                        hasButton={true}
                        link=""
                    />
                    <BlueCard 
                        title="GO-LIVE"
                        description="Once your system is live, our consultants are ready to assist you in any unseen issues"
                        hasButton={true}
                        link=""
                    />
                </div>
            </div>
        </div>
        </>
    );
}

export default ServicesImplementations;