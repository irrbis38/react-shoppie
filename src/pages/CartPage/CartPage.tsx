const CartPage: React.FC = () => {
  return (
    <>
      <section className="navigation">
        <div className="container">
          <h2 className="navigation__link">
            <a href="/index.html">Home</a>
            <span>/</span>Cart
          </h2>
        </div>
      </section>
      <section className="cart">
        <div className="container">
          <div className="cart__header">
            <p className="cart__column">Item</p>
            <p className="cart__column">Price</p>
            <p className="cart__column">Quantity</p>
            <p className="cart__column">Subtotal</p>
            <p className="cart__column"></p>
          </div>

          <div className="cart__line"></div>
          <div className="cart__main">
            <div className="cart__item">
              <div className="cart__about">
                <div className="cart__img">
                  <img
                    src="https://images.unsplash.com/photo-1515681412668-16d6d4a54ab1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                    alt="rasberry"
                  />
                </div>
                <div className="cart__block">
                  <h3 className="cart__name">Rasberry</h3>
                  <div className="cart__color">
                    Color: <span></span>
                  </div>
                  <p className="price__small">$30.99</p>
                </div>
              </div>
              <p className="cart__price">$30.99</p>
              <div className="cart__quantity">
                <button className="cart__dec">&mdash;</button>
                <span>1</span>
                <button className="cart__inc">+</button>
              </div>
              <p className="cart__sub">$30.99</p>
              <button className="cart__delete">
                <i className="material-icons">delete</i>
              </button>
            </div>
          </div>
          <div className="cart__line"></div>
          <div className="cart__nav">
            <a href="/pages/products/products.html" className="cart__continue">
              Continue Shopping
            </a>
            <button className="cart__clear">Clear Shopping Cart</button>
          </div>
          <div className="cart__footer">
            <div className="cart__info">
              <div className="cart__order">
                <div className="cart__subtotal">
                  <span>Subtotal :</span>
                  <span>$30.99</span>
                </div>
                <div className="cart__fee">
                  <span>Shipping Fee :</span>
                  <span>$5.34</span>
                </div>
                <div className="cart__line"></div>
                <div className="cart__total">
                  <span>Order Total :</span>
                  <span>$36.33</span>
                </div>
              </div>
              <a href="/pages/login/login.html" className="cart__login">
                LOGIN
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
