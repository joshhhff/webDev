import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SubNavBar from '../components/SubNavBar';
import BlueCard from '../components/BlueCard';
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
            <div className="mainBody">
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

                <hr />
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Education;