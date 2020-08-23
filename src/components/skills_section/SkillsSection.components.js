import React from 'react';
import './SkillsSection.style.scss';

import codingImage from '../../assets/images/safar-safarov-MSN8TFhJ0is-unsplash.jpg';

function SkillsSection() {
   return (
      <div>
         <section>
            <div className='grid-12 project project-left'>
               <div className='box'>
                  <img src={codingImage} alt='coding-image' />
               </div>
               <div className='project-info'>
                  <p className='small-title'>Identity // Websile // Print</p>
                  <h4>This is the firct project</h4>
                  <a className='project-link' href=''>
                     See case study
                  </a>
               </div>
            </div>
         </section>
         <section>
            <div className='grid-12 project project-right'>
               <div className='box'>
                  <img src={codingImage} alt='coding-image' />
               </div>
               <div className='project-info'>
                  <p className='small-title'>Identity / Websile / Print</p>
                  <h4>This is the firct project</h4>
                  <a className='project-link' href=''>
                     See case study
                  </a>
               </div>
            </div>
         </section>
      </div>
   );
}

export default SkillsSection;
