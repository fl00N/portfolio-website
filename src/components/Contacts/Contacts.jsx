import './Contacts.css';
import { assets } from '../../assets/assets'
import transition from '../../transition'

const Contacts = ({ onHoverChange }) => {
    return (
        <footer className="footer">
            <div id='contacts' className="footer-content">
                <div className="footerScroll">
                    <ul><li><span className="footerScrollText">Get in touch</span></li></ul>
                    <ul aria-hidden="true"><li><span className="footerScrollText">Get in touch</span></li></ul>
                </div>       
                <div className="contact-icons">
                    <a
                        onMouseEnter={() => onHoverChange(true)}
                        onMouseLeave={() => onHoverChange(false)}
                        href="https://www.linkedin.com/in/andrii-bondar-178105255/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img src={assets.linkedin_icon} alt="LinkedIn" />
                        LinkedIn
                    </a>

                    <a 
                        onMouseEnter={() => onHoverChange(true)}
                        onMouseLeave={() => onHoverChange(false)}
                        href="https://github.com/fl00N" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img src={assets.github_icon} alt="GitHub" />
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default transition(Contacts);
