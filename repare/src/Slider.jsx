import React, {useState} from 'react';
import "/src/slider-style.css";
import PropTypes from 'prop-types';
import { slides } from "/src/Data/sliderData.json";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const Slider = ({ data }) => {
    const [slide, setSlide] = useState(0);

const nextSlide = () => {
setSlide(slide === data.length -1 ? 0 :  slide+1);
}


const prevSlide = () => {
    setSlide(slide === 0 ? data.length -1 : slide -1);
}

  return (
    <div className='carrousel'>
        <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide}/>
      {data.map((item, idx) => (
        <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide" : "slide slide-hidden"}/>
      ))}
              <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>
              <span className='indicators'>
        {data.map((_, idx) => (
          <button className={slide ===idx ? 'indicator' : 'indicator indicator-inactive'} key={idx} onClick={() => null}></button>
        ))}
      </span>
    </div>
  );
};

Slider.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Slider;
