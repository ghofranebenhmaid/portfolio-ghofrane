import React, { useRef, useEffect } from 'react';
import { TweenMax, Power3, gsap } from 'gsap';

import { Link } from 'react-router-dom';

import './style.scss';
import image1 from '../../assets/images/safar-safarov-MSN8TFhJ0is-unsplash.jpg';
import logoDesign from '../../assets/images/brad-neathery-mGH253KbfaY-unsplash.jpg';
import photography from '../../assets/images/alex-wong-m5D1sNgKgMQ-unsplash.jpg';

import { motion } from 'framer-motion';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const transition = {
   duration: 0.6,
   ease: [0.43, 0.13, 0.23, 0.96],
   opacity: 0,
};
const data = [
   { id: 1, src: image1, name: 'logos', title: '#Logos ' },
   { id: 2, src: logoDesign, name: 'Coding', title: '#Coding' },
   { id: 3, src: photography, name: 'img3', title: '#Photography' },
   { id: 3, src: image1, name: 'img3', title: '#Typography' },
];

function Section() {
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
               ease: Power3.easeOut,
               y: -50,
               scrollTrigger: {
                  // id: `section-${index + 1}`,
                  trigger: el,
                  start: 'top center+=350',
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
      <div className='section-design'>
         <div className='section-grid'>
            <div className='container'>
               {data.map((data, id) => (
                  <div key={id} className='wrapper fadeIn' ref={addToRefs}>
                     <Link to={data.name}>
                        <motion.img
                           transition={transition}
                           whileHover={{ scale: 1.03 }}
                           src={data.src}
                           width='100%'
                           height='100%'
                           alt={data.name}
                        />
                        <div className='project-info'>
                           {/* <p className='small-title'>
                           Identity // Websile // Print
                        </p> */}
                           <h4>{data.title}</h4>
                           <a className='project-link' href=''>
                              See case
                           </a>
                        </div>
                     </Link>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}

export default Section;
