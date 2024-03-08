import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SubNavBar from '../components/SubNavBar';
import BlueCard from '../components/BlueCard';
import '../css/page-css/Pages.css';

function ServicesImplementations() {
    return (
        <>
        <NavBar />
        <SubNavBar 
            numOfTabs={2}
            tabTitles='EDUCATION,INDUSTRY'
            links='/experience/education,/experience/industry'
        />

        <div className="background">
            <div className="mainBody">
                <h1 className="pageHeader">IMPLEMENTATION</h1>
                <section className="sectionBlue">
                    <div className="img">
                    <img src="./Implementation.png" />
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
                
                <div className="cards">
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
                <div className="cards">
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
        <Footer />
        </>
    );
}

export default ServicesImplementations;