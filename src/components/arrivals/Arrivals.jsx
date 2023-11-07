import "./arrivals.css";
import Card from "../card/Card";

import Photo1 from "../../img/main-photo-1.svg";
import Photo2 from "../../img/main-photo-2.svg";
import Photo3 from "../../img/main-photo-3.svg";

const Arrivals = () => {
  return (
    <section className="arrivals">
      <div className="container">
        <h2 className="arrivals__title">NEW ARRIVALS</h2>
        <div className="cards">
          <Card title={"Hoodies & Sweetshirt"} img={Photo1} />
          <Card title={"Coats & Parkas"} img={Photo2} />
          <Card title={"Tees & T-Shirt"} img={Photo3}/>
        </div>
      </div>
    </section>
  );
};

export default Arrivals;
