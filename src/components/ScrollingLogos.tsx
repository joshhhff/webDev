import styles from '../css/component-css/ScrollingLogos.module.css';
import { motion } from 'framer-motion';

interface ScrollingLogosProps {
    width: string,
}

function ScrollingLogos({width}: ScrollingLogosProps) {

    const viewportWidth = document.documentElement.clientWidth;

    let revealAnimation = {
        initial: viewportWidth <= 680 ? { opacity: 0, translateX: +100 } : { opacity: 0, translateY: +100 },
        whileInView: viewportWidth <= 680 ? { opacity: 1, translateX: 0} : { opacity: 1, translateY: 0},
        viewport: { once: true },
        transition: { duration: 0.5 }
    }

    return (
        <>
        <motion.div className={styles.outerBorder} {...revealAnimation} style={{ width: width}}>
            <ul className={styles.logoScroll}>
                <li><img src="./JavaScript-logo.png" alt="" /></li>
                <li><img src="./HTML-Logo.jpg" alt="" /></li>
                <li><img src="./CSS-logo.jpg" alt="" /></li>
                <li><img src="./TypeScript-logo.png" alt="" /></li>
                <li><img src="./Python-logo.png" alt="" /></li>
                <li><img src="./Java-logo.png" alt="" /></li>
                <li><img src="./Csharp-logo.jpg" alt="" /></li>
                <li><img src="./Cplusplus-logo.jpg" alt="" /></li>
                <li><img src="./JavaScript-logo.png" alt="" /></li>
                <li><img src="./HTML-Logo.jpg" alt="" /></li>
                <li><img src="./CSS-logo.jpg" alt="" /></li>
                <li><img src="./TypeScript-logo.png" alt="" /></li>
                <li><img src="./Python-logo.png" alt="" /></li>
                <li><img src="./Java-logo.png" alt="" /></li>
                <li><img src="./Csharp-logo.jpg" alt="" /></li>
                <li><img src="./Cplusplus-logo.jpg" alt="" /></li>
            </ul>
        </motion.div>
    </>
    )
}

export default ScrollingLogos;