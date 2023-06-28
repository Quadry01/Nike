import "./SizeSection.css";
import { useState } from "react";
import arrowup from "../../images/logo/arrowup.jpg";
import arrowup1 from "../../images/logo/arrowup.jpg";
import arrowup2 from "../../images/logo/arrowup.jpg";
import heart from "../../images/logo/like.svg";
import arrowdown from "../../images/logo/arrowdown.jpg";
import arrowdown1 from "../../images/logo/arrowdown.jpg";
import arrowdown2 from "../../images/logo/arrowdown.jpg";

import fullstr from "../../images/logo/fullstar.jpg";

function SizeSection() {
  const [icon, SetIcon] = useState(arrowdown);
  const [icon1, SetIcon1] = useState(arrowdown);
  const [icon2, SetIcon2] = useState(arrowdown);
  let [Tog1, setTog1] = useState("hide1");
  let [Tog2, setTog2] = useState("hide2");
  let [Tog3, setTog3] = useState("hide3");

  const Toggle1 = () => {
    return (
      <>
        {
          (Tog1 = !Tog1
            ? setTog1("hide1") & SetIcon(arrowdown)
            : setTog1("") & SetIcon(arrowup))
        }
      </>
    );
  };

  const Toggle2 = () => {
    return (
      <>
        {
          (Tog2 = !Tog2
            ? setTog2("hide2") & SetIcon1(arrowdown1)
            : setTog2("") & SetIcon1(arrowup1))
        }
      </>
    );
  };
  const Toggle3 = () => {
    return (
      <>
        {
          (Tog3 = !Tog3
            ? setTog3("hide3") & SetIcon2(arrowdown2)
            : setTog3("") & SetIcon2(arrowup2))
        }
      </>
    );
  };

  return (
    <div>
      <div className="size-section-wrapper">
        <span className="size-header1">Select Size</span>
        <span className="size-header2">Size Guide</span>

        <div className="size-btn-wrapper">
          <span className="btn1"> US 3.5Y</span>
          <span className="btn2"> US 4Y</span>
          <span className="btn3">US 4.5Y</span>
          <span className="btn4">US 5Y</span>
          <span className="btn5">US 5.5Y</span>
          <span className="btn6">US 6Y</span> <br className="br-btn" />
          <span className="btn7">US 6.5Y</span>
          <span className="btn8">US 7Y</span>
        </div>
        <button className="size-btn1">Add to Bag</button>
        <button className="size-btn2">
          {" "}
          Favourite <img className="heart" src={heart} alt="heart"></img>
        </button>
        <p className="size-paragraph">
          Running shoes made easy! The Nike Flex Runner 2 is for the kid on the
          go who loves to play all day—from gym class to a sprint down the
          block. They're lace-free, meaning they're super-quick to slip on and
          off. Who's ready to race?
        </p>
        <ul className="size-ul">
          <li>Colour Shown: Black/Photo Blue/University Gold/White</li>
          <li>Style: DJ6038-002</li>
        </ul>
        <a className="size-view-link" href="blank">
          View Product Details
        </a>

        <div className="summary">
          <div className="sub-summary1">
            <h3 className="summary-header1"> Size & Fit</h3>
            <img
              onClick={Toggle1}
              className="toggle-img1"
              src={icon}
              alt="toggle-icon"
            ></img>
            <ul className={`summary-ul ${Tog1} `}>
              <li>Size Guide</li>
            </ul>
          </div>

          <div className="sub-summary2">
            <h3 className="summary-header2">Freee Delivery and Returns</h3>
            <img
              onClick={Toggle2}
              className="toggle-img1"
              src={icon1}
              alt="toggle-icon"
            ></img>
            <p className={`summary-paragraph ${Tog2} `}>
              Free standard delivery on orders over $270. You can return your
              order for any reason, free of charge, within 30 days.
            </p>
          </div>
          <div className="sub-summary3">
            <h3 className="summary-header3">Reviews(100)</h3>

            <div className="star-container">
              <img src={fullstr} className="Star" alt="star-icon"></img>
              <img src={fullstr} className="Star" alt="star-icon"></img>
              <img src={fullstr} className="Star" alt="star-icon"></img>
              <img src={fullstr} className="Star" alt="star-icon"></img>
              <img src={fullstr} className="Star" alt="star-icon"></img>
            </div>
            <img
              onClick={Toggle3}
              className="toggle-img1"
              src={icon2}
              alt="toggle-icon"
            ></img>
            <div className={`rating-section ${Tog3}`}>
              <div className="review-star-container">
                <img src={fullstr} className="Star" alt="star-icon"></img>
                <img src={fullstr} className="Star" alt="star-icon"></img>
                <img src={fullstr} className="Star" alt="star-icon"></img>
                <img src={fullstr} className="Star" alt="star-icon"></img>
                <img src={fullstr} className="Star" alt="star-icon"></img>
              </div>
              <span className="four-stars">4.6 Stars</span>
              <br />
              <span className="write-review">Write a Review</span>
              {/* Rating 1 */}
              <div className="rating1">
                <p className="rating-p1">
                  kids hate tieing their shoes, so they love these
                </p>
                <div className="star-rating1">
                  <img src={fullstr} className="Star" alt="star-icon"></img>
                  <img src={fullstr} className="Star" alt="star-icon"></img>
                  <img src={fullstr} className="Star" alt="star-icon"></img>
                  <img src={fullstr} className="Star" alt="star-icon"></img>
                  <img src={fullstr} className="Star" alt="star-icon"></img>
                </div>
                <span className="name-time">Kwhite2000 - 01 Feb 2023</span>
                <p className="rating-p2">
                  very light my nephew loves them, since he dont have to tie
                  them..lol
                </p>
              </div>
              {/* Rating 2 */}
              <div className="rating2">
                <p className="rating-p1">nikes </p>
                <div className="star-rating1">
                  <img src={fullstr} className="Star" alt="star-icon"></img>
                  <img src={fullstr} className="Star" alt="star-icon"></img>
                  <img src={fullstr} className="Star" alt="star-icon"></img>
                  <img src={fullstr} className="Star" alt="star-icon"></img>
                  <img src={fullstr} className="Star" alt="star-icon"></img>
                </div>
                <span className="name-time">nad1 - 12 Jan 2023</span>
                <p className="rating-p2">good quality size correct</p>
              </div>
              {/* Rating 3 */}
              <div className="rating3 ">
                <p className="rating-p1">Good shoe </p>
                <div className="star-rating1">
                  <img src={fullstr} className="Star" alt="star-icon"></img>
                  <img src={fullstr} className="Star" alt="star-icon"></img>
                  <img src={fullstr} className="Star" alt="star-icon"></img>
                  <img src={fullstr} className="Star" alt="star-icon"></img>
                  <img src={fullstr} className="Star" alt="star-icon"></img>
                </div>
                <span className="name-time">Katie011820 - 12 Jan 2023</span>
                <p className="rating-p2">
                  My son loves these shoes. They are a little bit wider than the
                  flex 1 shoes. But they still fit him. He loves the slip on
                  design and we will continue to buy them!
                </p>
              </div>
              <p className="more-review">More Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SizeSection;
