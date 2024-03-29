import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../css/page-css/Pages.css'

function AboutUs() {
  return (
    <>
      <NavBar />
      <div className="background">
        <div className="mainBody">
          <h1 className="pageHeader">CONTACT ME</h1>
          <section className="sectionBlue">
            <p>GoLive Experts is an Oracle alliance partner specialising in  NetSuite implementation.  The team who created GoLive had extensive knowledge not only as NetSuite consultants, but also as clients who selected and operated NetSuite in real businesses.  Our  goal  is to establish a customer focused centre of excellence for NetSuite professional services. 
              <br /><br />As business operators outside the world of IT, we understand that your investment in a new system is ultimately about the bottom line.  With years of NetSuite skill and experience in our team, our aim is to help our clients by providing the full end to end project solution with the functional and technical expertise to help you every step of the way. </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutUs;