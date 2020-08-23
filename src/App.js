import React from 'react';
import './App.scss';

import Header from '../src/components/Header/Header.components';
import Home from '../src/containers/Home/Home';
import About from '../src/containers/About/About';
import Work from '../src/containers/Work/Work';
import Logos from '../src/containers/Logos-page';

import { AnimatePresence } from 'framer-motion';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
   return (
      <Router>
         <div className='App'>
            <Header />
            <AnimatePresence initial={true} exitBeforeEnter>
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                   <Route exact path='/work' component={Work} /> 
                   <Route exact path='/logos' component={Logos} />
                  {/* <Route exact path='/contact' component={Contact} />
                  <Route exact path='/home' component={Home2} /> */}
               </Switch>
            </AnimatePresence>
         </div>
      </Router>
   );
}



export default App;
