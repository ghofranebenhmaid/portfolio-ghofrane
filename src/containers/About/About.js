import React from 'react';
import './About.scss';

import Timeline from '../../components/Timeline/Timeline';
import Footer from '../../components/Footer/index';
import ProfileDescription from '../../components/ProfileDescription';

function About() {
   return (
      <div>
         <div className='about'>
            <div className='container'>
               <span className='background'>About Me.</span>
               <div className='wrapper'>
                  <ProfileDescription />
                  <div className='skils'>
                     <div className='skils-section'>
                        <h3>Desing</h3>
                        <h2>
                           Art direction<p>/</p>Web & mobile
                           <p>/</p>Brand identity<p>/</p>UX & UI
                           <p>/</p>
                           Iconography<p>/</p> Animation<p>/</p>
                           Photography
                        </h2>
                     </div>
                     <div className='skils-section'>
                        <h3>Technologies</h3>
                        <h2>
                           React <p> / </p> Javascript <p>/</p>
                           Node.js
                           <p> / </p> Express
                           <p>/</p> Wordpress <p>/</p>
                           PHP <p> / </p> Html5 <p>/</p>
                           CSS3 <p> / </p> Sass
                        </h2>
                     </div>
                  </div>
                  <div className='timeline'>
                     <h1>Time Line</h1>
                     <Timeline />
                  </div>
                  <Footer />
               </div>
            </div>
         </div>
      </div>
   );
}

export default About;
