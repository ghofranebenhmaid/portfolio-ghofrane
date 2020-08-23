import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import './style.scss';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Title = ({ title, text }) => {
   const revealRefs = useRef([]);
   revealRefs.current = [];

   useEffect(() => {
      revealRefs.current.forEach((el, index) => {
         gsap.fromTo(
            el,
            {
               autoAlpha: 0,
            },
            {
               duration: 1,
               autoAlpha: 1,
               ease: 'none',
               scrollTrigger: {
                  id: `section-${index + 1}`,
                  trigger: el,
                  start: 'top center+=300',
                  toggleActions: 'play none none reverse',
               },
            }
         );
      });
   }, []);
   const addToRefs = (el) => {
      if (el && !revealRefs.current.includes(el)) {
         revealRefs.current.push(el);
      }
   };
   return (
      <div className='section-title' ref={addToRefs}>
         <p>{text}</p>
         <h1>{title}</h1>
      </div>
   );
};

export default Title;
