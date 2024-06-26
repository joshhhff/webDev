import '../css/component-css/InfoCard.css';
import { motion } from 'framer-motion';

interface InfoCardProps {
  title: string;
  image: string;
}

function InfoCard({title, image}: InfoCardProps) {
    return (
      <motion.div className="card" initial={{  translateY: +100 }} whileInView={{ translateY: 0 }} viewport={{ once: true }}>
        <img className="card-img-top" src={image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </motion.div>
      );
}

export default InfoCard;