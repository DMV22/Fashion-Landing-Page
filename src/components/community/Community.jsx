import "./community.css";

const Community = () => {
  return (
    <section className="community">
      <div className="container">
        <div className="community-info">
          <h2 className="community-info__title">
            JOIN SHOPPING COMMUNITY TO <br />
            GET MONTHLY PROMO
          </h2>
          <p className="community-info__descr">
            Type your email down below and be young wild generation
          </p>
          <form className="form">
            <input type="text"
              className="form__input"
              placeholder="Add your email here"
            ></input>
            <button className="form__button">SEND</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Community;
