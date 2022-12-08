import React from 'react';
import './carousel.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import BoraBora from '../../assets/borabora.jpg';
import BoraBora2 from '../../assets/borabora2.jpg';
import Maldives from '../../assets/maldives2.jpg';
import Maldives1 from '../../assets/maldives.jpg';

const carouselData = [
  {
    imgUrl: BoraBora,
  },
  {
    imgUrl: BoraBora2,
  },
  {
    imgUrl: Maldives,
  },
  {
    imgUrl: Maldives1,
  },
]

const settings = {
    infinite : true,
    slideToShow : 4,
    lazyLoad : true,
    dots : true,
    swipeToSlide : true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive : [
      {
        breakpoint : 2048,
        settings : {
          slidesToShow : 3,
          slidesToScrow : 3,
          infinite : true,
          dots : true,
        }
      },
      {
        breakpoint : 1024,
        settings : {
          slidesToShow : 3,
          slidesToScrow : 3,
          infinite : true,
          dots : true,
        }
      },
      {
        breakpoint : 600,
        settings : {
          slidesToShow : 2,
          slidesToScrow : 2,
          initialSlide : 2,
          dots: false,
        }
      },
      {
        breakpoint : 428,
        settings : {
          slidesToShow : 1,
          slidesToScrow : 1,
          dots: false,
        }
      }
    ],
    // afterChange: function(index) {
    //   console.log(
    //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //   );
    // }
  };




const Carousel = () => {
  return (
    <div id='carousel' className='container'>
      <Slider {...settings} className='carousel'>
        {
          carouselData.map((item, index) => (
            <div key={index}>
              <img src={item.imgUrl} alt="/" />
              {/* <p></p> */}
            </div>
          ))
        }
      </Slider>
    </div>
  )
}

export default Carousel