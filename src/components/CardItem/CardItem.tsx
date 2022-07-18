import { Link } from "react-router-dom";

const CardItem: React.FC<CardInfo> = (props) => {
  const { name, price, imageUrl } = props;
  return (
    <div className="card__item">
      <div className="card__img">
        <div className="overlay">
          <Link className="show__more" to="/productsItem">
            <img src="/icons/showmore.svg" alt="show detais" />
          </Link>
        </div>
        <img src={imageUrl} alt={name} />
      </div>
      <div className="card__description">
        <p className="card__title">{name}</p>
        <p className="card__price">${price}</p>
      </div>
    </div>
  );
};

export default CardItem;
