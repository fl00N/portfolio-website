import { useEffect, useRef, useState } from 'react';
import './Projects.css';
import { assets } from '../../assets/assets'

const Projects = ({ onHoverChange, onHover }) => {
  const [isVisible, setIsVisible] = useState({
    scrollText: false,
    casesTitle: false,
  });

  const scrollTextRef = useRef(null);
  const casesTitleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === scrollTextRef.current) {
              setIsVisible((prevState) => ({
                ...prevState,
                scrollText: true,
              }));
            } else if (entry.target === casesTitleRef.current) {
              setIsVisible((prevState) => ({
                ...prevState,
                casesTitle: true,
              }));
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.95,
      }
    );

    if (scrollTextRef.current) observer.observe(scrollTextRef.current);
    if (casesTitleRef.current) observer.observe(casesTitleRef.current);

    return () => {
      if (scrollTextRef.current) observer.unobserve(scrollTextRef.current);
      if (casesTitleRef.current) observer.unobserve(casesTitleRef.current);
    };
  }, []);

  return (
    <div id='projects' className='projects'>
      <div ref={scrollTextRef} className='scroll'>
        <ul><li><span className={`works ${isVisible.scrollText ? 'visible' : ''}`}>My Works</span></li></ul>
        <ul aria-hidden="true"><li><span className={`works ${isVisible.scrollText ? 'visible' : ''}`}>My Works</span></li></ul>
      </div>
      <h1 ref={casesTitleRef} className={`cases ${isVisible.casesTitle ? 'visible' : ''}`}>PET projects</h1>

      <ul id="cards">
        <li className="card" id="card-1">
          <div className="card-content">
            <div>
              <h2>Food Delivery</h2>
              <p className='desc'>This project is a food delivery app developed using React. It is primarily designed to practice and gain experience in web application development.</p>
              <div className='buttons'>
                <a 
                  href='https://learn-react-food-delivery-project.vercel.app/' 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='live-demo'
                >
                  Live Demo
                </a>
                <a               
                  onMouseEnter={() => onHover(true)}
                  onMouseLeave={() => onHover(false)} 
                  href='https://github.com/fl00N/learn-react-food-delivery-project' 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='github'
                >
                  <img src={assets.github_icon} alt=''/>
                  Github
                </a>
              </div>
            </div>
            <a 
              className='link' 
              href='https://learn-react-food-delivery-project.vercel.app/'
              target="_blank" 
              rel="noopener noreferrer" 
            >
              <figure 
                onMouseEnter={() => onHoverChange(true)}
                onMouseLeave={() => onHoverChange(false)}
              >
                <img src="/food_del.png" alt="card-one" />
              </figure>
            </a>
          </div>
        </li>
        <li className="card" id="card-2">
          <div className="card-content">
            <div>
              <h2>Spotify Clone</h2>
              <p className='desc'>This project is a Spotify clone developed using React. It is primarily designed to practice and gain experience in web application development.</p>
              <div className='buttons'>
                <a 
                  href='https://learn-react-spotify-clone-project.vercel.app/' 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='live-demo'
                >
                  Live Demo
                </a>
                <a               
                  onMouseEnter={() => onHover(true)}
                  onMouseLeave={() => onHover(false)} 
                  href='https://github.com/fl00N/learn-react-spotify-clone-project' 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='github'
                >
                  <img src={assets.github_icon} alt=''/>
                  Github
                </a>
              </div>
            </div>
            <a 
              className='link'
              href='https://learn-react-spotify-clone-project.vercel.app/'
              target="_blank" 
              rel="noopener noreferrer"
            >
              <figure 
                onMouseEnter={() => onHoverChange(true)}
                onMouseLeave={() => onHoverChange(false)}
              >
                <img src="/spotify.png" alt="card-two" />
              </figure>
            </a>
          </div>
        </li>
        <li className="card" id="card-3">
          <div className="card-content">
            <div>
              <h2>Chat App</h2>
              <p className='desc'>This project is a chat application developed using React. It is primarily designed to practice and gain experience in web application development.</p>
              <div className='buttons'>
                <a 
                  href='https://learn-react-chat-app.vercel.app/' 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='live-demo'
                >
                  Live Demo
                </a>
                <a               
                  onMouseEnter={() => onHover(true)}
                  onMouseLeave={() => onHover(false)} 
                  href='https://github.com/fl00N/learn-react-chat-app' 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='github'
                >
                  <img src={assets.github_icon} alt=''/>
                  Github
                </a>
              </div>
            </div>


            <a 
              className='link' 
              href='https://learn-react-chat-app.vercel.app/'
              target="_blank" 
              rel="noopener noreferrer" 
            >
              <figure 
                onMouseEnter={() => onHoverChange(true)}
                onMouseLeave={() => onHoverChange(false)}
              >
                <img src="chat_app.png" alt="card-three" />
              </figure>
            </a>
          </div>
        </li>
        <li className="card" id="card-4">
          <div className="card-content">
            <div>
              <h2>AI Chat</h2>
              <p className='desc'>This project is an AI chat application developed using React. It is primarily designed to practice and gain experience in web application development.</p>
              <div className='buttons'>
                <a 
                  href='https://learn-react-ai-chat.vercel.app/' 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='live-demo'
                >
                  Live Demo
                </a>
                <a               
                  onMouseEnter={() => onHover(true)}
                  onMouseLeave={() => onHover(false)} 
                  href='https://github.com/fl00N/learn-react-food-delivery-project' 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='github'
                >
                  <img src={assets.github_icon} alt=''/>
                  Github
                </a>
              </div>
            </div>

            <a className='link' href='https://learn-react-ai-chat.vercel.app/'>
              <figure 
                onMouseEnter={() => onHoverChange(true)}
                onMouseLeave={() => onHoverChange(false)}
              >
                <img src="ai_chat.png" alt="card-four" />
              </figure>
            </a>
          </div>
        </li>
      </ul>

      <div id="custom-cursor" className='cursor'></div>
    </div>
  );
}

export default Projects;
