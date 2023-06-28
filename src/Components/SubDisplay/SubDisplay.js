import img1 from "../../images/black/nike-feet.jpeg";
import img2 from "../../images/black/nike-legs.jpeg";
import img3 from "../../images/black/boy-sat.jpeg";
import "./SubDisplay.css";
import Carousel from "../Carousel/Carousel";
function SubDisplay() {
  return (
    <div className="sub-display-wrapper">
      <p className="sub-paragraph0">
        Explore the Nike Flex Runner 2 Older Kids' Road Running Shoes
      </p>
      <img className="img1" src={img1} alt="image1"></img>
      <h3 className="sub-header1">Easy On, Easy Fit</h3>
      <p className="sub-paragraph1">
        A stretchy bootie design makes it easy to slip your foot in with a{" "}
        <br />
        snug and secure feel. A heel strap and leather on the sides
        <br /> stabilise your fit.
      </p>
      <img className="img2" src={img2} alt="image2"></img>
      <h3 className="sub-header2">Fast Steps</h3>
      <p className="sub-paragraph2">
        The flexible foam sole is designed with deep grooves so every <br />{" "}
        step and stride feels secure while running. The sole's pattern <br />
        also helps with multi-surface traction.
      </p>
      <img className="img3" src={img3} alt="image3"></img>
      <h3 className="sub-header3">Steady Feel</h3>
      <p className="sub-paragraph3">
        The back of the shoe features foam that creates a wing-like
        <br /> shape around the heel for extra stability when moving in
        <br /> different directions.
      </p>

      <Carousel />
    </div>
  );
}

export default SubDisplay;
