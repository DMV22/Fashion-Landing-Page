import "./card.css";

import Arrow from "../../img/arrow.svg";

const Card = (props) => {
  return (
    <div className="card">
      <a href="#!" className="card__link"></a>
      <img src={props.img} alt="Img: card" className="card__image" />
      <div className="card-info">
        <div className="card-info__text">
          <p className="card-info__title">{props.title}</p>
          <p className="card-info__muted">Explore Now!</p>
        </div>
        <a href="#!" className="card-info__arrow">
          <img src={Arrow} alt="Icon: arrow" />
        </a>
      </div>
    </div>
  );
};

export default Card;
