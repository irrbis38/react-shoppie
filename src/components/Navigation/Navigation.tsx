import React from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC<{ pageName: string; level?: number }> = ({
  pageName,
  level = 2,
}) => {
  return (
    <section className="navigation">
      <div className="container">
        {level === 2 ? (
          <h2 className="navigation__link">
            <Link to="/">Home</Link>
            <span>/</span>
            {pageName}
          </h2>
        ) : (
          <h2 className="navigation__link">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/products">Products</Link>
            <span>/</span>
            {pageName}
          </h2>
        )}
      </div>
    </section>
  );
};

export default Navigation;
