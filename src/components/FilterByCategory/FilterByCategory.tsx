import { useState, useEffect } from "react";
import CategoryBtn from "../CategoryBtn/CategoryBtn";

const allCategories = [
  { name: "all", isActive: true },
  { name: "fruits", isActive: false },
  { name: "vegetables", isActive: false },
  { name: "mushrooms", isActive: false },
  { name: "berries", isActive: false },
  { name: "nuts", isActive: false },
  { name: "exotic", isActive: false },
];

const setActiveCategory = (
  initCategories: SortCategories[],
  category: string
) => {
  let newCategories = [...initCategories];
  newCategories.forEach((elem) =>
    elem.name === category ? (elem.isActive = true) : (elem.isActive = false)
  );
  return newCategories;
};

const FilterByCategory: React.FC<{
  onCategoryChange: clickButtonHandler;
  category: string;
}> = ({ onCategoryChange, category }) => {
  const [categories, setCategories] = useState<SortCategories[]>(() =>
    setActiveCategory(allCategories, category)
  );

  useEffect(() => {
    let newCategories = setActiveCategory(categories, category);
    setCategories(newCategories);
  }, [category]);

  const changeCategoryHandler: clickButtonHandler = (e) => {
    let newCategories = setActiveCategory(categories, e.currentTarget.value);
    setCategories(newCategories);
    onCategoryChange(e);
  };

  return (
    <div className="filters__item">
      <h3 className="filters__title">Category</h3>
      {categories.map((category) => (
        <CategoryBtn
          key={category.name}
          name={category.name}
          isActive={category.isActive}
          changeCategoryHandler={changeCategoryHandler}
        />
      ))}
    </div>
  );
};

export default FilterByCategory;
