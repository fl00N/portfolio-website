import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts';
import Main from './components/Main/Main';
import './App.css';

const App = () => {

  const location = useLocation();

  return (
    <>
          <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
              <Route path='/' element={<Main />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/contacts' element={<Contacts />} />
            </Routes>
          </AnimatePresence>
        </>
  );
};

export default App;
