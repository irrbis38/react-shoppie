const FilterByCountry: React.FC<{
  onCountryChange: selectHandler;
  country: string;
}> = ({ onCountryChange, country }) => {
  const countryChangeHandler: selectHandler = (e) => {
    let country = e.currentTarget.value;
    onCountryChange(e);
    localStorage.setItem("filterByCountry", country);
  };

  return (
    <div className="filters__item">
      <h3 className="filters__title">Country</h3>
      <select
        name="country"
        className="filters__country"
        onChange={(e) => countryChangeHandler(e)}
        value={country}
      >
        <option value="all">All</option>
        <option value="Poland">Poland</option>
        <option value="Italy">Italy</option>
        <option value="Spain">Spain</option>
        <option value="France">France</option>
      </select>
    </div>
  );
};

export default FilterByCountry;
