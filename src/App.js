import React from "react";
import "./App.css";

import Fade from "react-reveal/Fade";

import Slideshow from "./Slideshow";

import upBlack from "./assets/icons/upBlack.png";
import upWhite from "./assets/icons/upWhite.png";
import arrowDown from "./assets/icons/arrowdown.png";

import empathizeImage from "./assets/designthinking/empathize.png";
import defineImage from "./assets/designthinking/define.png";
import ideateImage from "./assets/designthinking/ideate.png";
import prototypeImage from "./assets/designthinking/prototype.png";
import testImage from "./assets/designthinking/test.png";

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

import lowfiPrototypeOne from "./assets/lowfi/prototypeOne.png";
import lowfiPrototypeTwo from "./assets/lowfi/prototypeTwo.png";
import lowfiPrototypeThree from "./assets/lowfi/prototypeThree.png";

import highfiAllImages from "./assets/highfi/allImages.png";

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

const lowfiImages = [
  { url: lowfiPrototypeOne },
  { url: lowfiPrototypeTwo },
  { url: lowfiPrototypeThree }
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
    this.sectionRefs = [React.createRef(), React.createRef()];

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
        <div ref={this.sectionRefs[0]} className="HeaderRow">
          {meshImagesWhite}

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
                href="https://www.linkedin.com/in/sebastian-st%C3%A5hl-66553bb8/"
                className="ProfileWrapper"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="ProfilePicture"
                  src={sebastian}
                  alt={"Sebastian Ståhl"}
                />
                <span className="ProfileName">Sebastian Ståhl</span>
              </a>
            </div>
          </Fade>

          <Fade bottom>
            <div className="ScrollContainer">
              <div
                className="ScrollWrapper"
                onClick={() => scrollToRef(this.sectionRefs)}
              >
                <img className="ScrollButton" src={upWhite} alt="upWhite" />
                <span className="ChevronDown">V</span>
              </div>
            </div>
          </Fade>
        </div>
        <div ref={this.sectionRefs[1]} className="BodyRow">
          <div className="InfoSection">
            <div className="SectionHeaderContainer">
              <div className="SectionTitle">1. Pre Study</div>
              <div className="SectionIcons">
                <img className="SectionTitleIcon" src={defineImage} alt="" />
                <img className="SectionTitleIcon" src={empathizeImage} alt="" />
              </div>
            </div>
            <div className="SectionContent">
              <div className="InfoPartContainer">
                <span>
                  • Contextual interviews with residents and business owners
                </span>
                <span>
                  • A litterature study on feedback, behavior and education
                </span>
              </div>
              <img className="DownArrowIcon" src={arrowDown} alt="" />

              <span>
                Research question - What are the opportunities to improve waste
                management in SRS?
              </span>
            </div>
          </div>
          <div className="InfoSection">
            <div className="SectionHeaderContainer">
              <div className="SectionTitle">2. Sketches</div>
              <div className="SectionIcons">
                <img className="SectionTitleIcon" src={ideateImage} alt="" />
              </div>
            </div>
            <div className="SectionContent">
              <div className="InfoPartContainer">
                <span>• All team-members participated</span>
                <span>• Allowed for brainstorming with few limitations</span>
              </div>
            </div>
            <img className="DownArrowIcon" src={arrowDown} alt="" />

            <span>The sketches:</span>
            <Slideshow arrowColor="black" imgList={sketchImages} />
          </div>
          <div className="InfoSection">
            <div className="SectionHeaderContainer">
              <div className="SectionTitle">3. Low-fi prototype</div>
              <div className="SectionIcons">
                <img className="SectionTitleIcon" src={prototypeImage} alt="" />
              </div>
            </div>
            <div className="SectionContent">
              <div className="InfoPartContainer">
                <span>• Three low-fi prototypes, based on sketches</span>
                <span>• Used Balsamiq</span>
                <span>
                  • Fast and efficient way to prototype with low detail
                </span>
              </div>
              <img className="DownArrowIcon" src={arrowDown} alt="" />

              <span>The low-fi prototypes:</span>
              <Slideshow arrowColor="black" imgList={lowfiImages} />
            </div>
          </div>
          <div className="InfoSection">
            <div className="SectionHeaderContainer">
              <div className="SectionTitle">4. High-fi prototype</div>
              <div className="SectionIcons">
                <img className="SectionTitleIcon" src={prototypeImage} alt="" />
              </div>
            </div>
            <div className="SectionContent">
              <div className="InfoPartContainer">
                <span>
                  • One high-fi prototype, synthesis of low-fi prototypes
                </span>
                <span>• Used AdobeXD</span>
                <span>
                  • Used findings from a survey to understand user needs
                </span>
              </div>
              <img className="DownArrowIcon" src={arrowDown} alt="" />
              <span>The prototype:</span>
              <img className="FreeImageWrapper" src={highfiAllImages} alt="" />
              <span>The survey:</span>
              <Slideshow arrowColor="black" imgList={surveyImages} />
            </div>
          </div>
          <div className="InfoSection">
            <div className="SectionHeaderContainer">
              <div className="SectionTitle">5. The final application</div>
              <div className="SectionIcons">
                <img className="SectionTitleIcon" src={prototypeImage} alt="" />
              </div>
            </div>
            <div className="SectionContent">
              <div className="InfoPartContainer">
                <span>
                  • One functional application, synthesis of high-fi prototypes
                </span>
                <span>• Used React Native</span>
              </div>
              <img className="DownArrowIcon" src={arrowDown} alt="" />
              <span>The final app:</span>
              <div className="VideoContainer">
                <iframe
                  className="VideoWrapper"
                  title="video"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/i_GksmA2eT8"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="InfoSection">
            <div>Thank you for reading!</div>

            <Fade bottom>
              <div
                className="ScrollWrapper"
                onClick={() => scrollToRef(this.sectionRefs)}
              >
                <img className="ScrollButton" src={upBlack} alt="upBlack" />
                <span className="ChevronUp">V</span>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
