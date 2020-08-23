import React from 'react';
import './style.scss';

import logosData from '../../assets/data/logosData';
import Footer from '../../components/Footer';
import Title from '../../components/Title/index';


import { motion } from 'framer-motion';

const transition = {
   duration: 0.6,
   ease: [0.43, 0.13, 0.23, 0.96],
   opacity: 0,
};

const Logos = () => {
   return (
      <div>
            <Title title ='My logos' text='pswlpwsjijdodwokdw'/>
         <div className='logos'>
            <div className='section-grid'>
               {logosData.map((data, id) => (
                  <div className='container'>
                     <div key={id} className='wrapper'>
                        <motion.img
                           transition={transition}
                           whileHover={{ scale: 1.2 }}
                           src={data.src}
                           width='100%'
                           height='100%'
                           alt={data.name}
                        />
                     </div>
                     <div className='description'>
                        <h2>{data.name}</h2>
                        <p> {data.description} </p>
                        <a
                           className='project-link'
                           href={data.url}
                           target='_blank'
                           rel='noopener noreferrer'
                        >
                           See case study
                        </a>
                     </div>
                  </div>
               ))}
            </div>
            <span>Logos.</span>
         </div>
         <Footer />
      </div>
   );
};

export default Logos;
