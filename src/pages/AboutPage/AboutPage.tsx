const AboutPage: React.FC = () => {
  return (
    <>
      <section className="navigation">
        <div className="container">
          <h2 className="navigation__link">
            <a href="/index.html">Home</a>
            <span>/</span>About
          </h2>
        </div>
      </section>
      <section className="history">
        <div className="container">
          <div className="history__wrapper">
            <div className="history__image">
              <img
                src="https://images.unsplash.com/photo-1506484381205-f7945653044d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="store"
              />
            </div>
            <div className="history__description">
              <h2 className="history__title">Our Story</h2>
              <p className="history__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                accusantium sapiente tempora sed dolore esse deserunt eaque
                excepturi, delectus error accusamus vel eligendi, omnis beatae.
                Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
                dolore, obcaecati incidunt sequi blanditiis est exercitationem
                molestiae delectus saepe odio eligendi modi porro eaque in
                libero minus unde sapiente consectetur architecto. Ullam rerum,
                nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed
                quos similique amet. Ex, voluptate accusamus nesciunt totam
                vitae esse iste.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
