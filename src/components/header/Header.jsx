import "./header.css";
import logoImage from "../../img/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
          <div className="header-logo">
            <img src={logoImage} alt="Icon: logo" className="header__image" />
            <h2 className="header__title title">FASHION</h2>
          </div>
          <nav className="header-nav">
            <ul className="header-nav__list">
              <li className="header-nav__item">
                <a href="#!" className="header-nav__link">
                  CATALOGUE
                </a>
              </li>
              <li className="header-nav__item">
                <a href="#!" className="header-nav__link">
                  FASHION
                </a>
              </li>
              <li className="header-nav__item">
                <a href="#!" className="header-nav__link">
                  FAVOURITE
                </a>
              </li>
              <li className="header-nav__item">
                <a href="#!" className="header-nav__link">
                  LIFESTYLE
                </a>
              </li>
            </ul>
            <button className="header-nav__btn">SIGN UP</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
