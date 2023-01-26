import React, { useState } from 'react';
import SearchIcon from '../images/searchIcon.svg';

function SearchBar() {
  const [search, setSearch] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={ () => { setSearch(!search); } }
      >
        <img
          src={ SearchIcon }
          alt="icon-seach"
          data-testid="search-top-btn"
        />
      </button>
      {
        search && (
          <input
            data-testid="search-input"
            type="text"
          />
        )
      }
    </div>
  );
}

export default SearchBar;
