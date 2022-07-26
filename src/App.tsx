import './App.scss';
import Header from './layout/Header/Header';
import Main from './layout/Main/Main';
import Footer from './layout/Footer/Footer';
import { useEffect, useState } from 'react';

export const getTypeOfSort = () => {
  let sortType = localStorage.getItem('sortType');
  if (sortType !== null) {
    return sortType;
  } else {
    return 'priceLowest';
  }
};

function App() {
  const [products, setProducts] = useState<Products[] | []>([]);
  const [sortType, setSortType] = useState(() => getTypeOfSort());
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const getSortType = () => {
      if (sortType === 'priceHighest') {
        return 'sortBy=price&order=desc';
      } else if (sortType === 'nameA') {
        return 'sortBy=name&order=asc';
      } else if (sortType === 'nameZ') {
        return 'sortBy=name&order=desc';
      } else {
        return 'sortBy=price&order=asc';
      }
    };
    const sortParams = getSortType();
    fetch(
      `https://62d52d19d4406e5235549b88.mockapi.io/FruitsAndVegetables?${sortParams}&search=${searchValue}`
    )
      .then((resp) => resp.json())
      .then((items: Products[]) => {
        if (items) {
          setProducts(items);
        } else {
          throw new Error('No data received from server.');
        }
      });
  }, [sortType, searchValue]);

  const changeSortType: selectHandler = (e) => {
    let value = e.currentTarget.value;
    localStorage.setItem('sortType', value);
    setSortType(value);
  };

  const searchHandler: inputHandler = (e) => {
    setSearchValue(e.currentTarget.value);
  };

  return (
    <>
      <Header />
      <Main
        products={products}
        changeSortType={changeSortType}
        searchHandler={searchHandler}
        searchValue={searchValue}
      />
      <Footer />
    </>
  );
}

export default App;
