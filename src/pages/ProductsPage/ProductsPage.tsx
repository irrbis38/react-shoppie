import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import CardItem from "../../components/CardItem/CardItem";
import CardItemIcons from "../../components/CardItemIcons/CardItemIcons";

const ProductsPage: React.FC<{ products: Products[] | null }> = ({
  products,
}) => {
  const [isIconsMode, setIsIconsMode] = useState<boolean>(true);

  const [sortedProducts, setSortedProducts] = useState<Products[] | null>(() =>
    products ? products.sort((a, b) => a.price - b.price) : []
  );
  const [sortByDirection, setSortByDirection] =
    useState<string>("price-lowest");
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchedProducts, setSearchedProducts] = useState<Products[] | null>(
    sortedProducts
  );

  const selectRef = useRef<HTMLSelectElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (sortByDirection === "price-lowest" && products) {
      const sProducts = products.sort((a, b) => a.price - b.price);
      setSortedProducts(sProducts);
    } else if (sortByDirection === "price-highest" && products) {
      const sProducts = products.sort((a, b) => b.price - a.price);
      setSortedProducts(sProducts);
    }
  }, [sortByDirection, products]);

  useEffect(() => {
    if (searchRef && searchRef.current) {
      searchRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (searchValue === "") {
      setSearchedProducts(sortedProducts);
    } else {
      const sProducts = sortedProducts?.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      if (sProducts) {
        setSearchedProducts(sProducts);
      }
    }
  }, [searchValue, sortedProducts]);

  const sortByDirectionHandler: selectHandler = () => {
    if (selectRef && selectRef.current) {
      setSortByDirection(selectRef.current.value);
    }
  };

  const searchHandler = () => {
    if (searchRef && searchRef.current) {
      setSearchValue(searchRef.current.value);
    }
  };

  const productsList = searchedProducts?.map((product) => (
    <CardItem
      key={product.id}
      name={product.name}
      price={product.price}
      imageUrl={product.imagesUrl[0]}
    />
  ));

  const productsIcons = searchedProducts?.map((product) => (
    <CardItemIcons
      key={product.id}
      name={product.name}
      price={product.price}
      imageUrl={product.imagesUrl[0]}
    />
  ));

  return (
    <>
      <section className="navigation">
        <div className="container">
          <h2 className="navigation__link">
            <Link to="/">Home</Link>
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
                      autoComplete="off"
                      value={searchValue}
                      ref={searchRef}
                      onChange={searchHandler}
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
                      Nuts
                    </button>
                    <button
                      type="button"
                      name="category"
                      className="filters__category"
                    >
                      Exotic
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
                  <div
                    className={`grid__mode ${isIconsMode ? "active" : ""}`}
                    onClick={() => setIsIconsMode(true)}
                  >
                    <i className="material-icons">apps</i>
                  </div>
                  <div
                    className={`list__mode ${!isIconsMode ? "active" : ""}`}
                    onClick={() => setIsIconsMode(false)}
                  >
                    <i className="material-icons">list</i>
                  </div>
                </div>
                <p className="catalog__info">
                  {searchedProducts?.length} Products Found
                </p>
                <div className="catalog__line"></div>
                <form className="catalog__sort">
                  <label htmlFor="sortby" className="catalog__label">
                    Sort By
                  </label>
                  <select
                    name="sortby"
                    id="sortby"
                    className="catalog__select"
                    value={sortByDirection}
                    onChange={sortByDirectionHandler}
                    ref={selectRef}
                  >
                    <option value="price-lowest">price (lowest)</option>
                    <option value="price-highest">price (highest)</option>
                    <option value="name-a">name (a - z)</option>
                    <option value="name-z">name (z - a)</option>
                  </select>
                </form>
              </div>

              {isIconsMode ? (
                <div className="cards__list list">{productsList}</div>
              ) : (
                <div className="cards__list icons">{productsIcons}</div>
              )}
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
