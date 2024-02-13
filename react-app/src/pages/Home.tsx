import '../css/Home.css';
import InfoCard from '../components/InfoCard';

function Home() {
  return (
    <div className="mainBody">
        <section className="section-blue">
            <img src="src/assets/NetSuiteImage.jpg" />
            <div className="text-info">
                <h1>WE ARE<br/>GOLIVE EXPERTS</h1>
                <h3>test</h3>
            </div>
        </section>
        
        <section className="section-green">
            <InfoCard
                title="NetSuite"
                image="src/assets/NetSuiteLogo.jpg"
                description="NetSuite is the world's #1 Cloud ERP System. Keep track of Invetory, Financials and more!"
            />
            <InfoCard
                title="Celigo"
                image="src/assets/CeligoLogo.jpg" 
                description="Offers seamless integrations between various different applications in your organisation."
            />

        </section>
    </div>
);
}

export default Home;