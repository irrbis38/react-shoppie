import { Link } from "react-router-dom";
import CardItem from "../../components/CardItem/CardItem";

const HomePage: React.FC<{ products: Products[] }> = ({ products }) => {
  return (
    <>
      <section className="intro">
        <div className="container">
          <div className="intro__wrapper">
            <div className="intro__description">
              <h1 className="intro__title">
                Add bright colors
                <br />
                to your life
              </h1>
              <p className="intro__subtitle">
                Fruit and vegetables should be an important part of your daily
                diet. They are naturally good and contain vitamins and minerals
                that can help to keep you healthy. They can also help protect
                against some diseases.
              </p>
              <Link to="/products" className="intro__btn">
                SHOP NOW
              </Link>
            </div>
            <div className="intro__image">
              <div className="intro__block"></div>
              <img
                className="intro__first"
                src="/react-shoppie/images/intro-bg1.jpg"
                alt="fruits and vegetables"
              />
              <img
                className="intro__second"
                src="/react-shoppie/images/intro-bg2.jpg"
                alt="fruits and vegetables"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="latest">
        <div className="container">
          <div className="latest__wrapper">
            <h2 className="latest__title">Latest products</h2>
            <div className="latest__line"></div>
            <div className="cards__list">
              {products ? (
                products
                  .filter((item, index) => index < 3)
                  .map((product) => (
                    <CardItem
                      key={product.id}
                      name={product.name}
                      price={product.price}
                      imageUrl={product.imagesUrl[0]}
                    />
                  ))
              ) : (
                <h2>Sorry. No products found</h2>
              )}
            </div>
            <Link to="/products" className="intro__btn latest__btn">
              ALL PRODUCTS
            </Link>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="container">
          <h2 className="about__title">
            We Sell The Best
            <br />
            Fruits And Vegetables
          </h2>
          <p className="about__subtitle">
            There are many varieties of fruit and vegetables available and many
            ways to prepare, cook and serve them. A diet high in fruit and
            vegetables can help protect you against cancer, diabetes and heart
            disease.
          </p>
          <div className="about__wrapper">
            <div className="about__item">
              <div className="about__icon">
                <div>
                  <img
                    src="/react-shoppie/icons/mission-icon.svg"
                    alt="mission"
                  />
                </div>
              </div>
              <div className="about__description">
                <h3 className="about__header">Mission</h3>
                <p className="about__text">
                  The mission of Shoppie is dedication to the highest quality of
                  customer service delivered with a sense of warmth,
                  friendliness, individual pride, and company spirit.
                </p>
              </div>
            </div>

            <div className="about__item">
              <div className="about__icon">
                <div>
                  <img
                    src="/react-shoppie/icons/vision-icon.svg"
                    alt="vision"
                  />
                </div>
              </div>
              <div className="about__description">
                <h3 className="about__header">Vision</h3>
                <p className="about__text">
                  To bring consumers safe, high quality foods that provide
                  optimal nutrition.
                </p>
              </div>
            </div>

            <div className="about__item">
              <div className="about__icon">
                <div>
                  <img
                    src="/react-shoppie/icons/history-icon.svg"
                    alt="history"
                  />
                </div>
              </div>
              <div className="about__description">
                <h3 className="about__header">History</h3>
                <p className="about__text">
                  Shoppie is a largest online fruits and vegetables store. With
                  over 18,000 products and over a 1000 brands in our catalogue
                  you will find everything you are looking for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="join">
        <div className="container">
          <h2 className="join__title">Join our newsletter and get 20% off</h2>
          <p className="join__subtitle">
            We care about our customers because they are the reason we are in
            business. Putting their needs at the heart of what we do and
            providing them with fresh fruits and vegetables has been our mission
            since Shoppie was founded in 2022.
          </p>
          <form className="join__form">
            <input
              type="email"
              name="join__email"
              className="join__email"
              placeholder="Enter Email"
              required
            />
            <input type="submit" value="Subscribe" className="join__submit" />
          </form>
        </div>
      </section>
    </>
  );
};

export default HomePage;
