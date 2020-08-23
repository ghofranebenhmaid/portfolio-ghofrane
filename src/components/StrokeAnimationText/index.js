import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

import './style.scss';

const StrokeAnimationGhofrane = () => {
   const container = useRef(null);

   useEffect(() => {
      lottie.loadAnimation({
         container: container.current,
         renderer: 'svg',
         loop: false,
         autoplay: true,
         animationData: require('../../assets/data/StrokeAnimationGhofrane.json'),
      });
   }, []);
   return (
      <div className='StrokeAnimation'>
         <div className='container' ref={container}></div>
      </div>
   );
};

export default StrokeAnimationGhofrane;
