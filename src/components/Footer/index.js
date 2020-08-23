import React from 'react';
import './style.scss';
import { FaGithub, FaInstagram, FaLinkedin, FaBehance } from 'react-icons/fa';

function Footer() {
   return (
      <div>
         <div class='footer'>
            <div class='social-icons'>
               <ul>
                  <li>
                     <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://www.linkedin.com/in/ghofranebenhmaid/'
                        class='social-icon'
                     >
                        {/* <i class='fa fa-linkedin'></i> */}
                        <FaLinkedin />
                     </a>
                  </li>

                  <li>
                     <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://github.com/benhmaid'
                        class='social-icon'
                     >
                        <FaGithub />
                     </a>
                  </li>
                  <li>
                     <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://www.instagram.com/ghofranbenhmaid/'
                        class='social-icon'
                     >
                        <FaInstagram />
                     </a>
                  </li>
                  <li>
                     <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://www.behance.net/Ghofranebh'
                        class='social-icon'
                     >
                        <FaBehance />
                     </a>
                  </li>
               </ul>
            </div>
            {/* <hr class='line' /> */ }
            <span>/</span>
            <div>
               <h4>&copy; 2020 Ghofrane Ben Hmaid</h4>
            </div>
         </div>
      </div>
   );
}

export default Footer;
