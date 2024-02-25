import SubNavBar from '../components/SubNavBar';
import BlueCard from '../components/BlueCard';
import styles from '../css/page-css/Services.module.css';

function ServicesTrainingAndMentoring() {
  return (
    <>
      <SubNavBar 
        numOfTabs={2}
        tabTitles='IMPLEMENTATION,TRAINING & MENTORING'
        links='/services/implementations,/services/trainingandmentoring'
      />
      <div className={styles.background}>
        <div className={styles.mainBody}>

          <h1>TRAINING & MENTORING</h1>
          <section className={styles.sectionBlue}>
            <div className={styles.img}>
              <img src="./Training.png" alt="" />
            </div>
            <div>
            <p>We appreciate that the implementation of NetSuite solutions and new approaches to CRM and ERP can generate the need for new training. Indeed a key success factor is making sure the team is well trained to take advantage of the NetSuite solution.

              <br/><br />Our training is always role-based and focused on the end user whether we are providing on-site training or online training.

              <br/><br />We can develop tailored training materials and deliver training in groups or 1-2-1 to ensure that your team fully understands the best way to use your existing and new software.

              <br /><br />Equally we appreciate that often staff are remote from your business headquarters and we have a proven track record in delivering training to remote users using our online conferencing facility.
              
              <br /><br />We offer the following types of training which can be tailored to your specific requirements:
              <li>Sales & Marketing</li>
              <li>Finance</li>
              <li>Operations - order fulfillment, purchasing, inventory management</li>
              <li>Reporting</li>
              <li>Administrator</li>
              <br /><br />We would also emphasise it is never too late to train your team so if you have been using your NetSuite system for some time and your team needs some refresher training, or you have a new staff member on board we can help tailor a course that’s right for you.

              <br /><br />We regularly find that it is simply training that is required to ensure your software is properly utilised to help your business succeed.
              </p>
              </div>
            </section>

            <hr />
            <div className={styles.cards}>
              <BlueCard 
                title="TRAINING"
                description="Our professionally trained consultants will take you through detailed walkthroughs of the different aspects of NetSuite"
                hasButton={false}
                link=""
              />
              <BlueCard 
                title="TRAINING"
                description="Our professionally trained consultants will take you through detailed walkthroughs of the different aspects of NetSuite"
                hasButton={false}
                link=""
              />
              <BlueCard 
                title="TRAINING"
                description="Our professionally trained consultants will take you through detailed walkthroughs of the different aspects of NetSuite"
                hasButton={false}
                link=""
              />
              <BlueCard 
                title="TRAINING"
                description="Our professionally trained consultants will take you through detailed walkthroughs of the different aspects of NetSuite"
                hasButton={false}
                link=""
              />
            </div>
        </div>
    </div>
    </>
    );
}

export default ServicesTrainingAndMentoring;