import React from 'react';
import './Work.scss';
import Footer from '../../components/Footer';
import Projects from '../../components/Work';

const Work = () => {
   return (
      <div>
         <div className='work'>
                  <Projects />
            <div className='container'>
               <div className='wrapper'>
                  <Footer />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Work;
