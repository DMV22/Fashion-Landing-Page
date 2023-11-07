import "./banner.css";

import BannerPhoto from "../../img/banner-photo.svg";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-container">
        <img
          src={BannerPhoto}
          alt="Img: banner"
          className="banner__image"
        ></img>
        <div className="banner-info">
          <h1 className="banner-info__title">
            <span className="highlight highlight--white">
              <span>PAYDAY</span>
            </span>
            <br />
            SALE NOW
          </h1>
          <p className="banner-info__descr">
            Spend minimal $100 get 30% off <br /> voucher code for your next
            purchase
          </p>
          <p className="banner-info__terms">1 June - 10 June 2021</p>
          <p className="banner-info__remark">*Terms & Conditions apply</p>
          <button className="banner-info__button">SHOP NOW</button>
        </div>
      </div>
    </section>
  );
};
export default Banner;
