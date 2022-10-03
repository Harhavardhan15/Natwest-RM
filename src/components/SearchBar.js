import { useState, useEffect } from "react";
import axios from "axios";
import { DebounceInput } from "react-debounce-input";
const SearchBar = ({ updateData, getSort, takeSort, loading }) => {
  const [search, setSearch] = useState({
    text: "",
    species: "",
    gender: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    getCards();
  }, [search]);

  const getCards = async () => {
    getSort(false);
    const url = `https://rickandmortyapi.com/api/character/?gender=${search.gender}&species=${search.species}&name=${search.text}`;
    try {
      const cardListData = await axios.get(url);
      updateData(cardListData?.data?.results);
    } catch (error) {
      updateData([]);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <DebounceInput
          name="text"
          value={search.text}
          className="searchField"
          placeholder="Enter something here..."
          debounceTimeout={500}
          onChange={handleChange}
        />
        <select
          className="searchField"
          name="gender"
          value={search.gender}
          onChange={handleChange}>
          <option value="" disabled>
            Select Gender
          </option>
          <option>Male</option>
          <option>Female</option>
          <option>Genderless</option>
          <option>Unknown</option>
        </select>
        <select
          className="searchField"
          name="species"
          value={search.species}
          onChange={handleChange}>
          <option value="" disabled>
            Select Specie
          </option>
          <option>Human</option>
          <option>Alien</option>
          <option>Humanoid</option>
        </select>
        <button
          className="reset"
          onClick={() =>
            setSearch({
              text: "",
              species: "",
              gender: ""
            })
          }>
          Reset
        </button>
        <button
          className="reset"
          onClick={(e) => {
            e.preventDefault();
            getSort(!takeSort);
          }}>
          {takeSort ? "Ascending" : "Descending"}
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
