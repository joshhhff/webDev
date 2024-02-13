import '../css/InfoCard.css';

interface InfoCardProps {
  title: string;
  image: string;
  description: string;
}

function InfoCard({title, image, description}: InfoCardProps) {
    return (
      <div className="card">
      <img className="card-img-top" src={image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">Learn more about {title}</a>
      </div>
    </div>
      );
}

export default InfoCard;