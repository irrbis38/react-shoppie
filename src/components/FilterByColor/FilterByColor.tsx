import CheckColorButton from '../CheckColorButton/CheckColorButton';

const colors = ['red', 'green', 'blue', 'yellow', 'black'];

const FilterByColor: React.FC = () => {
  return (
    <div className="filters__item">
      <h3 className="filters__title">Colors</h3>
      <div className="filters__colors">
        <button name="color" data-color="all" className="all__btn active">
          All
        </button>
        {colors.map((color) => (
          <CheckColorButton key={color} btnColor={color} />
        ))}
      </div>
    </div>
  );
};

export default FilterByColor;
