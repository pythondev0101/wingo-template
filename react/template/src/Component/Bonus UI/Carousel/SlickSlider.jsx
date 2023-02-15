import React from 'react';
import { CardBody, Card, CardHeader } from 'reactstrap';
import { CarouselsData } from '../../../Data/Bonus-ui';
import Image from '../../../CommonElements/Media';
import Slider from 'react-slick';
import { H5 } from '../../../AbstractElements';

export const SlickSlider = ({ slides, rtl, title, lazyLoad, autoplay, focusOnSelect }) => {

  var settings = {
    dots: true,
    infinite: true,
    autoplay: autoplay,
    speed: 100,
    arrows: false,
    slidesToShow: slides,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoPlay: true,
    centerPadding: '10px',
    centerMode: false,
    rtl: rtl,
    focusOnSelect: focusOnSelect,
    lazyLoad: lazyLoad,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Card>
      <CardHeader className='pb-0'>
        <H5>{title}</H5>
      </CardHeader>
      <CardBody className='slider-spacing'>
        <Slider {...settings} >
          {
            CarouselsData.map((item) =>
              <div className="item" key={item.id}>
                <Image attrImage={{ src: `${item.img}`, alt: '', className: 'img-fluid' }} />
              </div>
            )
          }
        </Slider>
      </CardBody>
    </Card>
  );
};

export default SlickSlider;