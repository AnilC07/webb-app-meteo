import React, {useState} from "react";

import "./SearchBar.css";

function SearchBar({handleSearch, input}) {
  
  const [research, setResearch] = useState("")

  const handleChange = (e) => {
    setResearch(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('j\'ai validé')
    handleSearch(research)
    setResearch("")
  }

  return (
    <div>
    <form className="search" onSubmit={onSubmit}>
        <label className="search__label">
          De quelle ville souhaites-tu voir la météo ?
        </label>
        <div className="search__component">
          <input
            type="text"
            className="search__component__input"
            placeholder="Entre un nom de ville"
            value={research}
            onChange={handleChange}
          />
          <button type="submit" className="search__component__btn">Rechercher</button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
