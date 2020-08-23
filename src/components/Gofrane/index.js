import React, { useRef } from 'react';
import gsap from 'gsap';
import './style.scss';

import img1 from '../../assets/images/alex-wong-m5D1sNgKgMQ-unsplash.jpg';
import img2 from '../../assets/images/brad-neathery-mGH253KbfaY-unsplash.jpg';
import img3 from '../../assets/images/safar-safarov-MSN8TFhJ0is-unsplash.jpg';

const slides = [
   { name: 'image1', image: img1 },
   { name: 'image2', image: img2 },
   { name: 'image3', image: img3 },
];

const City = () => {
   let cityBackground = useRef(null);
   const handleCity = (city) => {
      gsap.to('.citys', {
         duration: 0,
          background: `url(${city}) center center `,
      });
      gsap.to('.citys', {
         duration: 0.4,
         opacity: 1,
         ease: 'power3.inOut',
      });
      gsap.from('.citys', {
         duration: 1,
         skewY: 0,
         transformOrigin: 'center top',
      });
   };

   const handleCityReturn = () => {
      gsap.to(cityBackground, {
         duration: 0.4,
         skewY: 0,
      });
      gsap.to('.citys', {
         duration: 0.4,
         opacity: 1,
         skewY: 0,
      });
   };
   return (
      <div className='containerCitys'>
         <div className='citys' >
            {slides.map((element) => (
               <ul
                  key={element.name}
                  onMouseEnter={() => {
                     handleCity(element.image);
                  }}
                  onMouseOut={handleCityReturn}
               >
                  <li>{element.name}</li>
                  <div className='img-wrapper' >
                     <img src={ element.image } ref={ (element) => (cityBackground = element) }/>
                  </div>
               </ul>
            ))}
         </div>
      </div>
   );
};

export default City;
