import { useEffect, useState } from "react";
import Filters from "./../../layout/Filters/Filters";
import Navigation from "../../components/Navigation/Navigation";
import Catalog from "../../layout/Catalog/Catalog";

const getAllFilters = () => {
  let byCountry = localStorage.getItem("filterByCountry");
  let byCategory = localStorage.getItem("filterByCategory");
  const filters = {
    category: "all",
    country: "all",
  };
  if (byCountry !== null) {
    filters.country = byCountry;
  }
  if (byCategory !== null) {
    filters.category = byCategory;
  }
  return filters;
};

const filterProducts: DoFiltering = (products) => {
  let newProducts = [...products];
  let filters = getAllFilters();
  for (let key in filters) {
    if (!(filters[key as keyof typeof filters] === "all")) {
      newProducts = newProducts.filter(
        (item) =>
          item[key as keyof typeof item] ===
          filters[key as keyof typeof filters]
      );
    }
  }
  return newProducts;
};

const getActiveCountry = () => {
  let country = localStorage.getItem("filterByCountry");
  if (country !== null) {
    return country;
  } else {
    return "all";
  }
};

const getActiveCategory = () => {
  let category = localStorage.getItem("filterByCategory");
  if (category !== null) {
    return category;
  } else {
    return "all";
  }
};

const ProductsPage: React.FC<{
  products: Products[];
  changeSortType: selectHandler;
  searchHandler: inputHandler;
  searchValue: string;
}> = ({ products, changeSortType, searchHandler, searchValue }) => {
  const [productsList, setProductsList] = useState<Products[] | []>([]);
  const [country, setCountry] = useState<string>(() => getActiveCountry());
  const [category, setCategory] = useState<string>(() => getActiveCategory());
  const onCategoryChange: clickButtonHandler = (e) => {
    let filterByCategory = e.currentTarget.value;
    setCategory(filterByCategory);
    localStorage.setItem("filterByCategory", filterByCategory);
    let newProducts = filterProducts(products);
    setProductsList(newProducts);
  };

  const onCountryChange: selectHandler = (e) => {
    let filterByCountry = e.currentTarget.value;
    setCountry(filterByCountry);
    localStorage.setItem("filterByCountry", filterByCountry);
    let newProducts = filterProducts(products);
    setProductsList(newProducts);
  };

  const onClearFilters = () => {
    localStorage.setItem("filterByCountry", "all");
    localStorage.setItem("filterByCategory", "all");
    let newProducts = filterProducts(products);
    setProductsList(newProducts);
    setCategory("all");
    setCountry("all");
  };

  useEffect(() => {
    let newProducts = filterProducts(products);
    setProductsList(newProducts);
  }, [products]);

  return (
    <>
      <Navigation pageName="Products" />
      <section className="products">
        <div className="container">
          <div className="products__wrapper">
            <Filters
              searchHandler={searchHandler}
              searchValue={searchValue}
              onCategoryChange={onCategoryChange}
              onCountryChange={onCountryChange}
              onClearFilters={onClearFilters}
              country={country}
              category={category}
            />
            <Catalog
              products={productsList}
              changeSortType={changeSortType}
              searchValue={searchValue}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
