const FavoritesPage = () => {
  return (
    <>
      <section className="navigation">
        <div className="container">
          <h2 className="navigation__link">
            <a href="/index.html">Home</a>
            <span>/</span>Favorites
          </h2>
        </div>
      </section>
      <section className="favorites">
        <div className="container">
          <div className="favorites__header">
            <p className="favorites__column">Item</p>
            <p className="favorites__column">Price</p>
            <p className="favorites__column">Weight Per Pack</p>
            <p className="favorites__column">Country</p>
            <p className="favorites__column"></p>
          </div>

          <div className="favorites__line"></div>
          <div className="favorites__main">
            <div className="favorites__item">
              <div className="favorites__about">
                <div className="favorites__img">
                  <img
                    src="https://images.unsplash.com/photo-1515681412668-16d6d4a54ab1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                    alt="rasberry"
                  />
                </div>
                <div className="favorites__block">
                  <h3 className="favorites__name">Rasberry</h3>
                  <p className="favorites__small">$30.99</p>
                </div>
              </div>
              <p className="favorites__price">$30.99</p>
              <p className="favorites__quantity">1 kg</p>
              <p className="favorites__sub">Spain</p>
              <button className="favorites__delete">
                <i className="material-icons">delete</i>
              </button>
            </div>
          </div>
          <div className="favorites__line"></div>
          <div className="favorites__nav">
            <a
              href="/pages/products/products.html"
              className="favorites__continue"
            >
              Continue Shopping
            </a>
            <button className="favorites__clear">Clear Favorites List</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FavoritesPage;
