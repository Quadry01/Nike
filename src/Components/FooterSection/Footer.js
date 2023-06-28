import "./Footer.css";
import twitter from "../../images/logo/twitter.svg";
import facebook from "../../images/logo/facebook.svg";
import youtube from "../../images/logo/youtube.svg";
import instagram from "../../images/logo/instagram.svg";
import location from "../../images/logo/location1.svg";
function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="group-list1">
        <ul>
          <li className="li-header">FIND A STORE</li>
          <li className="li-header">NIKE JOURNAL</li>
          <li className="li-header">BECOME A MEMBER</li>
          <li className="li-header">FEEDBACK</li>
          <li className="li-header">PROMO CODES</li>
        </ul>
      </div>
      <div className="group-list2">
        <ul>
          <li className="li-header">GET HELP</li>
          <li className="li-item">Order Status</li>
          <li className="li-item">Shipping and Delivery</li>
          <li className="li-item">Returns</li>
          <li className="li-item">Payment Options</li>
          <li className="li-item">Contact Us</li>
        </ul>
      </div>
      <div className="group-list3">
        <ul>
          <li className="li-header">ABOUT NIKE</li>
          <li className="li-item">News</li>
          <li className="li-item">Careers</li>
          <li className="li-item">Investors</li>
          <li className="li-item">Sustainability</li>
        </ul>
      </div>
      <div className="group-list4">
        <ul>
          <li className="li-header">JOIN US</li>
          <li className="li-item">Nike App</li>
          <li className="li-item">Nike Run Club</li>
          <li className="li-item">Nike Training Club</li>
        </ul>
      </div>
      <div className="header-mobile">
        <h3> GET HELP</h3>
        <h3>ABOUT NIKE</h3>
        <h3>JOIN US</h3>
      </div>
      <div className="social-icon-wrap">
        <a href="blank">
          <img
            className="social-media-icon"
            src={twitter}
            alt="twitter-icon"
          ></img>
        </a>
        <a href="blank">
          <img
            className="social-media-icon"
            src={facebook}
            alt="facebook-icon"
          ></img>
        </a>
        <a href="blank">
          <img
            className="social-media-icon"
            src={youtube}
            alt="youtube-icon"
          ></img>
        </a>
        <a href="blank">
          <img
            className="social-media-icon"
            src={instagram}
            alt="instagram-icon"
          ></img>
        </a>
      </div>
      <div className="vertical-links">
        <ul className="V-linkUL">
          <li className="li-link1">Guides</li>
          <li className="li-link2">Term of Use</li>
          <li className="li-link3">Term of Sale</li>
          <li className="li-link4">Company Details</li>
          <li className="li-link5">Modern Slavery Act</li>
        </ul>
      </div>

      <div className="copyright-section">
        <img
          className="location-img invert"
          src={location}
          alt="location-icon"
        ></img>
        <span className="australia">Australia</span>
        <p className="pragraph1">© 2023 Nike, Inc. All Rights Reserved</p>
        <p className="pragraph2">Privacy & Cookie Policy</p>
        <p className="pragraph3">Cookie Settings</p>
      </div>
    </div>
  );
}

export default Footer;
