import "./brands.css";

import hm from "../../img/brand-1.svg";
import obey from "../../img/brand-2.svg";
import shopify from "../../img/brand-3.svg";
import lacoste from "../../img/brand-4.svg";
import levis from "../../img/brand-5.svg";
import amazon from "../../img/brand-6.svg";

const Brands = () => {
  return (
    <section className="brands">
      <div className="container">
        <ul className="brands__list">
          <li className="brands__item">
            <a href="#!" className="brands__link">
              <img src={hm} alt="Img: hm" className="brands__image" />
            </a>
          </li>
          <li className="brands__item">
            <a href="#!" className="brands__link">
              <img src={obey} alt="Img: obey" className="brands__image" />
            </a>
          </li>
          <li className="brands__item">
            <a href="#!" className="brands__link">
              <img src={shopify} alt="Img: shopify" className="brands__image" />
            </a>
          </li>
          <li className="brands__item">
            <a href="#!" className="brands__link">
              <img src={lacoste} alt="Img: lacoste" className="brands__image" />
            </a>
          </li>
          <li className="brands__item">
            <a href="#!" className="brands__link">
              <img src={levis} alt="Img: levis" className="brands__image" />
            </a>
          </li>
          <li className="brands__item">
            <a href="#!" className="brands__link">
              <img src={amazon} alt="Img: amazon" className="brands__image" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Brands;
