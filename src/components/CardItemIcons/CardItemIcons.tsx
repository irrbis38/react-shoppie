import { Link } from "react-router-dom";

const CardItem: React.FC<CardInfo> = (props) => {
  const { name, price, imageUrl } = props;
  return (
    <div className="card__item">
      <div className="card__img">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="card__description">
        <p className="card__title">{name}</p>
        <p className="card__price">${price}</p>
        <p className="card__text">
          Fruits and vegetables are low in fat, salt and sugar. They are a good
          source of dietary fibre. As part of a well-balanced, regular diet and
          a healthy, active lifestyle.
        </p>
        <Link className="card__details" to="/productsItem">
          Details
        </Link>
      </div>
    </div>
  );
};

export default CardItem;
