import FilterByCategory from '../../components/FilterByCategory/FilterByCategory';
import FilterByCountry from '../../components/FilterByCountry/FilterByCountry';
import FilterByColor from './../../components/FilterByColor/FilterByColor';

const Filters: React.FC<{
  searchHandler: inputHandler;
  searchValue: string;
  onCategoryChange: clickButtonHandler;
  onCountryChange: selectHandler;
  onClearFilters: clickButtonHandler;
  country: string;
  category: string;
}> = ({
  searchHandler,
  searchValue,
  onCategoryChange,
  onCountryChange,
  onClearFilters,
  country,
  category,
}) => {
  return (
    <aside className="filters">
      <div className="filters__panel">
        <form className="filters__form">
          <div className="filters__item">
            <input
              type="search"
              name="search"
              placeholder="Search"
              className="filters__search"
              autoComplete="off"
              onChange={(e) => searchHandler(e)}
              value={searchValue}
            />
          </div>

          <FilterByCategory
            onCategoryChange={onCategoryChange}
            category={category}
          />

          <FilterByCountry
            onCountryChange={onCountryChange}
            country={country}
          />

          <FilterByColor />

          <div className="filters__item">
            <h3 className="filters__title">Price</h3>
            <p className="filters__price">$8000.00</p>
            <input
              type="range"
              name="price"
              min="0"
              max="10000"
              value="8000"
              className="filters__range"
            />
          </div>

          <div className="filters__item shipping">
            <label htmlFor="shipping" className="shipping__label">
              free shipping
            </label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              className="shipping__input"
            />
          </div>
        </form>
        <button
          type="button"
          className="filters__clear"
          onClick={onClearFilters}
        >
          clear filters
        </button>
      </div>
    </aside>
  );
};

export default Filters;
