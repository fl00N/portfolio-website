import { useEffect, useState } from 'react';
import './Start.css';

const Start = ({ showScrollMe }) => {
  const [fadeClass, setFadeClass] = useState('');

  useEffect(() => {
    if (!showScrollMe) {
      setFadeClass('fade-out');
    }
  }, [showScrollMe]);

  return (
    <div className='startDiv'>
      <div className='greetingDiv'>
        <p>Hello there!</p>
        <h1>
          I'm Andrii Bondar,
          <br />
          a Front developer
        </h1>
      </div>

        {showScrollMe && (
          <div className={`scrollDiv ${fadeClass}`}>
            <p className="scrollMe">Scroll to read about me</p>
            <div className="scrollIndicator"></div>
          </div>
        )}
    </div>
  );
};

export default Start;
