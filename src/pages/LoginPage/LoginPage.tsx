const LoginPage = () => {
  return (
    <>
      <section className="navigation">
        <div className="container">
          <h2 className="navigation__link">
            <a href="/index.html">Home</a>
            <span>/</span>Log In
          </h2>
        </div>
      </section>
      <section className="auth">
        <div className="login">
          <h2 className="auth__title">LogIn with email</h2>
          <form className="auth__form">
            <label htmlFor="login-email" className="auth__label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="login-email"
              className="auth__input"
              placeholder="Enter Your Email"
            />
            <label htmlFor="login-password" className="auth__label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="login-password"
              className="auth__input"
              placeholder="Enter Your Password"
            />
            <button type="submit" className="auth__btn">
              LogIn
            </button>
          </form>
          <h2 className="auth__title">LogIn with Google</h2>
          <form className="auth__form">
            <label htmlFor="login-google" className="auth__label">
              Google account
            </label>
            <input
              type="email"
              name="email"
              id="login-google"
              className="auth__input"
              placeholder="Enter Your Google Account"
            />
            <button type="submit" className="auth__btn">
              LogIn
            </button>
          </form>
        </div>
        <div className="signup">
          <h2 className="auth__title">create new account</h2>
          <form className="auth__form">
            <label htmlFor="signup-email" className="auth__label">
              Enter your email
            </label>
            <input
              type="email"
              name="email"
              id="signup-email"
              className="auth__input"
              placeholder="Enter Your Email"
            />
            <label htmlFor="signup-password" className="auth__label">
              Enter your password
            </label>
            <input
              type="password"
              name="password"
              id="signup-password"
              className="auth__input"
              placeholder="Enter Your Password"
            />
            <button type="submit" className="auth__btn">
              Create New Account
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
