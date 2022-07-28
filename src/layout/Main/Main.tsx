import { Route, Routes } from 'react-router-dom';
import HomePage from './../../pages/HomePage/HomePage';
import ProductsPage from './../../pages/ProductsPage/ProductsPage';
import AboutPage from './../../pages/AboutPage/AboutPage';
import CartPage from './../../pages/CartPage/CartPage';
import FavoritesPage from './../../pages/FavoritesPage/FavoritesPage';
import LoginPage from './../../pages/LoginPage/LoginPage';
import ProductsItemPage from '../../pages/ProductsItemPage/ProductsItemPage';

const Main: React.FC<{
  products: Products[];
  changeSortType: selectHandler;
  searchHandler: inputHandler;
  searchValue: string;
}> = ({ products, changeSortType, searchHandler, searchValue }) => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<HomePage products={products} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/products"
          element={
            <ProductsPage
              products={products}
              changeSortType={changeSortType}
              searchHandler={searchHandler}
              searchValue={searchValue}
            />
          }
        />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/productsItem" element={<ProductsItemPage />} />
        <Route
          path="*"
          element={
            <div className="container">
              <h2 className="nofound__message">Sorry, this page not found.</h2>
            </div>
          }
        />
      </Routes>
    </main>
  );
};

export default Main;
