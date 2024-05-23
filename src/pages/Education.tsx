import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SubNavBar from '../components/SubNavBar';
import BlueCard from '../components/WhiteCard';
import '../css/page-css/Pages.css';

function Education() {
    return (
        <>
        <NavBar />
        <SubNavBar 
            numOfTabs={2}
            tabTitles='EDUCATION,INDUSTRY'
            links='/experience/education,/experience/industry'
        />

        <div className="background">
            <div className="mainBody" style={{ paddingTop: '70px'}}>
                <h1 className="pageHeader">EDUCATION</h1>
                <section className="section">
                    <div className="img">
                    <img src="./Education.png" />
                    </div>
                    <div className="educationList">
                        <li><span className="listHeader">Blessed Trinity Roman Catholic College (2016 - 2021)</span><br/>Computer Science - 6 (High C - Low B)</li>
                        <li><span className="listHeader">Burnley College (2021-2023)</span><br/>Level 3 National Extended Diploma in Computing - DDD (Triple Distinction)</li>
                        <li><span className="listHeader">Burnley College / Buckinghamshire New University (2023 - )</span><br/>Degree Apprenticeship in Digital, Technical Solutions</li>
                    </div>
                </section>
                <section className="horizontalCards">
                    <BlueCard title="BTEC" description="2 year course where I came out with a final grade of DDD (Equivalent to 3 As at A Level)" hasButton={false} buttonHasArrow={false} link=""/>
                    <BlueCard title="University" description="Nearly finished my first of 3 years" hasButton={false} buttonHasArrow={false} link=""/>
                    <BlueCard title="Industry" description="Click here to learn about my experience in the industry" hasButton={true} link="/webDev/#/experience/industry" buttonHasArrow={true}/>
                </section>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Education;