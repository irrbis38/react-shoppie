import React from "react";

const CategoryBtn: React.FC<{
  name: string;
  isActive: boolean;
  changeCategoryHandler: clickButtonHandler;
}> = ({ name, isActive, changeCategoryHandler }) => {
  return (
    <button
      type="button"
      name="category"
      className={isActive ? "filters__category active" : "filters__category"}
      value={name}
      onClick={(e) => changeCategoryHandler(e)}
    >
      {name}
    </button>
  );
};

export default CategoryBtn;
