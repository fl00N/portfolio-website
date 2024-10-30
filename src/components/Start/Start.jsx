import Shapes from '../3D/Shapes';
import './Start.css';

const Start = () => {
  return (
      <div>
        <div className='startDiv'>
          <Shapes />

          <div className='greetingDiv'>
            <p>Hello there!</p>
            <h1>
              I'm Andrii Bondar,
              <span>a Frontend developer</span>
            </h1>
          </div>
        </div>

        <div className="textUnderStart">
            <p>
              I am <span>an 18-year-old</span>
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
  );
};

export default Start;
