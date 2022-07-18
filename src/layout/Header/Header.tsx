const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <a className="header__logo" href="/index.html">Shoppie</a>
          <nav className="header__navbar">
            <ul className="header__navigation">
              <li className="header__link">
                <a href="./index.html">Home</a>
              </li>
              <li className="header__link">
                <a href="./pages/about/about.html">About</a>
              </li>
              <li className="header__link">
                <a href="./pages/products/products.html">Products</a>
              </li>
            </ul>
          </nav>
          <div className="header__panel">
            <div className="header__favorites" title="Favorites products">
              <a href="./pages/favorites/favorites.html">
                <i className="material-icons">favorite</i>
              </a>
            </div>
            <a className="header__cart" href="./pages/cart/cart.html">
              <span>Cart</span>
              <i className="material-icons">shopping_cart</i>
              <span className="header__amount">88</span>
            </a>
            <a className="header__loggin"  href="./pages/login/login.html">
              <span>LogIn</span>
              <i className="material-icons">person_add</i>
            </a>
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
                  <a href="./index.html">Home</a>
                </li>
                <li className="burger__link">
                  <a href="./pages/about/about.html">About</a>
                </li>
                <li className="burger__link">
                  <a href="./pages/products/products.html">Products</a>
                </li>
              </ul>
            </nav>
            <div className="burger__panel">
              <div className="burger__favorites">
                <a href="./pages/favorites/favorites.html">
                  <i className="material-icons">favorite</i>
            </a>
              </div>
              <a className="burger__cart"  href="./pages/cart/cart.html">
                <span>Cart</span>
                <i className="material-icons">shopping_cart</i>
                <span className="burger__amount">88</span>
              </a>
              <a className="burger__loggin"  href="./pages/login/login.html">
                <span>LogIn</span>
                <i className="material-icons">person_add</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;