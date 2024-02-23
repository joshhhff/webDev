import '../css/component-css/Button.css';

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
                <button>{text}</button>
            </a>
        )
    }
}
    
    export default Button;