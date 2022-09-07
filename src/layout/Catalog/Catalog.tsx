import React from "react";

import { useState } from "react";
import CardItem from "../../components/CardItem/CardItem";
import CardItemIcons from "../../components/CardItemIcons/CardItemIcons";
import { getTypeOfSort } from "./../../utils/utils";

const getViewMode = () => {
  let viewMode = localStorage.getItem("catalogMode");
  if (viewMode) {
    return viewMode === "icons" ? true : false;
  } else {
    return true;
  }
};

const Catalog: React.FC<{
  products: Products[];
  changeSortType: selectHandler;
  searchValue: string;
}> = ({ products, changeSortType, searchValue }) => {
  // switch catalog mode - icons or list

  const [isIconsMode, setIsIconsMode] = useState(() => getViewMode());

  const switchCatalogMode = (mode: ViewMode, value: boolean): void => {
    setIsIconsMode(value);
    localStorage.setItem("catalogMode", mode);
  };

  // change sort type

  const [typeOfSort, setTypeOfSort] = useState(() => getTypeOfSort());

  const changeSortTypeHandler: selectHandler = (e) => {
    setTypeOfSort(e.currentTarget.value);
  };

  //render catalog items

  const productsList = products.map((product) => (
    <CardItem
      key={product.id}
      name={product.name}
      price={product.price}
      imageUrl={product.imagesUrl[0]}
    />
  ));

  const productsIcons = products.map((product) => (
    <CardItemIcons
      key={product.id}
      name={product.name}
      price={product.price}
      imageUrl={product.imagesUrl[0]}
    />
  ));

  return (
    <section className="catalog">
      <div className="catalog__panel">
        <div className="catalog__mode">
          <div
            className={`grid__mode ${isIconsMode ? "active" : ""}`}
            onClick={() => switchCatalogMode("icons", true)}
          >
            <i className="material-icons">apps</i>
          </div>
          <div
            className={`list__mode ${!isIconsMode ? "active" : ""}`}
            onClick={() => switchCatalogMode("list", false)}
          >
            <i className="material-icons">list</i>
          </div>
        </div>
        <p className="catalog__info">{products.length} Products Found</p>
        <div className="catalog__line"></div>
        <form className="catalog__sort">
          <label htmlFor="sortby" className="catalog__label">
            Sort By
          </label>
          <select
            name="sortby"
            id="sortby"
            className="catalog__select"
            onChange={(e) => {
              changeSortType(e);
              changeSortTypeHandler(e);
            }}
            value={typeOfSort}
          >
            <option value="priceLowest">price (lowest)</option>
            <option value="priceHighest">price (highest)</option>
            <option value="nameA">name (a - z)</option>
            <option value="nameZ">name (z - a)</option>
          </select>
        </form>
      </div>

      {products.length < 1 && searchValue.length > 0 ? (
        <h2 className="nofound__message">
          Sorry, nothing was found for your search.
        </h2>
      ) : isIconsMode ? (
        <div className="cards__list icons">{productsList}</div>
      ) : (
        <div className="cards__list list">{productsIcons}</div>
      )}
    </section>
  );
};

export default Catalog;
