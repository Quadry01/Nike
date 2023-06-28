import "./Catalogue.css";
import { useState } from "react";
import fullstr from "../../images/logo/fullstar.jpg";

/* Black shoes pictures imported */
import black1 from "../../images/black/black-1.jpeg";
import Vid1 from "../../images/black/video.mp4";
import Vid2 from "../../images/whSole/video.mp4";
import black2 from "../../images/black/black-2.jpeg";
import black3 from "../../images/black/black-3.jpeg";
import black4 from "../../images/black/black-4.jpeg";
import black5 from "../../images/black/black-5.jpeg";
import black6 from "../../images/black/black-6.jpeg";
import black7 from "../../images/black/black-7.jpeg";
import black8 from "../../images/black/black-8.jpeg";

/* Blue shoes pictures imported */
import blue1 from "../../images/blue/blue1.jpeg";
import blue2 from "../../images/blue/Blue2.jpeg";
import blue3 from "../../images/blue/blue3.jpeg";
import blue4 from "../../images/blue/blue4.jpeg";
import blue5 from "../../images/blue/blue5.jpeg";
import blue6 from "../../images/blue/blue6.jpeg";
import blue7 from "../../images/blue/blue7.jpeg";
import blue8 from "../../images/blue/blue8.jpeg";

/* Green shoes pictures imported */
import green1 from "../../images/green/green1.jpeg";
import green2 from "../../images/green/green2.jpeg";
import green3 from "../../images/green/green3.jpeg";
import green4 from "../../images/green/green4.jpeg";
import green5 from "../../images/green/green5.jpeg";
import green6 from "../../images/green/green6.jpeg";
import green7 from "../../images/green/green7.jpeg";
import green8 from "../../images/green/green8.jpeg";

/* Yellow shoes pictures imported */
import yellow1 from "../../images/yellow/yellow1.jpeg";
import yellow2 from "../../images/yellow/yellow2.jpeg";
import yellow3 from "../../images/yellow/yellow3.jpeg";
import yellow4 from "../../images/yellow/yellow4.jpeg";
import yellow5 from "../../images/yellow/yellow5.jpeg";
import yellow6 from "../../images/yellow/yellow6.jpeg";
import yellow7 from "../../images/yellow/yellow7.jpeg";
import yellow8 from "../../images/yellow/yellow8.jpeg";

/* Pink shoes pictures imported */
import pink1 from "../../images/pink/pink1.jpeg";
import pink2 from "../../images/pink/pink2.jpeg";
import pink3 from "../../images/pink/pink3.jpeg";
import pink4 from "../../images/pink/pink4.jpeg";
import pink5 from "../../images/pink/pink5.jpeg";
import pink6 from "../../images/pink/pink6.jpeg";
import pink7 from "../../images/pink/pink7.jpeg";
import pink8 from "../../images/pink/pink8.jpeg";

/* whitesSole shoes pictures imported */
import bs1 from "../../images/whSole/bs1.jpeg";
import bs2 from "../../images/whSole/bs2.jpeg";
import bs3 from "../../images/whSole/bs3.jpeg";
import bs4 from "../../images/whSole/bs4.jpeg";
import bs5 from "../../images/whSole/bs5.jpeg";
import bs6 from "../../images/whSole/bs6.jpeg";
import bs7 from "../../images/whSole/bs7.jpeg";
import bs8 from "../../images/whSole/bs8.jpeg";

