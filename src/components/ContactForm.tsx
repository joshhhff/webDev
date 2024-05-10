import styles from '../css/component-css/ContactForm.module.css';
import { motion } from 'framer-motion';

function ContactForm() {

    const viewportWidth = document.documentElement.clientWidth;

    let revealAnimation = {
        initial: viewportWidth <= 680 ? { opacity: 0, translateX: +100 } : { opacity: 0, translateY: +100 },
        whileInView: viewportWidth <= 680 ? { opacity: 1, translateX: 0} : { opacity: 1, translateY: 0},
        viewport: { once: true },
    }

    function createEmail() {
        const nameElement = document.getElementById('name') as HTMLInputElement | null;
        const subjectElement = document.getElementById('subject') as HTMLInputElement | null;
        const messageElement = document.getElementById('messageBox') as HTMLTextAreaElement | null;
    
        // Checking for null is necessary to avoid runtime errors
        const name = nameElement?.value || '';
        const subject = subjectElement?.value || '';
        const message = messageElement?.value || '';
    
        const content = `Name: ${name}%0D%0A${message}`;    //%0D%0A forces line break
    
        window.open(`mailto:joshfordd2004@gmail.com?subject=${subject}&body=${content}`);
    }
    return (
        <motion.div className={styles.formContainer} {...revealAnimation}>
            <div className={styles.inputs}>
                <input id="name" type="text" placeholder="Name" name="name" />
                <input id="subject" type="text" placeholder="Subject" />
                {viewportWidth > 705 && (
                    <motion.button onClick={createEmail} className={styles.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>SEND</motion.button>
                )}                    
            </div>
            <div className={styles.emailMessage}>
                <textarea id="messageBox" rows={4} cols={50} placeholder="Message"></textarea>
                {viewportWidth <= 705 && (
                    <motion.button onClick={createEmail} className={styles.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>SEND</motion.button>
                )}
            </div>
        </motion.div>
    )
}

export default ContactForm;