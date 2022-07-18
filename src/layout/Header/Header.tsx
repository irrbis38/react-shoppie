import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link className="header__logo" to="/">
            Shoppie
          </Link>
          <nav className="header__navbar">
            <ul className="header__navigation">
              <li className="header__link">
                <Link to="/">Home</Link>
              </li>
              <li className="header__link">
                <Link to="/about">About</Link>
              </li>
              <li className="header__link">
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </nav>
          <div className="header__panel">
            <div className="header__favorites" title="Favorites products">
              <Link to="/favorites">
                <i className="material-icons">favorite</i>
              </Link>
            </div>
            <Link className="header__cart" to="/cart">
              <span>Cart</span>
              <i className="material-icons">shopping_cart</i>
              <span className="header__amount">88</span>
            </Link>
            <Link className="header__loggin" to="/login">
              <span>LogIn</span>
              <i className="material-icons">person_add</i>
            </Link>
          </div>
          <div className="header__burger">
            <i className="material-icons">menu</i>
          </div>
          <div className="burger__menu">
            <div className="burger__header">
              <div className="burger__logo">Shoppie</div>
              <div className="burger__close">
                <i className="material-icons">close</i>
              </div>
            </div>
            <nav className="burger__navbar">
              <ul className="burger__navigation">
                <li className="burger__link">
                  <Link to="/">Home</Link>
                </li>
                <li className="burger__link">
                  <Link to="/about">About</Link>
                </li>
                <li className="burger__link">
                  <Link to="/products">Products</Link>
                </li>
              </ul>
            </nav>
            <div className="burger__panel">
              <div className="burger__favorites">
                <Link to="/favorites">
                  <i className="material-icons">favorite</i>
                </Link>
              </div>
              <Link className="burger__cart" to="/cart">
                <span>Cart</span>
                <i className="material-icons">shopping_cart</i>
                <span className="burger__amount">88</span>
              </Link>
              <Link className="burger__loggin" to="/login">
                <span>LogIn</span>
                <i className="material-icons">person_add</i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
