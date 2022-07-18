const ProductsPage: React.FC = () => {
  return (
    <>
      <section className="navigation">
        <div className="container">
          <h2 className="navigation__link">
            <a href="/index.html">Home</a>
            <span>/</span>Products
          </h2>
        </div>
      </section>
      <section className="products">
        <div className="container">
          <div className="products__wrapper">
            <aside className="filters">
              <div className="filters__panel">
                <form className="filters__form">
                  <div className="filters__item">
                    <input
                      type="search"
                      name="search"
                      placeholder="Search"
                      className="filters__search"
                    />
                  </div>

                  <div className="filters__item">
                    <h3 className="filters__title">Category</h3>
                    <button
                      type="button"
                      name="category"
                      className="filters__category active"
                    >
                      All
                    </button>
                    <button
                      type="button"
                      name="category"
                      className="filters__category"
                    >
                      Fruits
                    </button>
                    <button
                      type="button"
                      name="category"
                      className="filters__category"
                    >
                      Vegetables
                    </button>
                    <button
                      type="button"
                      name="category"
                      className="filters__category"
                    >
                      Mushrooms
                    </button>
                    <button
                      type="button"
                      name="category"
                      className="filters__category"
                    >
                      Berries
                    </button>
                    <button
                      type="button"
                      name="category"
                      className="filters__category"
                    >
                      Cuts & Sprouts
                    </button>
                    <button
                      type="button"
                      name="category"
                      className="filters__category"
                    >
                      Organic
                    </button>
                  </div>

                  <div className="filters__item">
                    <h3 className="filters__title">Country</h3>
                    <select name="country" className="filters__country">
                      <option value="all">All</option>
                      <option value="poland">Poland</option>
                      <option value="italy">Italy</option>
                      <option value="spain">Spain</option>
                      <option value="france">France</option>
                    </select>
                  </div>

                  <div className="filters__item">
                    <h3 className="filters__title">Colors</h3>
                    <div className="filters__colors">
                      <button
                        name="color"
                        data-color="all"
                        className="all__btn active"
                      >
                        All
                      </button>
                      <button
                        name="color"
                        className="color__btn color__btn--red"
                        data-color="#ff0000"
                      >
                        <img src="/assets/icons/check.svg" alt="check" />
                      </button>
                      <button
                        name="color"
                        className="color__btn color__btn--green"
                        data-color="#00ff00"
                      >
                        <img src="/assets/icons/check.svg" alt="check" />
                      </button>
                      <button
                        name="color"
                        className="color__btn color__btn--blue"
                        data-color="#0000ff"
                      >
                        <img src="/assets/icons/check.svg" alt="check" />
                      </button>
                      <button
                        name="color"
                        className="color__btn color__btn--black"
                        data-color="#000"
                      >
                        <img src="/assets/icons/check.svg" alt="check" />
                      </button>
                      <button
                        name="color"
                        className="color__btn color__btn--yellow"
                        data-color="#ffb900"
                      >
                        <img src="/assets/icons/check.svg" alt="check" />
                      </button>
                    </div>
                  </div>

                  <div className="filters__item">
                    <h3 className="filters__title">Price</h3>
                    <p className="filters__price">$8000.00</p>
                    <input
                      type="range"
                      name="price"
                      min="0"
                      max="10000"
                      value="8000"
                      className="filters__range"
                    />
                  </div>

                  <div className="filters__item shipping">
                    <label htmlFor="shipping" className="shipping__label">
                      free shipping
                    </label>
                    <input
                      type="checkbox"
                      name="shipping"
                      id="shipping"
                      className="shipping__input"
                    />
                  </div>
                </form>
                <button type="button" className="filters__clear">
                  clear filters
                </button>
              </div>
            </aside>
            <section className="catalog">
              <div className="catalog__panel">
                <div className="catalog__mode">
                  <div className="grid__mode active">
                    <i className="material-icons">apps</i>
                  </div>
                  <div className="list__mode">
                    <i className="material-icons">list</i>
                  </div>
                </div>
                <p className="catalog__info">23 Products Found</p>
                <div className="catalog__line"></div>
                <form className="catalog__sort">
                  <label htmlFor="sortby" className="catalog__label">
                    Sort By
                  </label>
                  <select name="sortby" id="sortby" className="catalog__select">
                    <option value="price-lowest">price (lowest)</option>
                    <option value="price-highest">price (highest)</option>
                    <option value="name-a">name (a - z)</option>
                    <option value="name-z">name (z - a)</option>
                  </select>
                </form>
              </div>
              <div className="cards__list list active">
                <div className="card__item">
                  <div className="card__img">
                    <div className="overlay">
                      <a
                        href="/pages/productsItem/productsItem.html"
                        className="show__more"
                      >
                        <svg
                          stroke="#fff"
                          fill="#fff"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                        </svg>
                      </a>
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1604238401172-a5c5f8d044ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                      alt="fruit"
                    />
                  </div>
                  <div className="card__description">
                    <p className="card__title">Bananas</p>
                    <p className="card__price">$599.99</p>
                  </div>
                </div>

                <div className="card__item">
                  <div className="card__img">
                    <div className="overlay">
                      <a
                        href="/pages/productsItem/productsItem.html"
                        className="show__more"
                      >
                        <svg
                          stroke="#fff"
                          fill="#fff"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                        </svg>
                      </a>
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1604238401172-a5c5f8d044ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                      alt="fruit"
                    />
                  </div>
                  <div className="card__description">
                    <p className="card__title">Bananas</p>
                    <p className="card__price">$599.99</p>
                  </div>
                </div>

                <div className="card__item">
                  <div className="card__img">
                    <div className="overlay">
                      <a
                        href="/pages/productsItem/productsItem.html"
                        className="show__more"
                      >
                        <svg
                          stroke="#fff"
                          fill="#fff"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                        </svg>
                      </a>
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1604238401172-a5c5f8d044ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                      alt="fruit"
                    />
                  </div>
                  <div className="card__description">
                    <p className="card__title">Bananas</p>
                    <p className="card__price">$599.99</p>
                  </div>
                </div>
              </div>

              <div className="cards__list icons">
                <div className="card__item">
                  <div className="card__img">
                    <img
                      src="https://images.unsplash.com/photo-1604238401172-a5c5f8d044ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                      alt="fruit"
                    />
                  </div>
                  <div className="card__description">
                    <p className="card__title">Bananas</p>
                    <p className="card__price">$599.99</p>
                    <p className="card__text">
                      Fruits and vegetables are low in fat, salt and sugar. They
                      are a good source of dietary fibre. As part of a
                      well-balanced, regular diet and a healthy, active
                      lifestyle.
                    </p>
                    <a
                      className="card__details"
                      href="/products/recd1jIVIEChmiwhe"
                    >
                      Details
                    </a>
                  </div>
                </div>
                <div className="card__item">
                  <div className="card__img">
                    <img
                      src="https://images.unsplash.com/photo-1604238401172-a5c5f8d044ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                      alt="fruit"
                    />
                  </div>
                  <div className="card__description">
                    <p className="card__title">Bananas</p>
                    <p className="card__price">$599.99</p>
                    <p className="card__text">
                      Fruits and vegetables are low in fat, salt and sugar. They
                      are a good source of dietary fibre. As part of a
                      well-balanced, regular diet and a healthy, active
                      lifestyle.
                    </p>
                    <a
                      className="card__details"
                      href="/products/recd1jIVIEChmiwhe"
                    >
                      Details
                    </a>
                  </div>
                </div>
                <div className="card__item">
                  <div className="card__img">
                    <img
                      src="https://images.unsplash.com/photo-1604238401172-a5c5f8d044ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                      alt="fruit"
                    />
                  </div>
                  <div className="card__description">
                    <p className="card__title">Bananas</p>
                    <p className="card__price">$599.99</p>
                    <p className="card__text">
                      Fruits and vegetables are low in fat, salt and sugar. They
                      are a good source of dietary fibre. As part of a
                      well-balanced, regular diet and a healthy, active
                      lifestyle.
                    </p>
                    <a
                      className="card__details"
                      href="/products/recd1jIVIEChmiwhe"
                    >
                      Details
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
