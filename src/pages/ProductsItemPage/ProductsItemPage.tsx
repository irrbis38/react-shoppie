import { Link } from "react-router-dom";
import Navigation from "./../../components/Navigation/Navigation";

const ProductsItemPage: React.FC = () => {
  return (
    <>
      <Navigation pageName="Some Product" level={3} />
      <section className="product">
        <div className="container">
          <Link className="product__back" to="/products">
            back to products
          </Link>
          <div className="product__wrapper">
            <div className="product__carousel">
              <div className="product__img">
                <img
                  src="https://images.unsplash.com/photo-1591206369811-4eeb2f03bc95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="orange"
                />
              </div>
              <div className="product__gallery">
                <div className="gallery__item active">
                  <img
                    src="https://images.unsplash.com/photo-1591206369811-4eeb2f03bc95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="orange"
                  />
                </div>
                <div className="gallery__item">
                  <img
                    src="https://images.unsplash.com/photo-1591206369811-4eeb2f03bc95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="orange"
                  />
                </div>
                <div className="gallery__item">
                  <img
                    src="https://images.unsplash.com/photo-1591206369811-4eeb2f03bc95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="orange"
                  />
                </div>
                <div className="gallery__item">
                  <img
                    src="https://images.unsplash.com/photo-1591206369811-4eeb2f03bc95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="orange"
                  />
                </div>
                <div className="gallery__item">
                  <img
                    src="https://images.unsplash.com/photo-1591206369811-4eeb2f03bc95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="orange"
                  />
                </div>
              </div>
            </div>
            <div className="product__description">
              <h2 className="product__title">Orange</h2>
              <div className="product__range">
                <div className="product__stars">
                  <img
                    src="/react-shoppie/icons/star-full.svg"
                    alt="logo"
                  />
                  <img
                    src="/react-shoppie/icons/star-full.svg"
                    alt="logo"
                  />
                  <img
                    src="/react-shoppie/icons/star-full.svg"
                    alt="logo"
                  />
                  <img
                    src="/react-shoppie/icons/star-half.svg"
                    alt="logo"
                  />
                  <img
                    src="/react-shoppie/icons/star-empty.svg"
                    alt="logo"
                  />
                </div>
                <div className="product__amount">(100 customer reviews)</div>
              </div>
              <div className="product__price">$30.99</div>
              <div className="product__text">
                Fruit is a mature ovary and its associated parts. It usually
                contains seeds, which have developed from the enclosed ovule
                after fertilization, although development without fertilization,
                called parthenocarpy, is known, for example, in bananas.
                Fertilization induces various changes in a flower: the anthers
                and stigma wither, the petals drop off, and the sepals may be
                shed or undergo modifications; the ovary enlarges, and the
                ovules develop into seeds, each containing an embryo plant.
              </div>
              <div className="product__info">
                <div className="product__property">
                  <span className="property__name">Free shipping:</span>
                  <span className="property__value">yes </span>
                </div>
                <div className="product__property">
                  <span className="property__name">Weight per pack:</span>
                  <span className="property__value"> 1kg </span>
                </div>
                <div className="product__property">
                  <span className="property__name">Country:</span>
                  <span className="property__value">Italy </span>
                </div>
                <hr className="property__line" />
                <div className="property__colors">
                  <span className="property__name">Color:</span>
                  <button
                    name="color"
                    className="property__color property__color--yellow active"
                    data-color="#ff0000"
                  >
                    <img
                      src="/react-shoppie/icons/check.svg"
                      alt="check"
                    />
                  </button>
                </div>
              </div>
              <div className="product__order">
                <div className="product__amout">
                  <button className="product__dec">-</button>
                  <span>1</span>
                  <button className="product__inc">+</button>
                </div>
                <button className="product__add">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsItemPage;
