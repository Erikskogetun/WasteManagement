import React from "react";
import Slider from "react-slick";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slideshow.css";

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <FaChevronLeft
      style={{ color: props.color }}
      className="SlickPreviousButton"
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <FaChevronRight
      style={{ color: props.color }}
      className="SlickNextButton"
      onClick={onClick}
    />
  );
}

class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.slideSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      swipe: true,
      draggable: true,
      cssEase: "linear",
      nextArrow: <SampleNextArrow color={props.arrowColor} />,
      prevArrow: <SamplePrevArrow color={props.arrowColor} />,

      fade: true
    };

    this.imgListWithId = this.props.imgList.map((item, index) => {
      item.id = index;
      return item;
    });
  }

  render() {
    const images = this.imgListWithId.map(image => (
      <div key={image.id} className="SwipeContainer">
        <img
          className="SlideShowImage"
          src={image.url}
          alt={image.description}
        />
      </div>
    ));

    return (
      <div className="SlideShowContainer">
        <Slider {...this.slideSettings}>{images}</Slider>
      </div>
    );
  }
}

export default Slideshow;
