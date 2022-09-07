// getting sort type from localStorage (by price or by name of products)
export const getTypeOfSort = () => {
  let sortType = localStorage.getItem("sortType");
  if (sortType !== null) {
    return sortType;
  } else {
    return "priceLowest";
  }
};

export const getQueryBySortType = (sortType: string) => {
  if (sortType === "priceHighest") {
    return "sortBy=price&order=desc";
  } else if (sortType === "nameA") {
    return "sortBy=name&order=asc";
  } else if (sortType === "nameZ") {
    return "sortBy=name&order=desc";
  } else {
    return "sortBy=price&order=asc";
  }
};
