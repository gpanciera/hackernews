import React, { useState } from 'react';

const SearchContainer = ({ submitSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleTextChange = (e) => {
    setSearchText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    submitSearch(searchText);
    setSearchText("");
  }

  return (
    <div className="searchContainer">
      <form className="search-form" onSubmit={handleSubmit}>
        <label>
          <span className="form-label">Search: </span>
            <input className="input-field" type="text" value={searchText} onChange={handleTextChange} />
        </label>
        <input className="submit-button" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default SearchContainer;