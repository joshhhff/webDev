import '../css/component-css/Button.css';
import { motion } from 'framer-motion';

interface ButtonProps {
    link: string;
    text: string;
    isSubmit: boolean;
}

function Button({link, text, isSubmit}: ButtonProps) {
    
    function onClick() {
        alert('Button Clicked');
        
    }
    
    if (isSubmit) {
        return (
            <button onClick={onClick}>{text}</button>
        )
    } else {
        return (
            <a href={link}>
                <motion.button className="button" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>{text}</motion.button>
            </a>
        )
    }
}
    
    export default Button;