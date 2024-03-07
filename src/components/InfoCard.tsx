import '../css/component-css/InfoCard.css';

interface InfoCardProps {
  title: string;
  image: string;
}

function InfoCard({title, image}: InfoCardProps) {
    return (
      <div className="card">
        <img className="card-img-top" src={image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
      );
}

export default InfoCard;