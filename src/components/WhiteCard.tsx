import Button from './Button';
import styles from '../css/component-css/WhiteCard.module.css';
import { motion } from 'framer-motion';

interface BlueCardProps {
    title: string;
    description: string;
    hasButton: boolean;
    link: string;
    buttonHasArrow: boolean;
}

function BlueCard({title, description, hasButton, link, buttonHasArrow}: BlueCardProps) {

    const viewportWidth = document.documentElement.clientWidth;

    let revealAnimation = {
        initial: viewportWidth <= 680 ? { opacity: 0, translateX: +100 } : { opacity: 0, translateY: +100 },
        whileInView: viewportWidth <= 680 ? { opacity: 1, translateX: 0} : { opacity: 1, translateY: 0},
        viewport: { once: true },
        transition: { duration: 0.5 }
    }

    if (hasButton) {
        return (
            <motion.div className={styles.cardBody} {...revealAnimation}>
                <h1>{title}</h1>
                <p>{description}</p>
                <div className={styles.button}>
                    <Button
                        link={link}
                        text="LEARN MORE"
                        isSubmit={false}
                        arrow={buttonHasArrow}
                    />
                </div>
            </motion.div>
        )
    } else {
        return (
            <motion.div className={styles.cardBody} {...revealAnimation}>
                <h1>{title}</h1>
                <p>{description}</p>
            </motion.div>
        )
    }
}

export default BlueCard;