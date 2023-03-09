import React from 'react';
import Slider from 'react-slick';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlickSlider = ({ children }) => {
  const ArrowLeft = (props) => {
    const { className, style, onClick } = props;
    return (
      <ArrowLeftIcon
        className={className}
        style={{ ...style, display: 'block', color: '#222B45', height: '40px' }}
        onClick={onClick}
      />
    );
  };
  const ArrowRight = (props: any) => {
    const { className, style, onClick } = props;

    return (
      <ArrowRightIcon
        className={className}
        style={{ ...style, display: 'block', color: '#222B45', height: '40px' }}
        onClick={onClick}
      />
    );
  };
  const settings = {
    centerMode: true,
    centerPadding: '0px',
    adaptiveHeight: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <React.Fragment>
      <Slider className="overviewTilesSlider"  {...settings}>
        {children}
      </Slider>
    </React.Fragment>
  );
};

export default SlickSlider;
