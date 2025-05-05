import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footerContent">
        <p>Building with passion and precision</p>
        <p>© {year} Andrii Bondar. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
