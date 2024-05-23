import Button from "./Button";
import { motion } from "framer-motion";

function Map() {

    const viewportWidth = document.documentElement.clientWidth;

    let revealAnimation = {
        initial: viewportWidth <= 680 ? { opacity: 0, translateX: +100 } : { opacity: 0, translateY: +100 },
        whileInView: viewportWidth <= 680 ? { opacity: 1, translateX: 0} : { opacity: 1, translateY: 0},
        viewport: { once: true },
    }

    return (
        <>
        <motion.div className="mapContainer" {...revealAnimation}>
            <div className="mapText">
                <p>UK based Software Developer</p>
                <p>Experience with several programming languages</p>
                <p>Created several integrations between systems<br/>and 3rd party applications</p>
                <p>Experienced in using APIs</p>
                <Button
                link="/webDev/#/experience"
                text="My Experience" 
                isSubmit={false}
                arrow={true}
                />
            </div>
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9584854.888729954!2d-15.000481616316668!3d54.09054518860425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2sUnited%20Kingdom!5e0!3m2!1sen!2suk!4v1712675210291!5m2!1sen!2suk"></iframe>
        </motion.div>
        </>
    )
}

export default Map;