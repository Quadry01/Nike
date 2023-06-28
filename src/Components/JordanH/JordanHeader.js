import jordan from "../../images/logo/jordan.svg";
import "./JordanHeader.css";
function JordanHeader() {
  return (
    <div className="container">
      <img className="jordan-logo" src={jordan} alt="jordan logo"></img>
      <a className="JH-links1" href="blank">
        Find a Store
      </a>
      <span className="separator1">|</span>
      <a className="JH-links2" href="blank">
        Help
      </a>
      <span className="separator2">|</span>
      <a className="JH-links3" href="blank">
        Join Us
      </a>
      <span className="separator3">|</span>
      <a className="JH-links4" href="blank">
        Sign In
      </a>
    </div>
  );
}

export default JordanHeader;
