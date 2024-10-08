import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl"; // Import the icons
import { useSelector } from "react-redux";

// Custom Previous Arrow
const PreviousArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "hsl(0deg 0% 100% / 40%)", // White background
        borderRadius: "50%", // Circular shape
        width: "50px",
        height: "50px",
        left: "30px",
        zIndex: 1,
        cursor: "pointer", // Add pointer cursor for better UX
      }}
      onClick={onClick}
    >
      <SlArrowLeft style={{ fontSize: "20px", color: "black" }} />
    </div>
  );
};

// Custom Next Arrow
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "hsl(0deg 0% 100% / 40%)", // White background
        borderRadius: "50%", // Circular shape
        width: "50px",
        height: "50px",
        right: "30px",
        zIndex: 1,
        cursor: "pointer", // Add pointer cursor for better UX
      }}
      onClick={onClick}
    >
      <SlArrowRight style={{ fontSize: "20px", color: "black" }} />
    </div>
  );
};

function SliderMain() {
  const images = useSelector((state) => state.slider.SliderImages); // Access images from Redux state

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    slidesToShow: 3, // Default number of slides to show
    slidesToScroll: 1, // Number of slides to scroll at a time
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      className="slider-container"
      style={{ marginTop: "140px", marginBottom: "40px" }}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "550px" }}
            />
          </div>
        ))}
      </Slider>

      <style>{`
        .slick-prev:before,
        .slick-next:before {
          font-size: 0px; // Hide default arrows
        }
        .slide {
          padding: 0 10px; // Add gap between images
        }
      `}</style>
    </div>
  );
}

export default SliderMain;
