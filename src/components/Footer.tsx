import { motion } from 'framer-motion';
import '../css/component-css/Footer.css';

function Footer() {

    return (
        <footer className="footer">
            <motion.div initial={{ opacity: 0, translateX: -100 }} whileInView={{ opacity: 1, translateX: 0 }} transition={{ duration: 1}} viewport={{ once: true}}>
            <p>
                CO456 Web Development - Joshua Ford: 100181709<br/>Built using React
            </p>
            <div className="image">
                <a href="https://react.dev/">
                    <img src="./FooterImage.png" alt="" />
                </a>
            </div>
            </motion.div>
        </footer>
    )
}

export default Footer;