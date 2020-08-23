import React from 'react';
import './style.css';

import WireframesAnim from '../../assets/images/WireframesAnim.gif';
import treasureHunt from '../../assets/images/treasureHunt.png';
import githubIcon from '../../assets/images/svg/github.svg';
import Title from '../Title';

const data = [
   {
      id: 1,
      name: 'Treasure Hunt',
      discription: 'A free Open Source Portfolio for anyone to use for free',
      language: ['HTML', 'SCSS', 'JavaScript', 'React'],
      codeSource: 'https://github.com/ghofranebenhmaid/portfolio',
      src: WireframesAnim,
   },
   {
      id: 1,
      name: 'project 1',
      discription: 'A free Open Source Portfolio for anyone to use for free',
      language: ['HTML', 'SCSS', 'JavaScript', 'React'],
      codeSource: 'https://github.com/ghofranebenhmaid/portfolio',
      src: treasureHunt,
   },
];

function Projects() {
   return (
      <section className='work'>
         <div className='row'>
            {/* <h2>My Work</h2> */}
            <Title title='My Project' text='Coding project' />

            <div className='work__boxes'>
               {data.map((data, id) => (
                  <div className='work__box'>
                     <div key={id} className='work__text'>
                        <h3>{data.name}</h3>
                        <p>{data.discription}</p>

                        <ul className='work__list'>
                           <li>SCSS</li>
                           <li>JavaScript</li>
                           <li>React</li>
                           <li>Nodejs</li>
                        </ul>
                        <div className='work__links'>
                           <a
                              href={data.src}
                              target='_blank'
                              className='link__text'
                           >
                              Visit Site <span>&rarr;</span>
                           </a>

                           <a
                              href={data.codeSource}
                              title='View Source Code'
                              target='_blank'
                           >
                              <img
                                 src={githubIcon}
                                 className='work__code'
                                 alt='GitHub'
                              />
                           </a>
                        </div>
                     </div>
                     <div className='work__image-box'>
                        <img
                           src={data.src}
                           className='work__image'
                           alt='Project 1'
                        />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}

export default Projects;
