import "./vouchers.css";

import AppPhoto from "../../img/app-photo.svg";
import AppStore from "../../img/app-store.svg";
import GooglePlay from "../../img/google-play.svg";

const Vouchers = () => {
  return (
    <section className="vouchers">
      <div className="container">
        <div className="vouchers-container">
          <div className="vouchers-info">
            <p className="vouchers-info__title">
              DOWNLOAD APP & <br />
              GET THE VOUCHER!
            </p>
            <p className="vouchers-info__descr">
              Get 30% off for first transaction using <br /> Rondovision mobile
              app for now.
            </p>
            <div className="vouchers-info__links">
              <a href="#!" className="vouchers-info__image">
                <img src={AppStore} alt="Img: app-store" />
              </a>
              <a href="#!" className="vouchers-info__image">
                <img src={GooglePlay} alt="Img: play-market" />
              </a>
            </div>
          </div>
          <img src={AppPhoto} alt="Img: app" className="vouchers__image" />
        </div>
      </div>
    </section>
  );
};
export default Vouchers;
