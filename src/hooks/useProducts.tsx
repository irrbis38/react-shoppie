import { useEffect, useState } from "react";

import { getQueryBySortType } from "./../utils/utils";

const useProducts = (sortType: string, searchValue: string) => {
  const [products, setProducts] = useState<Products[] | []>([]);

  useEffect(() => {
    const sortQuery = getQueryBySortType(sortType);

    fetch(
      `https://62d52d19d4406e5235549b88.mockapi.io/FruitsAndVegetables?${sortQuery}&search=${searchValue}`
    )
      .then((resp) => resp.json())
      .then((items: Products[]) => {
        if (items) {
          setProducts(items);
        } else {
          throw new Error("No data received from server.");
        }
      });
  }, [sortType, searchValue]);

  return products;
};

export default useProducts;
