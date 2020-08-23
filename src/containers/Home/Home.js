import React, { useRef, useEffect } from 'react';
import './Home.scss';

import { TweenMax, Power3 } from 'gsap';
// import gsap from 'gsap';
import Section from '../../components/Section';
import Footer from '../../components/Footer';
import GithubRepo from '../../components/GithubRepo';
import StrokeAnimationGhofrane from '../../components/StrokeAnimationText';
import Title from '../../components/Title';

import { Link } from 'react-router-dom';

function Home() {
   // let h0 = useRef(null);
   let fadeUp = useRef(null);
   let h3 = useRef(null);

   useEffect(() => {
      TweenMax.staggerFrom(
         [fadeUp, h3],
         1,
         { opacity: 0, y: 15, ease: Power3.easeInOut },
         0.8
      );
   }, []);

   return (
      <div className='Home' id='up'>
         <div className='container'>
            <div className='wrapper'>
               <div className='main'>
                  <StrokeAnimationGhofrane />
                  <div className='main-text'>
                     <h1
                        ref={(el) => {
                           fadeUp = el;
                        }}
                     >
                        Website and user interface designer
                     </h1>

                     {/* <h1
                        ref={(el) => {
                           fadeUp = el;
                        }}
                     >
                        Front-End Developer
                     </h1>

                     <p
                        ref={(el) => {
                           fadeUp = el;
                        }}
                     >
                        A front end web developer and interface designer — who
                        builds UX rich, accessible & performant websites.
                     </p> */}
                  </div>
                  <div
                     ref={(el) => {
                        h3 = el;
                     }}
                     className='link-text'
                  >
                     <h2>View Projects</h2>
                     <p>or</p>
                     <h2>
                        <Link className='link' to='/about'>
                           Read About Me
                        </Link>
                     </h2>
                  </div>
               </div>
               <div className='fadeIn'>

                  <Title
                     title='Progects Section'
                     text='Lorem ipsum dolor sit amet'
                  />
                  <Section />
               </div>
               <Title
                  title='Open Source Exercices'
                  text='github Repositories'
               />
               <GithubRepo />
               {/* <StrokeAnimationGhofrane /> */}

               <script
                  src='https://apps.elfsight.com/p/platform.js'
                  defer
               ></script>
               <div class='elfsight-app-707953c8-a7ae-4de5-afb2-55b1c1b0106f'></div>
               <Footer />
            </div>
         </div>
         <a className='up' href='#up'> UP</a>
      </div>
   );
}

export default Home;
