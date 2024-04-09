import '../css/component-css/InfoCard.css';
import { motion } from 'framer-motion';

interface InfoCardProps {
  title: string;
  image: string;
  link: string;
}

function ClickableInfoCard({title, image, link}: InfoCardProps) {
    return (
      <motion.div className="card" initial={{  translateY: +100 }} whileInView={{ translateY: 0 }} viewport={{ once: true }}>
        <a href={link} target="_"><motion.img className="clickableCard" src={image} alt="Card image cap" whileHover={{ borderRadius: "20%" }}/></a>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </motion.div>
      );
}

export default ClickableInfoCard;