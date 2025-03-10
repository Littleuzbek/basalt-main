import "../Projects.css"
import { useRef, useState, Fragment } from "react";
import { GrFormPrevious } from "react-icons/gr";

export default function EndProductSlider({images}) {
  const [mainImg, setMainImg] = useState(images?.at(0));
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  // mobile slide states
  const [touchStart, setTouchStart] = useState(0);

  
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const handleTouchDown = (e) => {
    setTouchStart(e.touches[0].clientX)
  };

  const handleTouchUp = (e) => {
    const endX = e.changedTouches[0].clientX; // final touch position

    if (touchStart > endX + 50) {
      const nextImg = images?.findIndex((pic) => pic === mainImg) + 1;
      setMainImg( images.at(nextImg >= images.length ? 0 : nextImg) )
    } else if (startX < endX - 50) {
      const nextImg = images?.findIndex((pic) => pic === mainImg) - 1;
      setMainImg( images.at(nextImg) )
    }
  };

  return (
    <div className="end-product-slider">
        <img 
          src={mainImg} 
          onTouchStart={handleTouchDown}
          onTouchEnd={handleTouchUp}
          alt="" 
        />
        <div 
          className="end-side-slides" 
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onMouseUp={handleMouseUp}
          style={images.length < 8 ? {} : {display: "none"}}
        >
          {images.length < 8 && images?.map((pic)=>(
          <Fragment key={pic}>
            <div onClick={() => setMainImg(pic)}>
              <img src={pic} alt="" />
              {mainImg !== pic && <span className="slide-item"></span>}
            </div>

            <span 
              onClick={() => setMainImg(pic)}
              className={mainImg === pic ? "end-active" : ""}
            ></span>
          </Fragment>
          ))}
        </div>
        <div className="end-product-action">
        <GrFormPrevious
            className="icon"
            onClick={() => {
              return sliderRef.current.scrollLeft === 0 ?
              sliderRef.current.scrollLeft = sliderRef.current.scrollWidth:
              sliderRef.current.scrollLeft -= sliderRef.current.firstChild.clientWidth + 20;
            }}
          />
          <GrFormPrevious
            className="icon"
            onClick={() => {
              return sliderRef.current.scrollLeft + sliderRef.current.clientWidth >= sliderRef.current.scrollWidth - 20 ?
              sliderRef.current.scrollLeft = 0 :
              sliderRef.current.scrollLeft += sliderRef.current.firstChild.clientWidth + 20;
            }}
          />
        </div>
        {/* for mobile products  */}
        {images.length > 8 && <div className="end-product-action-sm">
        <GrFormPrevious
            className="icon"
            onClick={() => {
              const nextImg = images?.findIndex((pic) => pic === mainImg) - 1;
              setMainImg( images.at(nextImg >= images.length ? 0 : nextImg) )
            }}
          />
          <GrFormPrevious
            className="icon"
            onClick={() => {
              const nextImg = images?.findIndex((pic) => pic === mainImg) + 1;
              setMainImg( images.at(nextImg >= images.length ? 0 : nextImg) )
            }}
          />
        </div>}
    </div>
  )
}
