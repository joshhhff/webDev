import { ScrollReveal } from 'reveal-on-scroll-react';
import '../css/component-css/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <ScrollReveal.div animation="slide-in-left">
            <p>
                CO456 Web Development - Joshua Ford: 100181709<br/>Built using React
            </p>
            <div className="image">
                <a href="https://react.dev/">
                    <img src="./FooterImage.png" alt="" />
                </a>
            </div>
            </ScrollReveal.div>
        </footer>
    )
}

export default Footer;