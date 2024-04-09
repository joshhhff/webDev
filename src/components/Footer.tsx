import { motion } from 'framer-motion';
import '../css/component-css/Footer.css';

function Footer() {

    const location = window.location.href;

    let motionProps
    if (location.endsWith('/')) {
        console.log('on home page');

        motionProps = {
            initial: { translateX: -100},
            whileInView: { translateX: 0},
            transition: { duration: 1 },
            viewport: {once: true},
        }
    }

    return (
        <footer className="footer">
            <motion.div {...motionProps}>
            <p>
                CO456 Web Development - Joshua Ford: 100181709<br/>Built using React
            </p>
            <motion.div className="spinning-image-container" animate={{ rotate: 360}} transition={{ duration: 6, repeat: Infinity, ease: 'linear' }} viewport={{ once: true }}>
                <img className="spinning-image" src="./React-icon.png" alt="" />
            </motion.div>
            </motion.div>
        </footer>
    )
}

export default Footer;