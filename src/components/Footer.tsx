import { ScrollReveal } from 'reveal-on-scroll-react';
import '../css/component-css/Footer.css';

function Footer() {
    return (
        <ScrollReveal.div animation="slide-in-bottom">
        <footer className="footer">
            <p>
                CO456 Web Development - Joshua Ford: 100181709<br/>Built using React
            </p>
            <div className="image">
                <a href="https://react.dev/">
                    <img src="./ReactLogo.png" alt="" />
                </a>
            </div>
        </footer>
        </ScrollReveal.div>
    )
}

export default Footer;