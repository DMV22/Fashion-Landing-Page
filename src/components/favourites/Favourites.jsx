import "./favourites.css";

import Card from "../card/Card";
import InfoPhoto1 from "../../img/info-photo-1.svg";
import InfoPhoto2 from "../../img/info-photo-2.svg";

const Favourites = () => {
  return (
    <section className="favourites__title">
      <div className="container">
        <h2 className="favourites__title title">Young’s Favourite</h2>
        <div className="cards">
          <Card title={"Trending on instagram"} img={InfoPhoto1} />
          <Card title={"All Under $40"} img={InfoPhoto2} />
        </div>
      </div>
    </section>
  );
};

export default Favourites;
