import { useEffect, useState } from 'react';
import Filters from './../../layout/Filters/Filters';
import Navigation from '../../components/Navigation/Navigation';
import Catalog from '../../layout/Catalog/Catalog';

const getAllFilters = () => {
  let byCountry = localStorage.getItem('filterByCountry');
  let byCategory = localStorage.getItem('filterByCategory');
  let byColor = localStorage.getItem('filterByColor');
  const filters = {
    category: 'all',
    country: 'all',
    color: 'all',
  };
  if (byCountry !== null) {
    filters.country = byCountry;
  }
  if (byCategory !== null) {
    filters.category = byCategory;
  }
  if (byColor !== null) {
    filters.color = byColor;
  }
  return filters;
};

const getActiveFilter = (filterName: string): string => {
  let country = localStorage.getItem(filterName);
  if (country !== null) {
    return country;
  } else {
    return 'all';
  }
};

const filterProducts: DoFiltering = (products) => {
  let newProducts = [...products];
  let filters = getAllFilters();
  for (let key in filters) {
    if (!(filters[key as keyof typeof filters] === 'all')) {
      if (key === 'color') {
        let chooseColor = filters[key];
        newProducts = newProducts.filter((item) =>
          item.color.includes(chooseColor)
        );
      } else {
        newProducts = newProducts.filter(
          (item) =>
            item[key as keyof typeof item] ===
            filters[key as keyof typeof filters]
        );
      }
    }
  }
  return newProducts;
};

const ProductsPage: React.FC<{
  products: Products[];
  changeSortType: selectHandler;
  searchHandler: inputHandler;
  searchValue: string;
}> = ({ products, changeSortType, searchHandler, searchValue }) => {
  const [productsList, setProductsList] = useState<Products[] | []>([]);
  const [country, setCountry] = useState<string>(() =>
    getActiveFilter('filterByCountry')
  );
  const [category, setCategory] = useState<string>(() =>
    getActiveFilter('filterByCategory')
  );
  const [color, setColor] = useState<string>(() =>
    getActiveFilter('filterByColor')
  );

  const onCategoryChange: clickButtonHandler = (e) => {
    let filterByCategory = e.currentTarget.value;
    setCategory(filterByCategory);
    localStorage.setItem('filterByCategory', filterByCategory);
    let newProducts = filterProducts(products);
    setProductsList(newProducts);
  };

  const onCountryChange: selectHandler = (e) => {
    let filterByCountry = e.currentTarget.value;
    setCountry(filterByCountry);
    localStorage.setItem('filterByCountry', filterByCountry);
    let newProducts = filterProducts(products);
    setProductsList(newProducts);
  };

  const onColorChange: clickButtonHandler = (e) => {
    e.preventDefault();
    if (e.currentTarget.dataset.color) {
      let filterByColor = e.currentTarget.dataset.color;
      setColor(filterByColor);
      localStorage.setItem('filterByColor', filterByColor);
    }
    let newProducts = filterProducts(products);
    setProductsList(newProducts);
  };

  const onClearFilters = () => {
    localStorage.setItem('filterByCountry', 'all');
    localStorage.setItem('filterByCategory', 'all');
    localStorage.setItem('filterByColor', 'all');
    let newProducts = filterProducts(products);
    setProductsList(newProducts);
    setCategory('all');
    setCountry('all');
    setColor('all');
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
              onColorChange={onColorChange}
              country={country}
              category={category}
              color={color}
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
