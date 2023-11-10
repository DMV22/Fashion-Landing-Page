import "./footer.css";

import FacebookLogo from "../../img/facebook-logo.svg";
import InstagramLogo from "../../img/instagram-logo.svg";
import TwitterLogo from "../../img/twitter-logo.svg";
import LinkedinLogo from "../../img/linkedin-logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-info">
            <h2 className="footer__title title">FASHION</h2>
            <p className="footer__descr">
              Complete your style with awesome <br /> clothes from us.
            </p>
            <div className="footer__social-network">
              <img
                src={FacebookLogo}
                alt="Logo: facebook"
                className="footer__image"
              />
              <img
                src={InstagramLogo}
                alt="Logo: instagram"
                className="footer__image"
              />
              <img
                src={TwitterLogo}
                alt="Logo: twitter"
                className="footer__image"
              />
              <img
                src={LinkedinLogo}
                alt="Logo: linkedin"
                className="footer__image"
              />
            </div>
          </div>
          <nav className="footer-nav">
            <div className="footer__list footer__company">
              <h3 className="footer-nav__title">Company</h3>
              <ul className="footer__ul">
                <li className="footer__item">
                  <a href="#!" className="footer__link">
                    About
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#!" className="footer__link">
                    Contact us
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#!" className="footer__link">
                    Support
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#!" className="footer__link">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__list footer__quick-link">
              <h3 className="footer-nav__title">Quick Link</h3>
              <ul className="footer__ul">
                <li className="footer__item">
                  <a href="#!" className="footer__link">
                    Share Location
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#!" className="footer__link">
                    Orders Tracking
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#!" className="footer__link">
                    Size Guide
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#!" className="footer__link">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__list footer__legal">
              <h3 className="footer-nav__title">Legal</h3>
              <ul className="footer__ul">
                <li className="footer__item">
                  <a href="#!" className="footer__link">
                    Terms & conditions
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#!" className="footer__link">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
