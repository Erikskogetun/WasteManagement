import React from "react";
import "./App.css";

import Fade from "react-reveal/Fade";

import Slideshow from "./Slideshow";

import upBlack from "./assets/icons/upBlack.png";
import upWhite from "./assets/icons/upWhite.png";

import binImage from "./assets/details/bin.png";
import paperImage from "./assets/details/paper.png";
import plasticImage from "./assets/details/plastic.png";
import restImage from "./assets/details/rest.png";

import ageImage from "./assets/survey/age.png";
import awarenessImage from "./assets/survey/awareness.png";
import co2Image from "./assets/survey/co2.png";
import genderImage from "./assets/survey/gender.png";
import meansImage from "./assets/survey/means.png";
import motivationImage from "./assets/survey/motivation.png";
import residentsImage from "./assets/survey/residents.png";
import timechangeImage from "./assets/survey/timechange.png";

import sketchOne from "./assets/sketches/sketch1.jpg";
import sketchTwo from "./assets/sketches/sketch2.jpg";
import sketchThree from "./assets/sketches/sketch3.jpg";
import sketchFour from "./assets/sketches/sketch4.jpg";
import sketchFive from "./assets/sketches/sketch5.jpg";
import sketchSix from "./assets/sketches/sketch6.jpg";

import edward from "./assets/profiles/edward.jpeg";
import erik from "./assets/profiles/erik.jpg";
import jonathan from "./assets/profiles/jonathan.jpeg";
import lukas from "./assets/profiles/lukas.jpg";
import sebastian from "./assets/profiles/sebastian.jpg";

const surveyImages = [
  { url: ageImage },
  { url: awarenessImage },
  { url: co2Image },
  { url: genderImage },
  { url: meansImage },
  { url: motivationImage },
  { url: residentsImage },
  { url: timechangeImage }
];

const sketchImages = [
  { url: sketchOne },
  { url: sketchTwo },
  { url: sketchThree },
  { url: sketchFour },
  { url: sketchFive },
  { url: sketchSix }
];

const scrollToRef = function(refList) {
  for (var i = 0; i < refList.length; i++) {
    if (refList[i].current.offsetTop > window.pageYOffset) {
      window.scrollTo({
        top: refList[i].current.offsetTop,
        behavior: "smooth"
      });
      return;
    }
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const meshImageList = [
  { url: binImage },
  { url: paperImage },
  { url: plasticImage },
  { url: restImage }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.sectionRefs = [
      React.createRef(),
      React.createRef(),
      React.createRef()
    ];

    this.meshImageListWithId = meshImageList.map((item, index) => {
      item.id = index;
      return item;
    });
  }

  render() {
    const meshImagesWhite = this.meshImageListWithId.map(image => {
      if (image.id % 2 === 0) {
        return (
          <Fade left key={image.id}>
            <img className="MeshImage White" src={image.url} alt="" />
          </Fade>
        );
      } else {
        return (
          <Fade right key={image.id}>
            <img className="MeshImage White" src={image.url} alt="" />
          </Fade>
        );
      }
    });

    const meshImagesBlack = this.meshImageListWithId.map(image => {
      if (image.id % 2 === 0) {
        return (
          <Fade left key={image.id}>
            <img className="MeshImage" src={image.url} alt="" />
          </Fade>
        );
      } else {
        return (
          <Fade right key={image.id}>
            <img className="MeshImage" src={image.url} alt="" />
          </Fade>
        );
      }
    });

    return (
      <div className="App">
        <div ref={this.sectionRefs[0]} className="BodyRow">
          <span className="InitialDescription">
            Could a feedback system directed at residents of
            <span className="TextHighLight"> Stockholm Royal Seaport </span> be
            used to improve the quality of waste streams?
          </span>
          <Fade right cascade>
            <div className="ProfilesContainer">
              <a
                href="https://www.linkedin.com/in/edward-alpsten-419306132/"
                className="ProfileWrapper"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="ProfilePicture"
                  src={edward}
                  alt={"Edward Alpsten"}
                />
                <span className="ProfileName">Edward Alpsten</span>
              </a>
              <a
                href="https://www.linkedin.com/in/erik-skogetun-55bbaa94/"
                className="ProfileWrapper"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="ProfilePicture"
                  src={erik}
                  alt={"Erik Skogetun"}
                />
                <span className="ProfileName">Erik Skogetun</span>
              </a>
              <a
                href="https://www.linkedin.com/in/lukas-ekberg/"
                className="ProfileWrapper"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="ProfilePicture"
                  src={lukas}
                  alt={"Lukas Ekberg"}
                />
                <span className="ProfileName">Lukas Ekberg</span>
              </a>
              <a
                href="https://www.linkedin.com/in/jonathan-rintala/"
                className="ProfileWrapper"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="ProfilePicture"
                  src={jonathan}
                  alt={"Jonathan Rintala"}
                />
                <span className="ProfileName">Jonathan Rintala</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sebastian-st%C3%A5hl-66553bb8/"
                className="ProfileWrapper"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="ProfilePicture"
                  src={sebastian}
                  alt={"Sebastian Stål"}
                />
                <span className="ProfileName">Sebastian Stål</span>
              </a>
            </div>
          </Fade>

          <Fade bottom>
            <div
              className="ScrollContainer"
              onClick={() => scrollToRef(this.sectionRefs)}
            >
              <img className="ScrollButton" src={upWhite} alt="upBlack" />
              <span className="ChevronDown">V</span>
            </div>
          </Fade>
        </div>
        <div ref={this.sectionRefs[1]} className="BodyRow">
          {meshImagesBlack}

          <div className="SectionTitle">1. Sketch Sessions</div>
          <Slideshow arrowColor="black" imgList={sketchImages} />
          <Fade bottom>
            <div
              className="ScrollContainer"
              onClick={() => scrollToRef(this.sectionRefs)}
            >
              <img className="ScrollButton" src={upBlack} alt="upBlack" />
              <span className="ChevronDown">V</span>
            </div>
          </Fade>
        </div>
        <div ref={this.sectionRefs[2]} className="BodyRow">
          {meshImagesWhite}
          <div className="SectionTitleInv">2. Survey</div>

          <Slideshow arrowColor="white" imgList={surveyImages} />
          <Fade bottom>
            <div
              className="ScrollContainer"
              onClick={() => scrollToRef(this.sectionRefs)}
            >
              <img className="ScrollButton" src={upWhite} alt="upBlack" />
              <span className="ChevronUp">V</span>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default App;
