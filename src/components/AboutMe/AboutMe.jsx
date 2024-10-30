import './AboutMe.css';
import Skills from '../Skills/Skills'
import transition from '../../transition'
import Navbar from '../Navbar/Navbar';

const AboutMe = ({ scrollYProgress }) => {
  return (
    <div>
      <Navbar />

      <div className="aboutMe">
        <h1  className='aboutText'>
          About <span  className='meText'>Me</span>
        </h1>
        <div id='about' className='textWithModel'>
          <div className="textAboutMe">
            <p>
              I am an 18-year-old
              <br />
              aspiring Front-End
              <br /> 
              Developer with a 
              <br />
              strong passion for 
              <br />
              web development.
            </p>
          </div>
        </div>

      </div>

      <Skills />
    </div>
  );
};

export default transition(AboutMe);
