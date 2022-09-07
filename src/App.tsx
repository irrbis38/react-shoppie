import "./App.scss";
import Header from "./layout/Header/Header";
import Main from "./layout/Main/Main";
import Footer from "./layout/Footer/Footer";
import { useState } from "react";
import { getTypeOfSort } from "./utils/utils";
import useProducts from "./hooks/useProducts";

function App() {
  const [sortType, setSortType] = useState(getTypeOfSort);
  const [searchValue, setSearchValue] = useState("");

  // getting products from backend depending by sortType and searchValue
  const products = useProducts(sortType, searchValue);

  const changeSortTypeHandler: selectHandler = (e) => {
    let value = e.target.value;
    localStorage.setItem("sortType", value);
    setSortType(value);
  };

  const searchHandler: inputHandler = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <Header />
      <Main
        products={products}
        changeSortType={changeSortTypeHandler}
        searchHandler={searchHandler}
        searchValue={searchValue}
      />
      <Footer />
    </>
  );
}

export default App;
