import CheckColorButton from '../CheckColorButton/CheckColorButton';

const colors = ['red', 'green', 'blue', 'yellow', 'black'];

const FilterByColor: React.FC<{
  onColorChange: clickButtonHandler;
  color: string;
}> = ({ onColorChange, color }) => {
  return (
    <div className="filters__item">
      <h3 className="filters__title">Colors</h3>
      <div className="filters__colors">
        <button
          name="color"
          data-color="all"
          className={color === 'all' ? 'all__btn active' : 'all__btn'}
          onClick={(e) => onColorChange(e)}
        >
          All
        </button>
        {colors.map((color) => (
          <CheckColorButton
            key={color}
            btnColor={color}
            onColorChange={onColorChange}
            color={color}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterByColor;
