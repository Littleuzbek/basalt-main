import "./Presentation.css";
import { useEffect, useRef, useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import EndProductSlider from "./sliders/EndProductSlider";
import Slider from "react-slick";

export default function Presentation({ images }) {
  const [slide, setSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [position, setPosition] = useState({ scale: "1" });
  const slidesRef = useRef(null);
  let sliderRef = useRef(null);

  useEffect(() => {
    setSlide(0);
  }, [images]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - slidesRef.current.offsetLeft);
    setScrollLeft(slidesRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.pageX - slidesRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    slidesRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const zoomIn = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { offsetWidth, offsetHeight } = target;

    const xPercent = (offsetX / offsetWidth) * 100;
    const yPercent = (offsetY / offsetHeight) * 100;

    setPosition({
      transformOrigin: `${xPercent}% ${yPercent}%`,
      scale: "2",
    });
  };

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    // focusOnSelect: true,
    nav: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 5,
    draggable: true,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  return (
    <div className="presentation-slider">
      <div>
        <div className="main-slide">
          <img
            src={images?.[slide]}
            alt=""
            style={position}
            onMouseMove={zoomIn}
            onMouseLeave={() => setPosition({ scale: "1" })}
            loading="lazy"
          />
        </div>
        <div
          className="side-slides"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onMouseUp={handleMouseUp}
          ref={slidesRef}
          style={images?.length > 1 ? {} : { display: "none" }}
        >
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              {images?.map((image, key) => (
                <div
                  key={image}
                  // style={images?.length === 3 ? { width: "217px" } : {}}
                >
                  <img
                    src={image}
                    alt=""
                    loading="lazy"
                    onClick={() => setSlide(key)}
                  />
                  <span
                    className={slide === key ? "" : "slide-item"}
                    onClick={() => setSlide(key)}
                  ></span>
                </div>
              ))}
            </Slider>
        </div>
        <div
          className="slider-action"
          style={images?.length < 4 ? { display: "none" } : {}}
        >
          <GrFormPrevious
            onClick={() => {
              previous()
              // return slidesRef.current.scrollLeft === 0
              //   ? (slidesRef.current.scrollLeft = slidesRef.current.scrollWidth)
              //   : (slidesRef.current.scrollLeft -=
              //       slidesRef.current.firstChild.clientWidth + 10);
            }}
          />
          <GrFormPrevious
            onClick={() => {
              next()
              // return slidesRef.current.scrollLeft +
              //   slidesRef.current.clientWidth >=
              //   slidesRef.current.scrollWidth - 20
              //   ? (slidesRef.current.scrollLeft = 0)
              //   : (slidesRef.current.scrollLeft +=
              //       slidesRef.current.firstChild.clientWidth + 10);
            }}
          />
        </div>
      </div>

      <EndProductSlider images={images} />
    </div>
  );
}
