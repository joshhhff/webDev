import '../css/component-css/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>
                CO456 Web Development - Joshua Ford: 100181709<br/>Built using React
            </p>
            <div className="image">
                <a href="https://react.dev/">
                    <img src="../src/assets/ReactLogo.png" alt="" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;