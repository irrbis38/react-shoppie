const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logo">
            <a href="https://rs.school/js/" target="_blank" rel="noreferrer">
              <img src="/icons/rsschool.svg" alt="rsschool" />
            </a>
          </div>
          <div className="footer__info">
            © 2022 <span>Shoppie</span> All rights reserved
          </div>
          <div className="footer__repo">
            <a
              href="https://github.com/irrbis38/shoppie"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/icons/github.svg" alt="repo" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
