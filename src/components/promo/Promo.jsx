import "./promo.css";

import mainImage from "../../img/promo-photo.svg";
import vectorImage from "../../img/vector.svg";

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo-container">
          <div className="promo-info">
            <h1 className="promo-info__title">
              <span className="highlight highlight--white">
                <span>LET’S</span>
              </span>
              EXPLORE
              <span className="highlight highlight--yellow">
                <span>UNIQUE</span>
              </span>
              CLOTHES.
            </h1>
            <p className="promo-info__text">
              Live for Influential and Innovative fashion!
            </p>
            <div className="promo-info__pay">
              <img
                src={vectorImage}
                className="promo-info__image"
                alt="Img: vector"
              />
              <button className="promo-info__btn">Shop Now</button>
            </div>
          </div>
          <img src={mainImage} alt="Img: promo" className="promo-image" />
        </div>
      </div>
    </section>
  );
};

export default Promo;