function Catalogue() {
  /* States for Blacks */
  const [black11, setBlack11] = useState(black2);
  const [black22, setBlack22] = useState(black8);
  const [black33, setBlack33] = useState(black1);
  const [black44, setBlack44] = useState(black5);
  const [black55, setBlack55] = useState(black4);
  const [black66, setBlack66] = useState(black3);
  const [black77, setBlack77] = useState(black7);
  const [black88, setBlack88] = useState(black6);

  /* States for Blues */
  const [blue11, setBlue11] = useState(blue2);
  const [blue22, setBlue22] = useState(blue8);
  const [blue33, setBlue33] = useState(blue1);
  const [blue44, setBlue44] = useState(blue5);
  const [blue55, setBlue55] = useState(blue4);
  const [blue66, setBlue66] = useState(blue3);
  const [blue77, setBlue77] = useState(blue7);
  const [blue88, setBlue88] = useState(blue6);

  /* States for Greens */
  const [green11, setGreen11] = useState(green2);
  const [green22, setGreen22] = useState(green8);
  const [green33, setGreen33] = useState(green1);
  const [green44, setGreen44] = useState(green5);
  const [green55, setGreen55] = useState(green4);
  const [green66, setGreen66] = useState(green3);
  const [green77, setGreen77] = useState(green7);
  const [green88, setGreen88] = useState(green6);

  /* States for Yellow */
  const [yellow11, setYellow11] = useState(yellow2);
  const [yellow22, setYellow22] = useState(yellow8);
  const [yellow33, setYellow33] = useState(yellow1);
  const [yellow44, setYellow44] = useState(yellow5);
  const [yellow55, setYellow55] = useState(yellow4);
  const [yellow66, setYellow66] = useState(yellow3);
  const [yellow77, setYellow77] = useState(yellow7);
  const [yellow88, setYellow88] = useState(yellow6);

  /* States for Pink */
  const [pink11, setPink11] = useState(pink2);
  const [pink22, setPink22] = useState(pink8);
  const [pink33, setPink33] = useState(pink1);
  const [pink44, setPink44] = useState(pink5);
  const [pink55, setPink55] = useState(pink4);
  const [pink66, setPink66] = useState(pink3);
  const [pink77, setPink77] = useState(pink7);
  const [pink88, setPink88] = useState(pink6);

  /* States for whiteSole */
  const [bs11, setBs11] = useState(bs2);
  const [bs22, setBs22] = useState(bs8);
  const [bs33, setBs33] = useState(bs1);
  const [bs44, setBs44] = useState(bs5);
  const [bs55, setBs55] = useState(bs4);
  const [bs66, setBs66] = useState(bs3);
  const [bs77, setBs77] = useState(bs7);
  const [bs88, setBs88] = useState(bs6);
  const [vid, setVid] = useState(Vid1);

  /* BLACK FUNCTION */
  const BlackHandler = () => {
    setBlack33(black1);
    setBlack22(black8);
    setBlack11(black2);
    setBlack44(black5);
    setBlack55(black4);
    setBlack66(black3);
    setBlack77(black7);
    setBlack88(black6);
    setVid(Vid1);
  };

  /* BLUE FUNCTION */
  const BlueHandler = () => {
    if (black11 !== blue33) {
      setBlack11(blue33);
    }
    if (black22 !== blue22) {
      setBlack22(blue22);
    }
    if (black33 !== blue11) {
      setBlack33(blue11);
    }
    if (black44 !== blue44) {
      setBlack44(blue44);
    }
    if (black55 !== blue55) {
      setBlack55(blue55);
    }
    if (black66 !== blue66) {
      setBlack66(blue66);
    }
    if (black77 !== blue77) {
      setBlack77(blue77);
    }
    if (black88 !== blue88) {
      setBlack88(blue88);
      setVid(Vid1);
    }
  };

  /* GREEN FUNCTION */
  const GreenHandler = () => {
    if (black11 !== green33) {
      setBlack11(green33);
    }
    if (black22 !== green22) {
      setBlack22(green22);
    }
    if (black33 !== green11) {
      setBlack33(green11);
    }
    if (black44 !== green44) {
      setBlack44(green44);
    }
    if (black55 !== green55) {
      setBlack55(green55);
    }
    if (black66 !== green66) {
      setBlack66(green66);
    }
    if (black77 !== green77) {
      setBlack77(green77);
    }
    if (black88 !== green88) {
      setBlack88(green88);
      setVid(Vid1);
    }
  };

  /* YELLOW FUNCTION */
  const YellowHandler = () => {
    if (black11 !== yellow33) {
      setBlack11(yellow33);
    }
    if (black22 !== yellow22) {
      setBlack22(yellow22);
    }
    if (black33 !== yellow11) {
      setBlack33(yellow11);
    }
    if (black44 !== yellow44) {
      setBlack44(yellow44);
    }
    if (black55 !== yellow55) {
      setBlack55(yellow55);
    }
    if (black66 !== yellow66) {
      setBlack66(yellow66);
    }
    if (black77 !== yellow77) {
      setBlack77(yellow77);
    }
    if (black88 !== yellow88) {
      setBlack88(yellow88);
      setVid(Vid1);
    }
  };

  /* PINK FUNCTION */
  const PinkHandler = () => {
    if (black11 !== pink33) {
      setBlack11(pink33);
    }
    if (black22 !== pink22) {
      setBlack22(pink22);
    }
    if (black33 !== pink11) {
      setBlack33(pink11);
    }
    if (black44 !== pink44) {
      setBlack44(pink44);
    }
    if (black55 !== pink55) {
      setBlack55(pink55);
    }
    if (black66 !== pink66) {
      setBlack66(pink66);
    }
    if (black77 !== pink77) {
      setBlack77(pink77);
    }
    if (black88 !== pink88) {
      setBlack88(pink88);
      setVid(Vid1);
    }
  };

  /* WhiteSole FUNCTION */
  const BsHandler = () => {
    if (black11 !== bs33) {
      setBlack11(bs33);
    }
    if (black22 !== bs22) {
      setBlack22(bs22);
    }
    if (black33 !== bs11) {
      setBlack33(bs11);
    }
    if (black44 !== bs44) {
      setBlack44(bs44);
    }
    if (black55 !== bs55) {
      setBlack55(bs55);
    }
    if (black66 !== bs66) {
      setBlack66(bs66);
    }
    if (black77 !== bs77) {
      setBlack77(bs77);
    }
    if (black88 !== bs88) {
      setBlack88(bs88);
    }
    if (vid !== Vid2) {
      setVid(Vid2);
    }
  };

  return (
    <div className="catalogue ">
      <span className="high-rated">
        <img className="star" src={fullstr} alt="star"></img>Highly Rated
      </span>
      <div className="grid-container">
        <img className="frame grid-item1" src={black33} alt="shoe"></img>
        <video
          className=" frame grid-item2 "
          autoPlay
          muted
          loop
          src={vid}
        ></video>
        <img className="frame grid-item3 " src={black22} alt="shoe"></img>
        <img className="frame grid-item4" src={black11} alt="shoe"></img>
        <img className="frame grid-item5" src={black44} alt="shoe"></img>
        <img className="frame grid-item4" src={black55} alt="shoe"></img>
        <img className="frame grid-item4" src={black66} alt="shoe"></img>
        <img className="frame grid-item4" src={black77} alt="shoe"></img>
        <img className="frame grid-item4" src={black88} alt="shoe"></img>
      </div>

      <div className="choice-section">
        <h1 className="choice-header1">Nike Flex Runner 2</h1>
        <h2 className="choice-header2"> Older Kids' Road Running Shoes</h2>
        <h2 className="choice-price">$71</h2>
        <div className="shoe-btn-wrapper">
          <img
            onClick={BlackHandler}
            className="choice-btn1"
            src={black1}
            alt="icon"
          ></img>
          <img
            onClick={BlueHandler}
            className="choice-btn2"
            src={blue2}
            alt="icon"
          ></img>

          <img
            onClick={GreenHandler}
            className="choice-btn3"
            src={green2}
            alt="icon"
          ></img>

          <img
            onClick={YellowHandler}
            className="choice-btn4"
            src={yellow2}
            alt="icon"
          ></img>

          <img
            onClick={PinkHandler}
            className="choice-btn5"
            src={pink2}
            alt="icon"
          ></img>
          <br />
          <img
            onClick={BsHandler}
            className="choice-btn6"
            src={bs2}
            alt="icon"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Catalogue;
