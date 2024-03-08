import '../css/component-css/Button.css';
import { GoArrowRight } from 'react-icons/go';
import { motion } from 'framer-motion';

interface ButtonProps {
    link: string;
    text: string;
    isSubmit: boolean;
    arrow: boolean;
}

function Button({link, text, isSubmit, arrow}: ButtonProps) {
    
    function onClick() {
        alert('Button Clicked');
        
    }
    
    return (
        isSubmit ? (<button onClick={onClick}>{text}</button>) : (
            <a href={link}>
                <motion.button className="button" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    {text} {arrow ? <GoArrowRight /> : ''}
                </motion.button>
            </a>
        )
    );
}
    
export default Button;