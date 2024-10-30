import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts';
import Main from './components/Main/Main'
import './App.css';

const App = () => {

  const location = useLocation();

  return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
          {/* <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
              <Route path='/' element={<Main />} />
              <Route path='/about-me' element={<AboutMe />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/contacts' element={<Contacts />} />
            </Routes>
          </AnimatePresence> */}
          <p style={{fontSize: '100px'}}>Portfolio under reconstruction</p>
        </div>
  );
};

export default App;
